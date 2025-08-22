const fs = require('fs/promises');
const path = require('path');

async function readObsidianVault(vaultPath) {
  try {
    const files = await fs.readdir(vaultPath);
    const fileContents = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(vaultPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        return { file, content };
      })
    );
    return fileContents;
  } catch (error) {
    console.error('Error reading Obsidian vault:', error);
    return [];
  }
}

module.exports = { readObsidianVault };
