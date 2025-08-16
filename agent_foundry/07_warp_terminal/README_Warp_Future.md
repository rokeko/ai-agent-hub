# 🚀 Warp Terminal Guide for 6RO_DEV_HUB

Welcome to your AI-native development hub using Warp Terminal. This guide shows you how to set up Warp for daily use alongside VS Code, Gemini CLI, and your Obsidian vault.

---

## 📍 Recommended Warp Start Directory

**Path:**  
`~/Google Drive/6RO_DEV_HUB/`

This is your central launchpad for all terminal-based activity in the 6RO system.

---

## 📁 Key Folder Structure and Warp Use Cases

| Folder                | Terminal Role                             | Example Command                                 |
|----------------------|-------------------------------------------|-------------------------------------------------|
| `01_docs/`           | Notes, drafts, initial README files       | `cd 01_docs/ideas_drafts`                      |
| `02_agent_prds/`     | Main PRD workspace for each agent         | `cd 02_agent_prds/traveler_agent/`             |
| `03_flow_sketches/`  | LangFlow, Cursor, visual diagrams          | `cd 03_flow_sketches/langflow/`                |
| `04_notebooks/`      | LangGraph, Jupyter notebooks               | `jupyter lab` or `python agent_test.py`        |
| `05_templates/`      | Reference templates (PRDs, YAML, tasks)    | `cat 05_templates/agent_prd_template.md`       |
| `06_exports_obsidian/`| Output staging area for Obsidian vault   | `mv my_agent_final.md ../6RO_Obsidian_Vault/`  |

---

## 🧠 Use Warp for

- Building and editing new agents
- Running scripts or LangGraph flows
- Syncing exports with your Obsidian vault
- Testing Gemini CLI agents and flows
- Navigating across development layers

---

## ⚙️ Suggested Warp Workflows (Coming Soon)

You can later add custom Warp workflows:

| Alias         | Description                                      |
|---------------|--------------------------------------------------|
| `new-agent`   | Create new PRD subfolder from template           |
| `sync-obsidian` | Move export file into Obsidian vault          |
| `launch-gemini` | Start Gemini CLI in PRD or notebook context   |

> Warp workflows can be set up using the in-app Workflow Editor or CLI.

---

## 🧰 Optional: Warp Init Script

To automatically launch Warp in this directory:

1. Open Warp preferences → `Startup Directory`
2. Set it to:
   ```
   ~/Google Drive/6RO_DEV_HUB/
   ```

Alternatively, create a `.warp/init.sh`:

```bash
#!/bin/zsh
cd ~/Google\ Drive/6RO_DEV_HUB/
```

---

## 🧱 Works Seamlessly With

| Tool          | How it connects                             |
|---------------|---------------------------------------------|
| **VS Code**   | Open entire folder: `code .`                |
| **Gemini CLI**| Run from any PRD or notebook subfolder      |
| **GitHub**    | Git initialize inside `6RO_DEV_HUB/`        |
| **Obsidian**  | Sync via `06_exports_obsidian/`             |

---

## 📦 Where to Store This README

Save this file as:  
`6RO_DEV_HUB/README_Warp.md`

To maintain clarity, link this from your master system doc:  
`[[README_Warp]]` from `Vault_System_Overview.md`.

---
