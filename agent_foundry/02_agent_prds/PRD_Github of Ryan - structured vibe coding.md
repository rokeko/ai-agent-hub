

source:
https://github.com/snarktank/ai-dev-tasks/blob/main/README.md

[Open in github.dev](https://github.dev/) [Open in a new github.dev tab](https://github.dev/) [Open in codespace](https://github.com/codespaces/new/snarktank/ai-dev-tasks/tree/main?resume=1)

[Merge branch 'main' into claude-code-support](https://github.com/snarktank/ai-dev-tasks/commit/a17e51f10c9cbe494c29cd626acc54533f61b960)

[a17e51f](https://github.com/snarktank/ai-dev-tasks/commit/a17e51f10c9cbe494c29cd626acc54533f61b960) ·

Welcome to **AI Dev Tasks**! This repository provides a collection of markdown files designed to supercharge your feature development workflow with AI-powered IDEs and CLIs. Originally built for [Cursor](https://cursor.sh/), these tools work with any AI coding assistant including Claude Code, Windsurf, and others. By leveraging these structured prompts, you can systematically approach building features, from ideation to implementation, with built-in checkpoints for verification.

Stop wrestling with monolithic AI requests and start guiding your AI collaborator step-by-step!

Building complex features with AI can sometimes feel like a black box. This workflow aims to bring structure, clarity, and control to the process by:

1. **Defining Scope:** Clearly outlining what needs to be built with a Product Requirement Document (PRD).
2. **Detailed Planning:** Breaking down the PRD into a granular, actionable task list.
3. **Iterative Implementation:** Guiding the AI to tackle one task at a time, allowing you to review and approve each change.

This structured approach helps ensure the AI stays on track, makes it easier to debug issues, and gives you confidence in the generated code.

Here's the step-by-step process using the `.md` files in this repository:

First, lay out the blueprint for your feature. A PRD clarifies what you're building, for whom, and why.

You can create a lightweight PRD directly within your AI tool of choice:

1. Ensure you have the `create-prd.md` file from this repository accessible.
2. In your AI tool, initiate PRD creation:
	```
	Use @create-prd.md
	Here's the feature I want to build: [Describe your feature in detail]
	Reference these files to help you: [Optional: @file1.py @file2.ts]
	```
	*(Pro Tip: For Cursor users, MAX mode is recommended for complex PRDs if your budget allows for more comprehensive generation.)*
	[![Example of initiating PRD creation](https://camo.githubusercontent.com/c834096a242e009efe2588f3758b4b3c785e5917da7e2c6966032b1b19c1506d/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f3644446c795830414153374a453f666f726d61743d6a7067266e616d653d6c61726765)](https://camo.githubusercontent.com/c834096a242e009efe2588f3758b4b3c785e5917da7e2c6966032b1b19c1506d/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f3644446c795830414153374a453f666f726d61743d6a7067266e616d653d6c61726765)

With your PRD drafted (e.g., `MyFeature-PRD.md`), the next step is to generate a detailed, step-by-step implementation plan for your AI Developer.

1. Ensure you have `generate-tasks.md` accessible.
2. In your AI tool, use the PRD to create tasks:
	```
	Now take @MyFeature-PRD.md and create tasks using @generate-tasks.md
	```
	*(Note: Replace `@MyFeature-PRD.md` with the actual filename of the PRD you generated in step 1.)*
	[![Example of generating tasks from PRD](https://camo.githubusercontent.com/b4845e71f777e60f8a7c99ec7075cb717bb567541d5f0b8d147a5f9dfd796962/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f3646495462576b41412d5243543f666f726d61743d6a7067266e616d653d6d656469756d)](https://camo.githubusercontent.com/b4845e71f777e60f8a7c99ec7075cb717bb567541d5f0b8d147a5f9dfd796962/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f3646495462576b41412d5243543f666f726d61743d6a7067266e616d653d6d656469756d)

You'll now have a well-structured task list, often with tasks and sub-tasks, ready for the AI to start working on. This provides a clear roadmap for implementation.

[![Example of a generated task list](https://camo.githubusercontent.com/689651c09abb76ffa646986c4608ecb60e005b02c173540c5cc5c877ef95da62/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f36474e754f577341456353446d3f666f726d61743d6a7067266e616d653d6d656469756d)](https://camo.githubusercontent.com/689651c09abb76ffa646986c4608ecb60e005b02c173540c5cc5c877ef95da62/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f36474e754f577341456353446d3f666f726d61743d6a7067266e616d653d6d656469756d)

To ensure methodical progress and allow for verification, we'll use `process-task-list.md`. This command instructs the AI to focus on one task at a time and wait for your go-ahead before moving to the next.

1. Create or ensure you have the `process-task-list.md` file accessible.
2. In your AI tool, tell the AI to start with the first task (e.g., `1.1`):
	```
	Please start on task 1.1 and use @process-task-list.md
	```
	*(Important: You only need to reference `@process-task-list.md` for the *first* task. The instructions within it guide the AI for subsequent tasks.)*
	The AI will attempt the task and then prompt you to review.
	[![Example of starting on a task with process-task-list.md](https://camo.githubusercontent.com/8d42c60beb7804d823dc7bcc9945bc6cc47d6157aeb13ce45b58460ebdfb9b4f/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f364934314b57634141416c48633f666f726d61743d6a7067266e616d653d6d656469756d)](https://camo.githubusercontent.com/8d42c60beb7804d823dc7bcc9945bc6cc47d6157aeb13ce45b58460ebdfb9b4f/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f364934314b57634141416c48633f666f726d61743d6a7067266e616d653d6d656469756d)

As the AI completes each task, you review the changes.

- If the changes are good, simply reply with "yes" (or a similar affirmative) to instruct the AI to mark the task complete and move to the next one.
- If changes are needed, provide feedback to the AI to correct the current task before moving on.

You'll see a satisfying list of completed items grow, providing a clear visual of your feature coming to life!

[![Example of a progressing task list with completed items](https://camo.githubusercontent.com/cb75ddd8a367a8ad6f572295eecbbb0690106cb52f88d45ea037c37665f924c5/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f364b72585a576b41415f5575583f666f726d61743d6a7067266e616d653d6d656469756d)](https://camo.githubusercontent.com/cb75ddd8a367a8ad6f572295eecbbb0690106cb52f88d45ea037c37665f924c5/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f476f364b72585a576b41415f5575583f666f726d61743d6a7067266e616d653d6d656469756d)

While it's not always perfect, this method has proven to be a very reliable way to build out larger features with AI assistance.

If you'd like to see this in action, I demonstrated it on [Claire Vo's "How I AI" podcast](https://www.youtube.com/watch?v=fD4ktSkNCw4).

[![Demonstration of AI Dev Tasks on How I AI Podcast](https://camo.githubusercontent.com/d77a7107b7ad6bbb26ed35a257f40098bb2070d917f696a2347e18541bb6b883/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6644346b74536b4e4377342f6d617872657364656661756c742e6a7067)](https://camo.githubusercontent.com/d77a7107b7ad6bbb26ed35a257f40098bb2070d917f696a2347e18541bb6b883/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6644346b74536b4e4377342f6d617872657364656661756c742e6a7067)

- **`create-prd.md`**: Guides the AI in generating a Product Requirement Document for your feature.
- **`generate-tasks.md`**: Takes a PRD markdown file as input and helps the AI break it down into a detailed, step-by-step implementation task list.
- **`process-task-list.md`**: Instructs the AI on how to process the generated task list, tackling one task at a time and waiting for your approval before proceeding. (This file also contains logic for the AI to mark tasks as complete).

## 🌟 Benefits

- **Structured Development:** Enforces a clear process from idea to code.
- **Step-by-Step Verification:** Allows you to review and approve AI-generated code at each small step, ensuring quality and control.
- **Manages Complexity:** Breaks down large features into smaller, digestible tasks for the AI, reducing the chance of it getting lost or generating overly complex, incorrect code.
- **Improved Reliability:** Offers a more dependable approach to leveraging AI for significant development work compared to single, large prompts.
- **Clear Progress Tracking:** Provides a visual representation of completed tasks, making it easy to see how much has been done and what's next.
1. **Clone or Download:** Get these `.md` files into your project or a central location where your AI tool can access them.
2. **Follow the Workflow:** Systematically use the `.md` files in your AI assistant as described in the workflow above.
3. **Adapt and Iterate:**
	- Feel free to modify the prompts within the `.md` files to better suit your specific needs or coding style.
	- If the AI struggles with a task, try rephrasing your initial feature description or breaking down tasks even further.

## Tool-Specific Instructions

### Cursor

Cursor users can follow the workflow described above, using the `.md` files directly in the Agent chat:

1. Ensure you have the files from this repository accessible
2. In Cursor's Agent chat, reference files with `@` (e.g., `@create-prd.md`)
3. Follow the 5-step workflow as outlined above
4. **MAX Mode for PRDs:** Using MAX mode in Cursor for PRD creation can yield more thorough results if your budget supports it

### Claude Code

To use these tools with Claude Code:

1. **Copy files to your repo**: Copy the three `.md` files to a subdirectory in your project (e.g., `/ai-dev-tasks`)
2. **Reference in CLAUDE.md**: Add these lines to your project's `./CLAUDE.md` file:
	```
	# AI Dev Tasks
	Use these files when I request structured feature development using PRDs:
	/ai-dev-tasks/create-prd.md
	/ai-dev-tasks/generate-tasks.md
	/ai-dev-tasks/process-task-list.md
	```
3. **Create custom commands** (optional): For easier access, create these files in `.claude/commands/`:
	- `.claude/commands/create-prd.md` with content:
		```
		Please use the structured workflow in /ai-dev-tasks/create-prd.md to help me create a PRD for a new feature.
		```
	- `.claude/commands/generate-tasks.md` with content:
		```
		Please generate tasks from the PRD using /ai-dev-tasks/generate-tasks.md
		If not explicitly told which PRD to use, generate a list of PRDs and ask the user to select one under \`/tasks\` or create a new one using \`create-prd.md\`:
		- assume it's stored under \`/tasks\` and has a filename starting with \`prd-\` (e.g., \`prd-[name].md\`)
		- it should not already have a corresponding task list in \`/tasks\` (e.g., \`tasks-prd-[name].md\`)
		- **always** ask the user to confirm the PRD file name before proceeding
		Make sure to provide options in number lists so I can respond easily (if multiple options).
		```
	- `.claude/commands/process-task-list.md` with content:
		```
		Please process the task list using /ai-dev-tasks/process-task-list.md
		```
	Make sure to restart Claude Code after adding these files (`/exit`). Then use commands like `/create-prd` to quickly start the workflow. Note: This setup can also be adopted for a global level across all your projects, please refer to the Claude Code documentation [here](https://docs.anthropic.com/en/docs/claude-code/memory) and [here](https://docs.anthropic.com/en/docs/claude-code/common-workflows#create-personal-slash-commands).

### Other Tools

For other AI-powered IDEs or CLIs:

1. Copy the `.md` files to your project
2. Reference them according to your tool's documentation
3. Follow the same workflow principles
- **Be Specific:** The more context and clear instructions you provide (both in your initial feature description and any clarifications), the better the AI's output will be.
- **Use a Capable Model:** The free version of Cursor currently uses less capable AI models that often struggle to follow the structured instructions in this workflow. For best results, consider upgrading to the Pro plan to ensure consistent, accurate task execution.
- **MAX Mode for PRDs:** As mentioned, using MAX mode in Cursor for PRD creation (`create-prd.mdc`) can yield more thorough and higher-quality results if your budget supports it.
- **Correct File Tagging:** Always ensure you're accurately tagging the PRD filename (e.g., `@MyFeature-PRD.md`) when generating tasks.
- **Patience and Iteration:** AI is a powerful tool, but it's not magic. Be prepared to guide, correct, and iterate. This workflow is designed to make that iteration process smoother.

## 🤝 Contributing

Got ideas to improve these `.md` files or have new ones that fit this workflow? Contributions are welcome!

Please feel free to:

- Open an issue to discuss changes or suggest new features.
- Submit a pull request with your enhancements.

---

Happy AI-assisted developing!