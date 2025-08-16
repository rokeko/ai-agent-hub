# 🚀 Warp Terminal Integration for 6RO_DEV_HUB

This folder supports your usage of Warp as the terminal for working with this hub.

## Setup

1. **Start Warp in this directory**
   Configure Warp to open in:
   ```
   ~/Google Drive/6RO_DEV_HUB/
   ```

2. **Startup Config**
   Add aliases or environment setup to `startup_config.sh`.

3. **Examples**
```bash
alias devstart="cd ~/Google\ Drive/6RO_DEV_HUB && code ."
alias obsync="cp -r 06_exports_obsidian/* ~/Dropbox/Obsidian/6RO_Vault/"
```

4. **Next Steps (Documented for later use)**

- GitHub init:
```bash
git init
git add .
git commit -m "Initial 6RO_DEV_HUB structure"
```

- GitHub remote setup:
```bash
git remote add origin <your-repo-url>
git push -u origin main
```

- VS Code workspace JSON and `.devcontainer/` folder for live collaboration can be added later.

