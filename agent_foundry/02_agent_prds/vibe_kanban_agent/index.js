const express = require('express');
const { readObsidianVault } = require('./obsidian_reader');
const { transformToHtml } = require('./transformer');
const { postToSquarespace } = require('./squarespace_publisher');
const { watchObsidianVault } = require('./obsidian_watcher');

const app = express();
const port = 3000;

// TODO: Replace this with the actual path to your Obsidian vault
const vaultPath = '/path/to/your/obsidian/vault';

app.use(express.static('public'));
app.use(express.json()); // To parse JSON request bodies

// Function to process Obsidian vault content
async function processObsidianContent() {
  const fileContents = await readObsidianVault(vaultPath);
  const kanbanData = {
    'To Do': [],
    'In Progress': [],
    'Done': [],
  };

  fileContents.forEach(({ file, content }) => {
    // A simple logic to distribute cards among columns
    if (file.includes('todo')) {
      kanbanData['To Do'].push({ content: transformToHtml(content) });
    } else if (file.includes('progress')) {
      kanbanData['In Progress'].push({ content: transformToHtml(content) });
    } else {
      kanbanData['Done'].push({ content: transformToHtml(content) });
    }
  });
  return kanbanData;
}

app.get('/api/kanban', async (req, res) => {
  const kanbanData = await processObsidianContent();
  res.json(kanbanData);
});

app.post('/api/publish', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  const result = await postToSquarespace(title, content);
  if (result) {
    res.status(200).json({ message: 'Content published successfully!', data: result });
  } else {
    res.status(500).json({ error: 'Failed to publish content.' });
  }
});

app.listen(port, () => {
  console.log(`Vibe Kanban agent listening at http://localhost:${port}`);
  // Start watching the Obsidian vault for changes
  watchObsidianVault(vaultPath, async (eventType, filePath) => {
    console.log(`File ${filePath} ${eventType}`);
    // In a real application, you would re-process the content and update the frontend
    // For now, we just log the change.
    // You might want to trigger a re-render of the Kanban board here.
  });
});
