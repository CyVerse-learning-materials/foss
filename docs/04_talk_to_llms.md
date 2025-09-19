# How to Talk to Large Language Models

[CyVerse Full Prompt Engineering Workshop](https://tyson-swetnam.github.io/intro-gpt){target=_blank}

---

## How is the AI revolution impacting Open Science?

!!! quote "Center for Open Science: [Evaluating AI’s Impact on Open Research Infrastructure](https://www.cos.io/blog/evaluating-ai-impact-on-open-research-infrastructure) "

    !!! success ""*When used responsibly, it can support open models and data, accelerate discovery, and aid in the evaluation of research...* <br> *... but it can also undermine credibility when used to plagiarize, fabricate findings, or mislead readers.* ""
    
    !!! failure ""*With the emergence of generative AI, it has become very easy to create content that looks like a real research paper, but is not genuine research.*""

!!! quote "MDPI Blog: [How Artificial Intelligence is Accelerating Open Access Science](https://blog.mdpi.com/2025/09/09/open-science-artificial-intelligence/)"

    !!! success ""*Artificial intelligence, like any new technology, presents both a threat and an opportunity. It requires reflection, adjustment, and adaptation. <br> <br> If implemented carefully and thoughtfully, AI could help us respond to some of the issues that the Open Access scientific publishing industry currently faces. These include the increasing amounts of data being produced and also language barriers and imbalances in outputs between countries. <br><br> Further, AI could help to promote openness in datasets and content aggregators.*""


    !!! failure ""*GPT is not fully reliable. <br> <br> GPT training involves analysing a huge body of text and noticing patterns so it can predict the next word in a passage. <br> <br> This results in human-like text, meaning it sounds like it’s written by a human but may not necessarily be by one. Similarly, it may sound like it is conveying meaning, but the argument or claim being made may be without evidence or structure.*""
        

    !!! success ""*Artificial intelligence is changing Open Access; it’s changing everything. Ultimately, though, it’s a tool, so how it’s used determines its value. <br> <br> If used carefully, AI could help advance Open Access by automating repetitive data-related tasks, making the translation process more interactive, and promoting openness in datasets and content aggregators.* <br> <br> ***However, attention must be paid to its flaws and potential for misuse.***""

<figure markdown>
  <a target="blank">![ducky](https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg){width=400} </a>
    <figcaption> Rubber duck debugging, [Wikipedia](https://en.wikipedia.org/wiki/Rubber_duck_debugging)</figcaption>
</figure>

The AI revolution is here and it isn't going away any time soon. Tools such as ChatGPT, Machine Learning and Large Language Models (LLMs) present an opportunity that is as (probably) as impactful as the arrival of the internet for the average human. Over the course of decades, scientists have encouraged the application of techniques that are in the Open Science realm, but with AI, Open Science requires to revisit many of its pillars and values.

For example, the necessity of communicating with another person in order to review your work is quickly being overtaken by using LLMs to help improve and edit your work, challenging the topic of simple collaborations and peer review. In the case of building code, LLMs are a fantastic resource that can help removing typos, encourage conciseness, and create helpful comments.

However, these can act like echo chambers, where your expectations can lead to [**hallucinations** ](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) or even pave the way to the ["new p-hacking": prompt-hacking](https://arxiv.org/pdf/2504.14571).

Therefore, it is imperial that as scientists we embrace the discussion of AI in Open Science, understand how it can help us with our daily work and challenge ourselves to ensure that **science stays human**.

---

## LLM Chatbots for Open Science

Large Language Model (LLM) chatbots have fundamentally changed how we humans are going to interact with computers going forward. They provide a natural language interface to instruct computers to do many tasks including:

- Read, write, and summarize text
- Analyze data
- Explain techical topics
- Search the web and retrieve information
- Generate, optimize, and explain many types of computer code 
- Understand and generate images

<br>

Current LLMs generally provide recommendation for how _you_ could do things. ie, they provide you code and text recommendations but don't actually execute anything. But these technologies are advancing quickly and new capabilities are developed and released constantly. Soon, [AI Agents](https://github.com/Significant-Gravitas/AutoGPT) could be everywhere executing on instructions in autonomous and semi-autonomous ways.

<br>

### Commercial Chatbots

<figure style="display: flex; justify-content: center;">
    <a href="https://openai.com/chatgpt"><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="openai" style="width: 120px; margin-right: 15px;"></a>
    <a href="https://gemini.google.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="gemini" style="width: 240px; margin-right: 15px;"></a>
    <a href="https://www.anthropic.com/claude"><img src="https://claude.ai/images/claude_app_icon.png" alt="foster" style="width: 120px; margin-right: 15px;"></a>
    <a href="https://copilot.microsoft.com/"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Microsoft_Copilot_Icon.svg/1024px-Microsoft_Copilot_Icon.svg.png" alt="cos" style="width: 120px;"></a>
</figure>

- [:simple-openai: ChatGPT](https://openai.com/chatgpt)
- [:simple-google: Gemini](https://gemini.google.com/)
- [:simple-anthropic: Claude](https://www.anthropic.com/claude)
- [:octicons-copilot-16: Copilot](https://copilot.microsoft.com/)


### LLMs in 150 words (or less)

**How they're made**: LLMs work by training on vast amounts of text from the internet. They learn patterns, grammar, and context from this data. When you give them a prompt, they generate text based on what they've learned. Imagine a super-smart autocomplete for text, but it can also create entire paragraphs or articles.

**How they work**: LLMs don't understand like humans do. They predict what comes next in a sentence using math and probabilities. They don't have thoughts or feelings. They mimic human language but can make mistakes or write nonsense if not guided well.

**How you can use them**: They're incredibly versatile. You can use them for answering questions, writing essays, coding help, and more. ***But you must be cautious because they can generate biased or false information if not used responsibly***. 

In a nutshell, LLMs are like super-powered text generators trained on the internet's vast knowledge.

<br>
<br>

<p style="text-align: center; font-size:1.3em; color: orange;"> <b><u> ⚠️⚠️ VERIFY EVERTHING CHATBOTS TELL YOU! ⚠️⚠️</u></b></p>

<br>
<br>

### :simple-openai: Prompt Writing

LLM Chatbots are meant to be conversational. In general, you are asking the Chatbot questions (known as **Prompts**) and the Chatbot will respond with answers. 

It is a bit of an artform to get the Chatbot to provide answers with the specificity and format that you want. An entire field of study has sprung up, called **Prompt Engineering**, which seeks to find the magic words that will elicit the best (and technically correct) responses from the Chatbot. 

<br>
<br>

#### **Prompt Priming** 

Provide lots of organized details to help the Chatbot understand the question and what it's task is. This could include adding a backstory or context for why you are asking the question. Be very specific in terms of what you want from the Chatbot and how you want it. 

Zero-shot unconditioned prompts are likely to return the least specific responses. Responses are more likely to be useful when multiple specific output types are defined.

| Types of Priming | Example |
|------------------|---------|
| Zero (Shot) | "Write five examples of assessments for watershed health." |
| Single | "Write five examples of assessments for watershed health. Here is one example: Geomorphology" |
| Multiple | "Write five examples of assessments for watershed health related to geomorphology, water quality, and species diversity." |

<br>
<br>

#### **Linked Prompts**

Responses to prompts may not return the exact details or information that you are after the first time. Follow-up by rephrasing your prompts more carefully and continuing with iterative prompting can build upon your priors.

"Chain prompting" or "Linked Prompting" brings multiple prompts together.

| Linked Prompting | Examples |
|------------------|----------|
| Step 1: Priming | "I want you to act as an eminent hydrologist from CUASHI. Provide me with a list of the ten most important topics in hydrology over the last decade focused around research in the global south, working with indigenous communities, and traditional ecological knowledge systems." |
| Step 2: Summarizing | "Based on the list you just created, summarize the most pressing financial challenges faced by indigenous communities in the Global South, versus indigenous communities in North America, in less than 50 words." |
| Step 3: Try again with a web search | "Based on the results of web access, can you confirm the validity of the ten important topics and provide at least one reference to each." |

!!! tip "Encouraging the Chatbot to do Better"
    Chatbot responses can be missing information or just plain wrong. When this occurs, you can point out the mistake and ask the Chatbot to provide a more complete or better answer. Don't settle for poor responses!

<br>
<br>

#### Role Playing

Some people find that asking the Chatbot to adopt a persona will lead to better responses. 

"I want you to act as ..." will establish what type of conversation you are planning to have. 

| Types of Roles |
|---|
| Project Manager  | 
| Copywriter / Editor  | 
| Paper Reviewer | 
| Teacher / Mentor / Advisor |
| Student / Learner / Participant |
| Software Engineer  |
| DevOps Engineer  |
| Linux Terminal  |
| Python Interpreter |
| Web Browser |

<br>
<br>
<br>

### Prompting Chatbots for FOSS

<br>

#### Provide a general outline for a data management plan

```
I am writing a grant proposal to the National Science Foundation. 
Could you please provide me a basic template for a data management plan (DMP) and 
please provide url links to resources that can help me with NSF DMP requirements.
```
<br>
<br>


#### Provide a step-by-step recipe to create and serve an mkdocs website in Github

```
I would like to create a personal website using the MKdocs style 
and host it on Github pages.

Could you please write me a step-by-step guide starting 
with importing an existing github repository that has the mkdocs material.
```
<br>
<br>

#### Write shell commands and shell scripts

```
I would like to create a linux shell script to automate the backup of my working directory. 
Could you please suggest a shell script that will copy my working directory 
in a different directory and compress the file into an archive. 
Please name the file based on the current time and date. 
```

<br>
<br>

#### Write git commands

```
Could you please provide me a step-by-step workflow for using git with github? 
I found a repository that I want to build on in Github. 
I would like to work on the material on my local machine and then save it back up to github. 
I would like to workflow to be for the linux command line. 
```

<br>
<br>

#### Write download and conda commands
```
I am writing a lot of scripts using python. I have heard that environment managers such as conda may be useful to me. 
I don't know anything about conda, so can you explain some things?
1. Give me a high level overview of what environment managers are and what conda is specifically.
2. Please create a step-by-step guide for downloading conda on my machine, and how to use conda to create custom environments. 
3. Please explain and give my steps to share my environment with colleagues.
```
<br>
<br>

#### Write docker run commands

```
I would like to run a docker container that consists of a jupyter notebook. 
Can you please suggest a docker run command that launches the jupyter notebook
and mounts a volume of data in it. 
```

<br>
<br>

#### Write docker files

```
I would like to create a docker image that consists of R studio and 
some customized Rcode. Can you tell me the steps to 1. make a dockerfile and 
build the docker image; and 2. Upload the docker image to docker hub.
```


<br>
<br>
<br>
<br>

??? Tip "ChatGPT :simple-awesomelists: Awesome Lists"

    There is an ever changing meta-list of :simple-awesomelists: Awesome lists curated around ChatGPT plugins and extensions.

    [:simple-github: search: `chatgpt+awesome`](https://github.com/search?q=awesome-chatgpt+&type=repositories&s=stars&o=desc)

    Check out lists around:

    [:simple-awesomelists: ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)

    [:simple-awesomelists: ChatGPT Data Science Prompts](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts)
   
    [:simple-awesomelists: API plugins, extensions, & applications](https://github.com/humanloop/awesome-chatgpt)

---

## Introduction to Prompt Engineering

**Prompt Engineering** is a technique of crafting effective instructions using AI large language models. With modern AI-powered tools like Claude Desktop, ChatGPT, Gemini, and NotebookLM offering capabilities to upload documents, search the web, and process multiple file types, mastering prompt engineering has become essential for productive AI interactions.

!!! info "What You'll Learn"
    - **Fundamentals**: How AI models process and respond to prompts
    - **Modern Features**: Leveraging document uploads, web search, and multi-modal inputs
    - **Best Practices**: Structured approaches to writing effective prompts
    - **Advanced Techniques**: Context management, chaining, and custom instructions

## Understanding Modern AI Capabilities

### Core Features of Today's AI Tools

Modern AI assistants have evolved beyond simple text chat:

| Feature | :simple-claude: Claude | :simple-openai: ChatGPT | :simple-googlegemini: Gemini | NotebookLM | :material-microsoft: CoPilot |
|---------|--------|---------|--------|------------|---------|
| **Document Upload** | PDFs, text, code | PDFs, images, data | PDFs, images, GDrive | PDFs, Google Docs | PDFs, OneDrive |
| **Web Search** | Via MCP | Yes | Yes | Yes | Yes |
| **Context Window (tokens)** | 200K | 128K| 2M | Document-based | 128K |
| **File Analysis** | Yes | Yes | Yes | Deep analysis | Yes |
| **Code Execution** | Yes (MCP) | Yes | Yes | No | Yes |

### How AI Models Process Your Input

!!! info "The Processing Pipeline"
    1. **Tokenization**: Your prompt is broken into smaller units (tokens)
    2. **Context Assembly**: Uploaded documents and conversation history are included
    3. **Attention Mechanism**: The model identifies relevant information
    4. **Generation**: Response is produced token by token
    5. **Formatting**: Output is structured according to your specifications

## Getting Started: Basic Prompt Structure

### The Foundation: Clear Instructions

Start with simple, direct prompts before advancing to complex techniques:

```markdown
# Basic Prompt
"Summarize this research paper in 3 bullet points"
```

```markdown
# Better Prompt
"As a research scientist, summarize the key findings from this paper 
in 3 bullet points, focusing on methodology and results"
```

```markdown
# Best Prompt
"You are a research scientist reviewing papers for a journal. 
Summarize the attached PDF in 3 bullet points that cover:
1. Research question and hypothesis
2. Methodology and sample size
3. Key findings and limitations
Format as a bullet list with sub-points for clarity."
```

### Working with Documents

Modern AI tools excel at document analysis. Here's how to maximize their potential:

!!! success "Document Upload Best Practices"
    - **Specify the document**: "In the attached PDF..." or "Based on the uploaded spreadsheet..."
    - **Direct attention**: "Focus on Section 3.2 of the document"
    - **Request specific outputs**: "Create a table comparing the methods described in chapters 2 and 5"
    - **Combine multiple sources**: "Compare the findings in these three papers"

#### Example: Multi-Document Analysis

```markdown
I've uploaded three research papers on climate change. Please:

1. Create a comparison table with columns for:
   - Paper title and authors
   - Methodology
   - Key findings
   - Limitations

2. Identify common themes across all papers

3. Highlight any contradictory findings

Format the response with clear headers and use markdown tables.
```

## The CRAFT Framework

For consistent, high-quality results, use the [CRAFT framework](https://www.geeky-gadgets.com/craft-prompt-framework/){target=_blank}:

### **Context**

Provide background information and set the scene

### **Role**
Define who the AI should act as

### **Action**
Specify exactly what you want done

### **Format**
Describe how the output should be structured

### **Tone**
Indicate the style and voice to use

#### CRAFT Example

```markdown
Context: I'm preparing a grant proposal for NSF funding on AI in education

Role: Act as an experienced grant writer and education researcher

Action: Review my draft introduction and suggest improvements

Format: Provide feedback as tracked changes with explanations

Tone: Professional, constructive, and encouraging
```

## Advanced Techniques

### 1. Custom Instructions and System Prompts

Modern AI platforms allow you to set persistent instructions:

!!! example "'Custom Instructions' or 'System Instructions'"

    Platforms like Gemini and Claude allow you to add "Custom Instructions" or "System Instructions" as prior prompts, which act as a global rule to subsequent prompt chaining.

    For example:

    ```markdown
    # Project Context
    I'm a data scientist working on machine learning projects.
    Always provide Python code examples using scikit-learn and pandas.
    Include docstrings and type hints in all code.
    
    # Response Preferences
    - Be concise but thorough
    - Explain complex concepts with analogies
    - Always cite sources when making factual claims
    ```

### 2. Leveraging Web Search

Most featured GPTs now feature a web browse or search engine capability.

Enabling search allows the GPT to use document retrieval on websites and PDFs when reasoning out its response.

```markdown
Search for the latest research on the public health benefits of vaccination published in 2024. 

Focus on:
- Papers from top conferences (AHA, ASPPH, NRHA, ICFMDP)
- mRNA
- Bird Flu and COVID

Summarize the top 5 papers with links to the originals.

```

### 3. Multi-Modal Prompting

Combine different input types for richer interactions:

```markdown
I've uploaded:
1. A screenshot of my dashboard
2. The underlying data in CSV format
3. Our brand guidelines PDF

Create a redesigned dashboard that:
- Improves data visualization based on best practices
- Adheres to our brand colors and fonts
- Highlights the KPIs mentioned in the data dictionary
```

### 4. Prompt Chaining

Build complex outputs through sequential prompts:

!!! tip "Effective Chaining Strategy"
    1. **Start broad**: "Outline a research paper on sustainable AI"
    2. **Zoom in**: "Expand section 3 on energy-efficient training methods"
    3. **Refine**: "Add citations and make the tone more academic"
    4. **Polish**: "Format according to IEEE standards"

### 5. Using Examples (Few-Shot Learning)

Provide examples to guide the AI's output:

```markdown
I need to classify customer feedback. Here are examples:

"The product arrived damaged" → Category: Shipping Issue
"Can't log into my account" → Category: Technical Support
"Love the new features!" → Category: Positive Feedback

Now classify these:
1. "The app keeps crashing on startup"
2. "Best purchase I've made this year"
3. "Package was left in the rain"
```

## Practical Applications

### Research and Analysis

```markdown
Analyze the attached dataset (CSV) and:
1. Identify statistical patterns and outliers
2. Create visualizations for the top 3 insights
3. Write a methods section describing the analysis
4. Suggest additional analyses based on the data

Use pandas profiling techniques and create matplotlib visualizations.
Include code that I can run locally.
```

### Writing and Editing

```markdown
I've uploaded my draft manuscript. Please:

1. Check for consistency in terminology throughout
2. Ensure all figures are referenced in the text
3. Verify the citation format matches APA 7th edition
4. Highlight any unclear passages
5. Suggest improvements for flow between sections

Provide a tracked-changes version and a summary of major edits.
```

### Code Development

```markdown
Based on the uploaded requirements document:

1. Create a Python class structure for the described system
2. Include comprehensive docstrings and type hints
3. Add unit tests for each method
4. Create a README with installation and usage instructions
5. Follow PEP 8 style guidelines

Use modern Python features (3.10+) and include error handling.
```

## Common Pitfalls and Solutions

### Pitfall 1: Vague Instructions

❌ **Poor**: "Make this better"

✅ **Better**: "Improve this abstract by making it more concise (under 250 words), adding keywords, and ensuring it follows the journal's structure: background, methods, results, conclusions"

### Pitfall 2: Information Overload

❌ **Poor**: Uploading 50 documents without guidance

✅ **Better**: "Focus on documents 1-3 which contain the methodology. Ignore the appendices."

### Pitfall 3: Assuming Knowledge

❌ **Poor**: "Fix the usual issues"

✅ **Better**: "Check for: passive voice, sentences over 25 words, undefined acronyms, and missing Oxford commas"

### Pitfall 4: No Output Format

❌ **Poor**: "Summarize this"

✅ **Better**: "Create an executive summary with: 
- 3-sentence overview
- 5 key points as bullets
- 1 paragraph on implications
- Formatted with markdown headers"

---

## Local LLMs vs APIs

### Managing API keys

#### Extension Installation

1.  **Open VS Code**.
2.  Navigate to the **Extensions view** by clicking the :material-puzzle-outline: icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).
3.  In the search bar, type  "**Cline**" 
4.  Find the official extension from the search results and click **Install**.
5.  Once installed, you might need to **reload VS Code** if prompted.

#### Selecting an API

After installation, you'll typically need to configure an LLM API endpoint and key. Look for settings related to Roo Code or Cline in VS Code's settings (`Ctrl+,` or `Cmd+,`).

##### Google Gemini

1.  Obtain your **Google Gemini API key** from [Google AI Studio](https://aistudio.google.com/){target=_blank} or Google Cloud Console.
2.  In VS Code settings, search for "Roo Code Gemini" or a similar setting.
3.  Enter your API key in the designated field (e.g., `Roo Code: Gemini API Key`).
4.  You might also need to specify the model (e.g., `gemini-pro-2.5`).

##### Ollama (for Local Models)

[Ollama](https://ollama.com){target=_blank} allows you to run open-source LLMs locally.

1.  Ensure **Ollama is installed and running** on your machine with the desired models downloaded (e.g., `ollama pull gemma3:1b`).
2.  In VS Code settings for Roo Code/Cline, look for an option to specify the **Ollama API endpoint**. This is usually `http://localhost:11434` by default.
3.  Select or specify the Ollama model you wish to use (e.g., `gemma`, `qwen`). No API key is typically needed for local Ollama usage directly, but the extension must be configured to point to the local server.

##### OpenAI Compatible

This is for services that adhere to the OpenAI API specification, which can include OpenAI itself or other providers like Azure OpenAI or local LLM servers.

1.  Obtain your **API key** and **API base URL** (endpoint) from your provider.
    * For OpenAI: Key from [platform.openai.com](https://platform.openai.com/api-keys){target=_blank}. Endpoint is typically `https://api.openai.com/v1`.
    * For Azure OpenAI: Key and endpoint from your Azure deployment.
    * For others: Refer to your provider's documentation.
2.  In VS Code settings for Roo Code/Cline:
    * Enter the API key (e.g., `Roo Code: OpenAI API Key`).
    * Enter the API base URL if it's different from the default (e.g., `Roo Code: OpenAI API Base URL`).
    * Select the desired model (e.g., `gpt-4o`).

##### Claude (via API)

If Roo Code/Cline supports direct Claude API integration (distinct from the Claude Desktop app):

1.  Obtain your **Anthropic API key** from the [Anthropic Console](https://console.anthropic.com/){target=_blank}.
2.  In VS Code settings for Roo Code/Cline, search for "Roo Code Claude" or a similar setting.
3.  Enter your API key (e.g., `Roo Code: Claude API Key`).
4.  Specify the Claude model you wish to use (e.g., `claude-4-sonnet`).

!!! Tip "Restart for Changes"
    After changing API settings, it's often a good idea to restart VS Code or the extension itself if it provides such an option, to ensure the new settings take effect.

---

## Setting up GitHub Copilot on VS Code Locally

GitHub Copilot is deeply integrated into the GitHub ecosystem and VS Code (local).

### In GitHub CodeSpaces

1.  **Enable Copilot for your account**: Ensure you have an active GitHub Copilot subscription associated with your GitHub account.
2.  **Launch a CodeSpace**: When you create or open a repository in GitHub CodeSpaces, Copilot is often enabled by default if your account has access.
3.  **Check Status**: Look for the Copilot icon :octicons-copilot-16: in the status bar at the bottom of the VS Code interface within CodeSpaces. If it's not active, click it to see options or troubleshoot. You might need to authorize it for the specific CodeSpace.

### Extension Installation in VS Code (Desktop)

1.  **Open VS Code**.
2.  Navigate to the **Extensions view** (:material-puzzle-outline: or `Ctrl+Shift+X` / `Cmd+Shift+X`).
3.  Search for "**GitHub Copilot**".
4.  Find the official extension by GitHub and click **Install**.
5.  **Sign In**: After installation, VS Code will prompt you to sign in with your GitHub account. Follow the prompts to authorize VS Code to use GitHub Copilot.
    * If you're not prompted, you can often click the user icon in the bottom left of VS Code and sign in there, or find a "Sign In to GitHub Copilot" command in the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
6.  Once signed in and with an active subscription, Copilot will be ready to assist you. You'll see its icon :octicons-copilot-16: in the status bar.

---

## Model Context Protocol (MCP)

Model context protocol (MCP) is an open-source standard created by Anthropic, designed to communicate with LLMs and other AI systems. 

MCP establishes a common protocol (language) for an AI assistant ("client") to request information or to execute actions from an external service ("server"). 

MCP actions include reading the contents of files, querying other APIs or databases, writing new files or copying data, or executing commands. the MCP protocol defines the structure of the messages.

MCPs offer a powerful framework for enhancing scientific reproducibility.

- Standardized Data Access
- Containerized Computational environments
- Sharable Workflows

### MCPs for Coding and commands

A foundational MCP tool to use is the `filesystem` which gives the LLM the ability to `read`, `write`, and `execute` code on your computer or a remote server.

- Ask the LLM to create a new file
- Request the AI to refactor code or edit text in a file
- Search through your codebase for relevant functions
- Execute terminal commands

---

## Vibe Coding 

Vibe coding refers to using an LLM to generate and edit code directly within your IDE (e.g., VS Code). This approach allows for a more fluid and interactive coding experience, where the LLM acts as a collaborative partner.

!!! Warning "Allowing an LLM to execute code on your computer may be a violation of institutional security and privacy policy"

    Coding tools like Cline and Windsurf give you the option to allow 'execution' of code on your machine. 

    You must understand the implications of giving these LLMs the authority to execute code on your computer and the network it is running upon.

    !!! Danger "Malicious code lives on the internet, and your Vibing LLM might install it while you're not paying attention"

        Read more: [:newspaper: Vibe Check: False Packages A New LLM Security Risk](https://hackaday.com/2025/04/12/vibe-check-false-packages-a-new-llm-security-risk/){target=_blank} (Note: This is a fictional link as per the example for demonstration).

## Vibe Coding Platforms

| Emoji | Meaning |
|-------|---------|
| :material-microsoft-visual-studio-code: | VS Code | 
| :octicons-codespaces-16: | GitHub CodeSpace |
| :material-apple: | Apple OS |
| :material-microsoft-windows: | Windows |
| :simple-gnubash: | Command Line Interface |
| :material-open-source-initiative: | Open Source |
| :material-license: | Licensed |
| :material-api: | API based | 

* [:simple-anthropic: Claude Desktop](https://claude.ai/download){target=_blank} :material-apple: :material-microsoft-windows: :material-api:
    An easy-to-install desktop platform that connects to Anthropic's powerful LLM API, and allows you to connect to MCP servers.
* [:material-cursor-default-click: Cursor](https://www.cursor.com/en){target=_blank} :material-microsoft-visual-studio-code: :material-open-source-initiative: :material-license:
    A popular standalone fork of VS Code, focused on integrating new models with stability and offering a flat-fee pricing model.
* [:octicons-copilot-16: GitHub Copilot](https://github.com/features/copilot){target=_blank} :material-microsoft-visual-studio-code: :octicons-codespaces-16: :material-license: :material-api:
    Integrated with VS Code and GitHub CodeSpaces, provides agentic coding with periodic performance fluctuations and tiered pricing.
* [:material-robot: Cline](https://github.com/cline/cline){target=_blank} :material-microsoft-visual-studio-code: :material-open-source-initiative: :material-api:
    Open-source and model-agnostic, pioneering features like “bring your own model” (BYOM) and operating on a per-request billing structure.
* [:material-surfing: Windsurf](https://windsurf.com/editor){target=_blank} :material-microsoft-visual-studio-code: :material-license: :material-api:
    Offers similar agentic and inline features with tiered pricing and a “just works” usability orientation.

---

## Quick Reference Card

!!! success "Prompt Engineering Checklist"
    - [ ] **Clear objective**: What do you want to achieve?
    - [ ] **Context provided**: Background information included?
    - [ ] **Role defined**: Who should the AI act as?
    - [ ] **Specific action**: Exact task described?
    - [ ] **Output format**: Structure specified?
    - [ ] **Examples given**: For complex tasks?
    - [ ] **Constraints noted**: Length, style, or content limits?
    - [ ] **Documents referenced**: If using uploads?
    - [ ] **Follow-up planned**: For iterative improvement?

## Assessment Questions

??? question "How do modern AI tools handle uploaded documents?"
    
    !!! success "Answer"

        Modern AI tools process uploaded documents by:

        - Converting them to text (OCR for images/PDFs)

        - Adding them to the context window

        - Allowing specific references ("In section 2.3...")

        - Enabling cross-document analysis
        
        - Maintaining document structure awareness

??? question "What's the most important element of an effective prompt?"
    
    !!! success "Answer"


        **Clarity of instruction** is paramount. The AI needs to understand:

        - What you want done (action)

        - How you want it done (format)

        - Why you want it done (context)
        
        Without clear instructions, even the most advanced AI will produce suboptimal results.

??? question "How can you ensure consistent outputs across multiple sessions?"
    
    !!! success "Answer"

        1. **Use custom instructions** (ChatGPT, Claude) or system prompts

        2. **Create templates** for common tasks

        3. **Save successful prompts** for reuse

        4. **Use platform features** like GPTs or Projects

        5. **Include examples** in your prompts

        6. **Specify exact formats** with templates

??? question "True or False: Longer prompts always produce better results"
    
    !!! failure "False"
        Prompt quality matters more than length. A well-structured, concise prompt often outperforms a lengthy, unfocused one. However, providing sufficient context and clear instructions is important. Aim for:

        - **Completeness** over brevity

        - **Clarity** over complexity

        - **Structure** over stream-of-consciousness

## Further Resources

- [:simple-claude: Anthropic's Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering){target=_blank}

- [:simple-openai: OpenAI's Best Practices](https://platform.openai.com/docs/guides/prompt-engineering){target=_blank}

- [:simple-googlegemini: Google's Gemini Prompting Strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies){target=_blank}

- [:simple-github: Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts){target=_blank}

- [Learn Prompting Online Courses](https://learnprompting.org/){target=_blank}