notebookLM

https://notebooklm.google.com/notebook/d56b02ad-69c3-413f-be15-0df99787130b


Ryan Carson, a five-time founder, outlines a **3-step AI coding workflow for solo founders** that emphasizes providing ample context to the AI to streamline the development process. This structured approach helps ensure that AI is building the right things and can significantly speed up work, even if you're a "vibe coder".

Here's a breakdown of the workflow:

• **Step 1: Generate a Product Requirement Document (PRD)**

    ◦ **Purpose:** For changes larger than a quick fix, a PRD helps clearly describe the feature you want to build to the AI.

    ◦ **Method:** Ryan uses a **pre-written instruction file (a "rule")** in Cursor (a VS Code fork) that teaches the AI how to write a PRD for the user.

    ◦ **Prompting Technique:** A key instruction in his initial prompt for the AI is that the PRD should be **"suitable for a junior developer to understand and implement this feature."** This helps the AI keep the explanation at an accessible level and avoids overly complex outputs.

    ◦ **Interaction:** After the initial instruction (e.g., "I'd like to add a report that shows me all the boat names of members and how many emails they've been sent"), the AI asks clarifying questions formatted with **dot notation (e.g., 2.1, 2.2)**, which Ryan answers. He sometimes tells the AI to "make your best judgment" for less critical questions.

    ◦ **Output:** The AI generates a markdown PRD file, including functional requirements, non-goals, and design considerations, which is then placed in a designated `tasks` folder.

• **Step 2: Generate a Detailed Task List from the PRD**

    ◦ **Purpose:** To break down the PRD into concrete, step-by-step tasks that the AI can execute. This is a significant time-saver for engineers and product managers who often get stuck breaking down PRDs.

    ◦ **Method:** Ryan uses another **pre-defined rule file called** **generate tasks**. He prompts the AI by saying "please generate tasks task for" and then tags the previously created PRD file.

    ◦ **Rule Design:** This rule explicitly guides the AI on the desired format of the task list, specifying it should be a **markdown file with checkboxes**. Ryan notes he developed these rules through **trial and error**, getting more specific and even using intelligent LLMs to help write and edit them initially.

    ◦ **AI Reasoning:** The AI uses a "reasoning model" showing its "thinking tokens," which Ryan finds valuable for visibility, despite the slight extra cost.

    ◦ **Confirmation:** The rule is designed to generate basic tasks and then ask for user confirmation (e.g., "ready to generate the subtasks respond with go to proceed") before proceeding. This brings "agentic thinking" into a linear, step-by-step chat mode.

• **Step 3: Iteratively Work Through the Task List**

    ◦ **Purpose:** To systematically execute the coding tasks outlined in the PRD-generated list.

    ◦ **Method:** Ryan employs a third rule, `task list management`, which instructs the AI to **focus on "one subtask at a time," immediately mark it as complete upon finishing, and "stop after each subtask" to wait for user input** ("go ahead" or simply "y").

    ◦ **Human-in-the-Loop:** This process maintains a crucial "human in the loop" element, allowing Ryan to check for small problems or errors introduced by the AI after each step.

    ◦ **Commit Strategy:** He commits changes to Git after completing a "parent task" if the application is in a workable state, or waits until all subtasks are done if it's a smaller feature. He assesses the potential impact of needing to revert changes.

    ◦ **Simplicity:** He prefers a simple markdown file for the task list over more complex project management software, as it's easier to track and modify.

**Todos for Applying the PRD Concept to Prototyping and Organizing Prompts:**

Based on Ryan Carson's workflow and insights, here are some practical steps and concepts to apply for prototyping and prompt organization:

• **Prioritize Context Over Speed (Initially):**

    ◦ **Slow Down to Speed Up:** Recognize that rushing through context setting is the "biggest mistake" and that a little patience upfront will ultimately accelerate your workflow.

    ◦ **Comprehensive Context:** For prototyping, provide the AI with all necessary background, functional requirements, design considerations, and even non-goals to guide its initial output.

• **Structure Your AI Interactions with Reusable Rules/Prompts:**

    ◦ **Create "Rule Files":** Develop specific instruction sets for common tasks like "Generate a Prototype Concept PRD," "Breakdown Prototype into Tasks," or "Implement Prototype Feature". Open-source these if applicable.

    ◦ **Define AI Persona/Level:** For clear and actionable prototype specifications, instruct the AI to generate content "suitable for a junior developer to understand and implement". This keeps the output practical.

    ◦ **Explicit Formatting:** Dictate the output format for your prototype plans. Use **markdown, checkboxes, and clear dot notation for questions/tasks** to make the AI's responses easy to read, track, and interact with. For example, specify that the AI should output HTML/CSS/JS snippets in distinct code blocks.

• **Break Down Complexity Iteratively:**

    ◦ **PRD for Prototype Concepts:** Even for prototypes, draft a PRD-like document (or have the AI generate one) to define the core idea, features, and user flow.

    ◦ **Task List from PRD:** Generate a detailed task list from your prototype's PRD. Break down features into granular steps (e.g., "Create basic HTML structure," "Style with CSS," "Add JavaScript interaction").

    ◦ **One Subtask at a Time:** Instruct the AI to tackle one specific subtask, wait for your review, and then proceed to the next. This allows for continuous oversight and correction.

• **Embrace Human-in-the-Loop Oversight:**

    ◦ **Constant Review:** Don't let the AI run autonomously for too long. Pause after each logical step or subtask to review its output, check for errors, and ensure alignment with your vision.

    ◦ **Iterative Refinement:** Be prepared to tell the AI to "think harder about this" or "I believe you can do this" if its output isn't quite right. Politeness to LLMs is seen as beneficial.

    ◦ **Learn Your Model's Strengths:** Consistently use the same AI model (e.g., Gemini 2.5 Pro or Claude 3.7 Sonnet) for coding tasks to understand its specific capabilities and limitations.

• **Optimize Context Management for Deeper Work:**

    ◦ **"Relevant Files" Section:** For larger prototyping efforts, maintain a section in your prompt (or a separate file) explicitly listing "relevant files" that the LLM should focus on, even if they are also tagged.

    ◦ **External Context Tools (e.g., Repo Prompt):** For "heavy lifting stuff" or when you need precise control over the context window, consider tools like Repo Prompt (for Mac) to select exact files or directories and generate a prompt with precisely demarcated file contents. This is especially useful when dealing with large codebases for a prototype.

    ◦ **Model-Calling Programs (MCPs/Plugins):** Explore using MCPs like Browserbase to enable the AI to interact with headless browsers for frontend testing of your prototypes, or database tools like Postgres for backend interactions, directly from the chat window. This reduces "toil" and orchestrates work from a single interface.

By applying these principles, solo founders can leverage AI to manage complex coding projects, from initial concept to functional prototype, much more efficiently.