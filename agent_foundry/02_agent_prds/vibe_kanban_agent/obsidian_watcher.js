const chokidar = require('chokidar');

function watchObsidianVault(vaultPath, callback) {
  const watcher = chokidar.watch(vaultPath, {
    ignored: /(^|[\][\]\..)/, // ignore dotfiles
    persistent: true,
    ignoreInitial: true, // Don't trigger add events on startup
  });

  watcher
    .on('add', (path) => callback('add', path))
    .on('change', (path) => callback('change', path))
    .on('unlink', (path) => callback('unlink', path));

  console.log(`Watching Obsidian vault at ${vaultPath} for changes...`);

  return watcher;
}

module.exports = { watchObsidianVault };
