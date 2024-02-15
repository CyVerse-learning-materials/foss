# :material-file-document-multiple: Documentation & :material-antenna: Communication

!!! Success "Learning Objectives"
        
    After this lesson, you should be able to:

    *  Identify and explain different types of project documentation (both internal and external)
    *  Describe tools and approaches to creating your own documentation
    *  Describe best practices for maintaining documentation
    *  Create your own GitHub Pages website (!)


## :material-file-document-multiple: Project Documentation

Documentation is the practice of recording, preserving, and organizing information, data, or details in a structured and systematic manner. Documentation is also essential to communicate with your future self, your collaborators, or the world on specific ideas and information. Effective documentation must take into consideration the following points:

- **:material-glasses: Clarity**: Documentation should be easy to understand with clear language and no ambiguity.
- **:octicons-circle-16: Completeness**: It must cover all essential details, leaving nothing crucial undocumented.
- **:fontawesome-solid-bullseye: Accuracy**: Information should be up-to-date and correct to prevent errors and misunderstandings.
- **:simple-instructure: Organization**: A logical structure and clear organization make it easy to navigate and find information.
- **:fontawesome-solid-exclamation: Relevance**: Documentation should focus on what's pertinent to its intended audience or purpose, avoiding unnecessary information.


Not all documentation is the same. **The documentation system**, by Divio, categorizes the different types of documentation into 4 quadrants:

<figure markdown>
  <a href="https://documentation.divio.com/" target="blank" rel="xkcd">![xkcd](https://documentation.divio.com/_images/overview.png) </a>
    <figcaption> Read more in depth on the documentation system here: https://documentation.divio.com </figcaption>
</figure>

??? Question "Explanining the quadrants"

    - **Tutorials**: Lessons! Tutorials are lessons that take the reader by the hand to understand how the basics of a tool work. They are what your project needs in order to show a beginner that they can achieve something with it. The techical teaching we do in FOSS are mostly tutorials. For example, we do simple tutorials to teach the mechanics of version control. 
    - **How-to-guides**: Recipes! How-to-guides take the reader through the steps required to acheive a specific outcome or answer a specific question. An example how-to-guide could be a guide on how to install a specific software on a specific operating system.
    - **References**: References offer technical descriptions of the machinery and how to operate it. References have one job only: to describe. They are code-determined, because ultimately that’s what they describe: key classes, functions, APIs, and so they should list things like functions, fields, attributes and methods, and set out how to use them.
    - **Explanation**: Discussions! The aims of explanations are to clarify and illuminate a particular topic by broadening the documentation’s coverage of a topic.



### Public Repositories for Documentation




*:simple-github: GitHub*

-   On Github, good documentation starts with a robust ReadMe file. The ReadMe file is the first thing that people see when they visit your repository. It is a good place to explain what your project does, how to use it, and how to contribute to it. Here is an [example](https://github.com/jeffgillan/geospatial_pipeline).
-   Also on Github, you can use the Wiki feature to create a separate space for documentation. The Wiki is a place to document your project in a way that is separate from the code. Here is an [example](https://github.com/ua-datalab/Geospatial_Workshops/wiki)

*:simple-github: GitHub Pages*

-   You can pull templates from other GitHub users for your website,
    e.g. [:simple-jekyll: Jekyll themes](http://themes.jekyllrc.org/){target=_blank}
-   GitHub pages are free, fast, and easy to build, but limited in use
    of subdomain or URLs.
-   The FOSS website is rendered using [:simple-github: GitHub Pages](https://pages.github.com/){target=_blank} using [:simple-markdown: MkDocs](https://www.mkdocs.org/){target=_blank} and the [Material](https://squidfunk.github.io/mkdocs-material/){target=_blank} theme for MkDocs.
-   Other popular website generator for GitHub Pages is [:simple-bootstrap: Bootstrap.js](https://getbootstrap.com/){target=_blank}.

*:simple-markdown: Material MkDocs*

-    [Material Design](https://squidfunk.github.io/mkdocs-material/){target=_blank} theme for MkDocs, a static site generator geared towards (technical) project documentation.
-   publish via GitHub Actions
- Uses open source Material or ReadTheDocs Themes

*:simple-readthedocs: ReadTheDocs*

-   publishing websites via
    [ReadTheDocs.com](https://readthedocs.com/dashboard/){target=_blank} costs money.
-   You can work in an offline state, where you develop the materials
    and publish them to your localhost using
    [Sphinx](https://docs.readthedocs.io/en/stable/intro/getting-started-with-sphinx.html){target=_blank}
-   You can work on a website template in a GitHub repository, and
    pushes are updated in near real time using ReadTheDocs.com.
-   Here is example documentation of Pytorch using ReadTheDocs: [PyTorch](https://pytorch.org/docs/stable/index.html){target=_blank}.


*:material-book-arrow-down: Bookdown*

-   [:material-book-arrow-down: Bookdown](https://bookdown.org/){target=_blank} is an open-source R package that facilitates writing books and long-form articles/reports with R Markdown.
-   Bookdown websites can be hosted by [RStudio
    Connect](https://www.rstudio.com/products/connect/){target=_blank}
-   You can publish a Bookdown website using [Github
    Pages](https://github.blog/2016-08-17-simpler-github-pages-publishing/){target=_blank}


*:simple-r: Quarto*

-   [:simple-r: Quarto](https://quarto.org/){target=_blank} is an open-source scientific and technical publishing system built on Pandoc
-   [Build a website](https://quarto.org/docs/websites/) using Quarto's template builder
-   [Build with Github Pages](https://quarto.org/docs/publishing/github-pages.html)

*:simple-jupyter: JupyterBook*

-   [Based on Project Jupyter](https://jupyterbook.org/en/stable/start/overview.html){target=_blank} `ipynb` and MarkDown
-   Uses `conda` package management

*:simple-git: GitBook*

- [GitBook](https://docs.gitbook.com/){target=_blank} websites use MarkDown syntax
- Free for open source projects, paid plans are available

*:simple-confluence: Confluence Wikis*

-   [:simple-confluence: Confluence Wikis](https://www.atlassian.com/software/confluence/use-cases/wiki){target=_blank} are another tool for documenting your work. You can see an example from [Cyverse](https://wiki.cyverse.org){target=_blank}.

!!! Quote "Things to remember about Documentation"

    - Documentation should be written in such a way that people who did not write the documentation can read and then use or read and then teach others in the applications of the material.

    - Documentation is best treated as a living document, but version control is necessary to maintain it

    - Technology changes over time, expect to refresh documentation every 3-5 years as your projects age and progress.
    
### Websites to Host Methods & Protocols

[Open Science Framework](https://osf.io/){target=_blank} for free. OSF can be directly linked to your ORCID.

-   Integrated project management tools
-   Uses templates to create a project website
-   Can publish preprints from within project management tools

[Protocols.io](https://www.protocols.io/){target=_blank} - collaborative platform and preprint server for: science methods, computational workflows, clinical trials, operational procedures, safety checklists, and instructions / manuals.

[QUBES](https://qubeshub.org/){target=_blank} - community of math and biology educators who share resources and methods for preparing students to tackle real, complex, biological problems.

??? Question "What are the benefits of using a GitHub.io website?"

    [Github Pages](https://pages.github.com/) are hosted directly from your GitHub repository. 
    
    Just edit, push, and your changes are live.

    You do not need to run your own web server!!

---

## :material-antenna: Communication

### Internal Project 

Choosing which software to use for your internal lab communication can be complicated by the cost of setting up, the cost of maintaining, and simply by the sheer number of platforms that are out there.

For this workshop, we use [:simple-slack: SLACK](https://slack.com/){target=_blank} (Searchable Log of All Conversation & Knowledge). Microsoft's competitor to SLACK is [:material-microsoft-teams: Microsoft Teams](https://teams.microsoft.com/start){target=_blank}.

Remember, the intention of these platforms are to **improve productivity** & not become a distraction.

**:simple-slack: SLACK**

-   Slack has [plenty of apps](https://slack.com/apps){target=_blank} for coordinating
    multiple services, i.e. Calendars, Github, GoogleDrive, Box, etc.
-   Free Slack is limiting (e.g., 90 day history; limited connections across workspaces).
-   Paid Slack is $7.25 per user per month. (10 users for 1 year = $870)

**:material-microsoft-teams: Microsoft Teams**

-   Teams is used by many R1 research universities as part of their
    campus wide license agreement for Office 365 Business and Education
-   For example, anyone with a `arizona.edu` email address can use Teams for free
-   Limitations:
    -   Not sure you can create your own Teams
    -   Limited to messaging with people in your university Team

*Other popular alternatives*

-   [:fontawesome-brands-bandcamp: BaseCamp](https://basecamp.com/){target=_blank}
-   [:simple-discord: Discord](https://discordapp.com/){target=_blank}
-   [:simple-mastodon: Mastodon](https://joinmastodon.org/){target=_blank}
-   [:simple-mattermost: Mattermost](https://mattermost.com/){target=_blank}

!!! Info "Useful links for creating a SLACK workspace"
    1.  [Create a new Workspace](https://get.slack.help/hc/en-us/articles/206845317-Create-a-Slack-workspace){target=_blank}
    2.  [Create channels, add apps & tools](https://get.slack.help/hc/en-us/articles/217626298-tips-for-team-creators-and-admins){target=_blank}

---

### External (Public)

Communicating with the public and other members of your science community (in addition to traditional peer-review publications and conferences) is one of the most important parts of your science!

There are many ways scientists use social media and the web to share their data science ideas:

1.  [:simple-twitter: "Science Twitter" (now X)](https://www.sciencemag.org/news/2018/08/scientists-do-you-want-succeed-twitter-here-s-how-many-followers-you-need){target=_blank} -
    is really just regular [Twitter](https://twitter.com/hashtag/science?lang=en){target=_blank}, but with a focus on following other scientists and organizations, and tweeting about research you're interested in. By building up a significant following, more people will know you, know about your work, and you'll have a higher likelihood of meeting other new collaborators.
2.  Blogging Platforms such as [Medium](https://medium.com/){target=_blank} are a great place to self publish your writing on just about any topic. It's free to sign up and start blogging, but does have a fee for accessing premium content. Some of my favorite blogs include [Toward Data Science](https://towardsdatascience.com/){target=_blank} and [Chris Holmes](https://medium.com/@cholmes){target=_blank}.
3.  Community groups - There are lists (and lists of lists) of [nationals research organizations](https://www.google.com/search?q=list+of+professional+science+organizations){target=_blank}, in which a researcher can become involved. These older organziations
    still rely on official websites, science journal blogs, and email lists to communicate with their members. In the earth sciences there are open groups which focus on communication like the [Earth Science Information Partners (ESIP)](https://www.esipfed.org/){target=_blank} with progressive ideas about how data and science can be done. Other groups, like [The Carpentries](https://carpentries.org/){target=_blank} and [Research Bazaar](https://resbazblog.wordpress.com/about/){target=_blank} are focused on data science training and digital literacy.
4.  Podcasts - Creating and distributing audio content to masses is easier than ever before. There are many podcast hosting platforms including [Spotify](https://podcasters.spotify.com/){target=_blank}, [Podbean](https://www.podbean.com/){target=_blank}, [Acast](https://www.acast.com/){target=_blank}, and [Libsyn](https://libsyn.com/){target=_blank}. From there is it simple to make your podcast availble in the [Google Podcast](https://rss.com/blog/how-to-submit-podcast-to-google-podcasts/){target=_blank} app or [Apple Podcast](https://transistor.fm/upload-podcast-itunes-apple/){target=_blank} app. 
5.  Webinars - With platforms such as [Zoom](https://zoom.us/){target=_blank}, [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software){target=_blank}, and [Google Meet](https://meet.google.com/){target=_blank}, it is so easy nowadays to host a webinar touting and explaining your science. 
6.  Youtube - The king of video sharing platforms is a great place to post content promoting your science (and yourself!). For example, [Cyverse](https://www.youtube.com/@CyverseOrgProject){target=_blank} posts lots of content on cyberinfrastructure and data processing pipelines. Some of my favorite podcasts hosted on Youtube include [StarTalk](https://www.youtube.com/@StarTalk){target=_blank} and [Lex Fridman](https://www.youtube.com/@lexfridman){target=_blank}.

!!! Warning "Important"
    **Remember: Personal and Professional Accounts are Not Isolated**

    You decide what you post on the internet. Your scientist identity may be
    a part of your personal identity on social media, it might be separate.
    A future employer or current employer can see your old posts. What you
    post in your personal accounts can be considered a reflection of the
    organization you work for and may be used in decisions about hiring or
    dismissal.

---

## Hands-on: Building a GitHub Pages Website using MkDocs

This section is built in order to educate on and simplify the steps necessary that newcomers need to take in order to build a successful GitHub Pages hosted website. 

 This tutorial is inspired by [academicpages](https://academicpages.github.io/), a Jekyll themed template created in order to help scientists and academics build their own websites.

The easy way would be to fork/import the [foss-reference-hub website](https://cyverse-learning-materials.github.io/foss-reference-hub/) ([repository](https://github.com/CyVerse-learning-materials/foss-reference-hub)) and modify it to reflect your requirements; this tutorial will cover the necessary files and repository structure you require in order to build a successful personal website.

!!! info "Repository Explanation"

    A GitHub hosted website running the [MkDocs-material](https://squidfunk.github.io/mkdocs-material/getting-started/) theme requires the following files in order to function:

    - A `docs` folder:
        - A folder that contains all the documents necessary to populate the website's pages.
        - **All of the documents that the user needs to change are in here**.
    - A `mkdocs.yml` file:
        - A `yml` file which contains critical information on the website structure, including themes, fonts, and extensions.
    - A `requirements.txt` file:
        - A file with a list of software necessary to build the website, primilily used by GitHub Actions.
    - A `.github/workflow` folder:
        - Contains the `ghpages.yml` file that controls the GitHub Action.

    The structure of the basic repository is the following:

    ```
    .
    ├── README.md
    ├── mkdocs.yml              <- Governing file for website building
    ├── requirements.txt        <- Requirements file for pip installation (required by website)      
    ├── docs                           
    │   ├── assets              <- Folder for images and additional graphic assets
    │   └── index.md            <- Main website home page
    └── .github
        └── workflows
            └── ghpages.yml     <- GitHub Actions controlling file
    ```
    
    Upon pushing changes, a `gh-pages` branch will be automatically created by the GitHub Action; it is where the website is rendered from.


### Directions A: forking or importing an existing repo

!!! warning "Prerequisites"
    You will require the following in case you want to add code locally.
    
    ??? Info "Create a GitHub account"
        Navigate to the [GitHub website](https://github.com/) and click *Sign Up*, and follow the on screen instructions.

    Additionally, you can choose between Generating a Personal Access Token or using SSH keys. This is useful if you want to work locally and push your changes to GitHub. We are going to cover this further in next week's lesson on [Version Control](05_version_control.md).

    ??? Info "Choice A: Generate a Personal Access Token"
        You can follow the official documentation on how to generate Tokens [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). We  discussed how to generate tokens in [Week 0](https://foss.cyverse.org/00_basics/#adding-code-locally). Here's are quick steps you can follow in order to setup your account on your machine using tokens:
        
        1. On your coumputer:
            1. Clone your repository (`git clone <repository>`)
            2. Make changes where necessary, and **add** (`git add <changed files>`), **commit** (`git commit -m "<message on changes>"`) and **push** your changes (`git push origin`).
            3. You should be prompted to logging in your GitHub account. Put your email **but not your password**. Instead, open your web browser and follow the steps below:
        2. On GitHub:
            1. Navigate to your GitHub Settings (You can access your account Settings from the drop down menu where your account icon is, on the top right of the screen)
            2. Scroll to the bottom of the left hand side menu to find *Developer settings* and open it.
            3. Click *Personal access tokens* > *Tokens (classic)*
            4. Click *Generate new token* > *Generate new token (classic)*. You might need to input your Authentification code if you have enabled 2FA.
            5. Give it a name, and all the scopes you require (tip: select all scopes and *No Expiration*), then click *Generate Token*. **Copy the new generated Token**
        3. Back on your computer:
            1. If you have been following the steps above, you should still be in your shell with GitHub still asking for your password.
            2. **Paste** your Token here, and you should be logging in. Your changes should then be saved to GitHub.
        
    ??? Info "Choice B: Connecting via SSH"
        The process of connecting your computer to GitHub using an SSH key is more expedited (and probably less confusing). 
        
        As a setup step, see if your computer is already connected to GitHub by doing `ssh -T git@github.com`. If the response message is `git@github.com: Permission denied (publickey).` it signifies that your computer is not yet linked with GitHub. To link your computer to github to the following:

        1. Generate an SSH key with a level of encryption that you prefer: `ssh-keygen -t ed25519 -C <your github email>`. This command generates an SSH key with [ed25519](https://ed25519.cr.yp.to/) encryption (harder to crack!) and adds your email as "comment" (`-C`, will help recongizing the user adding the key). A number of additional questions are going to ask you where you'd like to save the key and whether you'd like to add a password for protection; unless you want to save it elsewhere, feel free to use the default options. Upon completion you should see something like this:
        ```
        Your identification has been saved in /c/Users/<user>/.ssh/id_ed25519
        Your public key has been saved in /c/Users/<user>/.ssh/id_ed25519.pub
        The key fingerprint is:
        SHA256:SMSPIStNyA00KPxuYu94KpZgRAYjgt9g4BA4kFy3g1o <your github email>
        The key's randomart image is:
        +--[ED25519 256]--+
        |^B== o.          |
        |%*=.*.+          |
        |+=.E =.+         |
        | .=.+.o..        |
        |....  . S        |
        |.+ o             |
        |+ =              |
        |.o.o             |
        |oo+.             |
        +----[SHA256]-----+
        ``` 
        2. Upon generating the ssh key, copy it. You can reveal it by doing `cat ~/.ssh/id_ed25519.pub`.
        3. In GitHub, go to your settings: click your account icon on top right, and from the drop down menu, select *Settings* and then *SSH and GPG keys*. Here, click on *New SSH Key*, where you can then paste the newly geneated key. Add a name reflecting your machine and save changes. 
        
        Optional: if you want to check if you successfully linked your computer to GitHub, do `ssh -t git@github.com`. You should receive the following message: `Hi <GitHub username>! You've successfully authenticated, but GitHub does not provide shell access.
        
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) or [import](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer) the [FOSS Reference Hub website tutorial repository branch](https://github.com/CyVerse-learning-materials/foss-reference-hub/tree/week-4-pre)
    - Forking or importing will allow you to have your own copy of a specific repository; Cloning a repository **without** forking/importing it first, will lead to the changes being applied to the original repository and not your own copy. You should clone your forked or imported repository, not the original!
2. Navigate to *Settings* > *Actions* > *General*:
    - Under *Action Permissions* select *Allow all actions and reusalbe workflows*
    - Under *Workflow permissions* select *Read and write permissions* and *Allow GitHub Actions to create and approve pull requests*
3. Edit the `mkdocs.yml` and push your changes
    - The first changes you should be making are in the first few lines in the `mkdocs.yml` file in order to reflect your necessities:
        -   Line 1: `site_name:` change to any title you want for your website 
        -   Line 2: `site_description:` give a short description of the website
        -   Line 3: `site_author: ` who you are
        -   Line 4: `site_url:` change it to the URL reflected in *Settings*, which will most likely be `https://<github-username.github.io>/`
        -   Line 7: `repo_name: ` give the name of your repository (e.g., `academicpages-mkdocs` in this case)
        -   Line 8: `repo_url:` give the git repository URL 
        -   Line 11: `copyright:` change `your name` to the maintainer of the website (likely to be you)
    !!! warning "Workflow expectations"
        The previos changes *should* trigger the GitHub action workflow, which is setup to apply changes to the website every time a commit is pushed. One of the first thing that `mkdocs-material` will do, is to create the `gh-pages` branch (in case you do not have it already). **The workflow will fail because the `ghpages.yml` in the `.github/workflows` directory is disabled (["commented out"](https://en.wiktionary.org/wiki/comment_out))**. To enable it, remove the `#` at the beginnig on each line and commit your changes. Upon changes, the workflow should go ahead and create the `gh-pages` branch.
4. Navigate to *Settings* > *Pages* and make sure that *Source* is *Deploy from a branch* and Branch is *gh-pages*, */(root)*
    - You should be able to access your website at `https://<github-username>.github.io/`. If you cannot find your website, go to the repository's settings page and navigate to *Pages*: your website address will be there.
5. Edit documents as necessary.
    - Don't forget to **add**, **commit** and **push** changes!
    - Changes will only be visible on the website after a successful push.
    - After each push, next to the commit identifier GitHub will show either a yellow circle (:yellow_circle:, meaning building), green check (:material-check:, meaning success), or red cross (:x:, meaning failure).
    ??? Tip "Failure? Try again!"
        If you've been given the red cross :x:, GitHub will notify you with what went wrong. By clicking on the :x:, GitHub will open up a new page showing you the broken process.

### Directions B: Creating your own

!!! warning "Prerequisites"
    You will require the following in case you want to add code locally.
    
    ??? Info "Create a GitHub account"
        Navigate to the [GitHub website](https://github.com/) and click *Sign Up*, and follow the on screen instructions.

    Additionally, you can choose between Generating a Personal Access Token or using SSH keys. This is useful if you want to work locally and push your changes to GitHub. We are going to cover this further in next week's lesson on [Version Control](05_version_control.md).

    ??? Info "Choice A: Generate a Personal Access Token"
        You can follow the official documentation on how to generate Tokens [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). We  discussed how to generate tokens in [Week 0](https://foss.cyverse.org/00_basics/#adding-code-locally). Here's are quick steps you can follow in order to setup your account on your machine using tokens:
        
        1. On your coumputer:
            1. Clone your repository (`git clone <repository>`)
            2. Make changes where necessary, and **add** (`git add <changed files>`), **commit** (`git commit -m "<message on changes>"`) and **push** your changes (`git push origin`).
            3. You should be prompted to logging in your GitHub account. Put your email **but not your password**. Instead, open your web browser and follow the steps below:
        2. On GitHub:
            1. Navigate to your GitHub Settings (You can access your account Settings from the drop down menu where your account icon is, on the top right of the screen)
            2. Scroll to the bottom of the left hand side menu to find *Developer settings* and open it.
            3. Click *Personal access tokens* > *Tokens (classic)*
            4. Click *Generate new token* > *Generate new token (classic)*. You might need to input your Authentification code if you have enabled 2FA.
            5. Give it a name, and all the scopes you require (tip: select all scopes and *No Expiration*), then click *Generate Token*. **Copy the new generated Token**
        3. Back on your computer:
            1. If you have been following the steps above, you should still be in your shell with GitHub still asking for your password.
            2. **Paste** your Token here, and you should be logging in. Your changes should then be saved to GitHub.
        
    ??? Info "Choice B: Connecting via SSH"
        The process of connecting your computer to GitHub using an SSH key is more expedited (and probably less confusing). 
        
        As a setup step, see if your computer is already connected to GitHub by doing `ssh -T git@github.com`. If the response message is `git@github.com: Permission denied (publickey).` it signifies that your computer is not yet linked with GitHub. To link your computer to github to the following:

        1. Generate an SSH key with a level of encryption that you prefer: `ssh-keygen -t ed25519 -C <your github email>`. This command generates an SSH key with [ed25519](https://ed25519.cr.yp.to/) encryption (harder to crack!) and adds your email as "comment" (`-C`, will help recongizing the user adding the key). A number of additional questions are going to ask you where you'd like to save the key and whether you'd like to add a password for protection; unless you want to save it elsewhere, feel free to use the default options. Upon completion you should see something like this:
        ```
        Your identification has been saved in /c/Users/<user>/.ssh/id_ed25519
        Your public key has been saved in /c/Users/<user>/.ssh/id_ed25519.pub
        The key fingerprint is:
        SHA256:SMSPIStNyA00KPxuYu94KpZgRAYjgt9g4BA4kFy3g1o <your github email>
        The key's randomart image is:
        +--[ED25519 256]--+
        |^B== o.          |
        |%*=.*.+          |
        |+=.E =.+         |
        | .=.+.o..        |
        |....  . S        |
        |.+ o             |
        |+ =              |
        |.o.o             |
        |oo+.             |
        +----[SHA256]-----+
        ``` 
        2. Upon generating the ssh key, copy it. You can reveal it by doing `cat ~/.ssh/id_ed25519.pub`.
        3. In GitHub, go to your settings: click your account icon on top right, and from the drop down menu, select *Settings* and then *SSH and GPG keys*. Here, click on *New SSH Key*, where you can then paste the newly geneated key. Add a name reflecting your machine and save changes. 
        
        Optional: if you want to check if you successfully linked your computer to GitHub, do `ssh -t git@github.com`. You should receive the following message: `Hi <GitHub username>! You've successfully authenticated, but GitHub does not provide shell access.

1. Create your own repository
    - Add a README and a license and keep the repository public
2. Create a `docs` folder
    - Within the folder, create an `index.md` file
3. Navigate to *Settings* > *Actions* > *General*:
    - Under *Action Permissions* select *Allow all actions and reusalbe workflows*
    - Under *Workflow permissions* select *Read and write permissions* and *Allow GitHub Actions to create and approve pull requests*
4. Create an `requirements.txt` file and populate it with the following requirement list:

    ??? abstract "Expand for code!"    
        ```
        bump2version
        coverage
        flake8
        grip
        ipykernel
        livereload
        nbconvert>=7
        pip
        sphinx
        tox
        twine
        watchdog
        wheel
        mkdocs-git-revision-date-plugin 
        mkdocs-jupyter 
        mkdocs-material 
        mkdocs-pdf-export-plugin
        mkdocstrings 
        mkdocstrings-crystal
        mkdocstrings-python-legacy
        #pygments>=2.10,<2.12
        #pymdown-extensions<9.4

        # Requirements for core
        jinja2>=3.0.2
        markdown>=3.2
        mkdocs>=1.4.0
        mkdocs-material-extensions>=1.0.3
        pygments>=2.12
        pymdown-extensions>=9.4

        # Requirements for plugins
        requests>=2.26
        ```

5. Create an `mkdocs.yml` file and  populate it with the following:
    
    ??? abstract "Expand for code!"  
        ```
        site_name: Name of your website
        site_description: Tell people what this website is about
        site_author: Who you are
        site_url: The website URL

        # Repository
        repo_name: The repository name
        repo_url: The repository URL
        edit_uri: edit/main/docs/
        # Copyright
        copyright: 'Copyright &copy; 2023 - 2024'


        # Configuration
        theme:
            name: material
        highlightjs: true
        font:
            text: Roboto
            code: Regular
        palette:
            scheme: default

        # Features  
        features:
        - navigation.instant
        - navigation.tracking
        - navigation.tabs
        - navigation.tabs.sticky
        - navigation.indexes
        - navigation.top
        - toc.follow

        # 404 page
        static_templates:
            - 404.html

        # Search feature
        include_search_page: false
        search_index_only: true

        # Palette and theme (uses personalized colours)
        language: en
        palette:
            primary: custom
            accent: custom
        icon:
            logo: material/cogs
            favicon: material/cogs

        # Page tree
        nav:
        - Home: index.md

        # Extra Plugins
        plugins:
            - search
            - mkdocstrings
            - git-revision-date
            - mkdocs-jupyter:
                include_source: True
                ignore_h1_titles: True

        # Extensions (leave as is)
        markdown_extensions:
        - admonition
        - abbr
        - attr_list
        - def_list
        - footnotes
        - meta
        - md_in_html
        - toc:
            permalink: true
            title: On this page
        - pymdownx.arithmatex:
            generic: true
        - pymdownx.betterem:
            smart_enable: all
        - pymdownx.caret
        - pymdownx.critic
        - pymdownx.details
        - pymdownx.emoji:
            emoji_index: !!python/name:materialx.emoji.twemoji
            emoji_generator: !!python/name:materialx.emoji.to_svg
        - pymdownx.highlight
        - pymdownx.inlinehilite
        - pymdownx.keys
        - pymdownx.magiclink:
            repo_url_shorthand: true
            user: squidfunk
            repo: mkdocs-material
        - pymdownx.mark
        - pymdownx.smartsymbols
        - pymdownx.superfences:
            custom_fences:
                - name: mermaid
                class: mermaid
                format: !!python/name:pymdownx.superfences.fence_code_format
        - pymdownx.tabbed
        - pymdownx.tasklist:
            custom_checkbox: true
        - pymdownx.tilde
        ```

6. Create a `.github/workflows` folder and add a `ghpages.yml` with the following:

    ??? abstract "Expand for code!"      
        ```
        name: Publish docs via GitHub
        on:
        push:
            branches:
            - main

        jobs:
        build:
            name: Deploy docs
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-python@v4
                with:
                    python-version: 3.9
            - name: run requirements file
                run:  pip install -r requirements.txt 
            - name: Deploy docs
                run: mkdocs gh-deploy --force
                env:
                    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        ```

7. Navigate to *Settings* > *Pages* and make sure that *Source* is *Deploy from a branch* and Branch is *gh-pages*, */(root)*
    - You should be able to access your website at `https://<github-username>.github.io/`. If you cannot find your website, go to the repository's settings page and navigate to *Pages*: your website address will be there.
8. Edit documents as necessary.
    - Don't forget to **add**, **commit** and **push** changes!
    - Changes will only be visible on the website after a successful push.
    - After each push, next to the commit identifier GitHub will show either a yellow circle (:yellow_circle:, meaning building), green check (:material-check:, meaning success), or red cross (:x:, meaning failure).

---

### Further Documentation

Here are some guides that you may find useful:

- [MarkDown cheatsheet](https://www.markdownguide.org/cheat-sheet/): for correct MarkDown synthax.
- [MkDocs-material](https://squidfunk.github.io/mkdocs-material/getting-started/): a starting guide to MkDocs Material theme ([massive list of supported emojis here](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/#search)).
- [MkDocs-material References](https://squidfunk.github.io/mkdocs-material/reference/): more sophisticated documentation for MkDocs Material. 
- [YouTube link to FOSS 2022](https://www.youtube.com/watch?v=UQZseJjR_OI&t=3750s&ab_channel=CyVerse.org): Michael explains (~1h mark) his Jekyll-based website and gives a tutorial on how to use [academicpages](https://academicpages.github.io/).

---

## Self-Paced Material

- [15 Data Science Communities to Join](https://towardsdatascience.com/15-data-science-slack-communities-to-join-8fac301bd6ce){target=_blank}
- [Python & Slack](https://towardsdatascience.com/python-and-slack-a-natural-match-60b136883d4d){target=_blank}
- [Slack CLI notifications](https://samapriya.github.io/projects/slack_notifier_cli_addon/){target=_blank}
- [Meetups](https://www.meetup.com/){target=_blank}

### GitHub Pages Website Quickstarts

- [:simple-github: *GitHub Pages*](https://pages.github.com/)
    1.  Create a GitHub account
    2.  Clone the repo `https://github.com/username/username.github.io`
    3.  Create an `index.html`
    4.  Push it back to GitHub

- [:simple-readthedocs: *ReadTheDocs.org*](https://readthedocs.org/)
    1.  [Install](https://docs.readthedocs.io/en/stable/install.html)
    2.  [Use Github](https://github.com/rtfd/readthedocs.org)
    3.  [Create a ReadTheDocs account](https://readthedocs.org/accounts/signup/)

- [:simple-markdown: *Material MkDocs*](https://squidfunk.github.io/mkdocs-material/getting-started/)
    1. [Install Material](https://squidfunk.github.io/mkdocs-material/getting-started/#installation) 
        1. use a [`reqirements.txt`](https://github.com/CyVerse-learning-materials/foss/blob/mkdocs/requirements.txt) 
        2. or `pip install mkdocs-material`
    2. Clone a repository with an existing template or create a new repo with `mkdocs new .` 
    3. Run `python -m mkdocs serve` to build and serve locally
    4. Open your browser to preview the build at https://localhost:8000`

- [:material-book-arrow-down: *Bookdown*](https://bookdown.org/)
    1.  [Install R and RStudio](https://www.rstudio.com/products/rstudio/download/)
    2.  Install Bookdown package with `install.packages("bookdown", dependencies=TRUE)`
    3.  Open the Bookdown demo and get started

- [:simple-r: *Quarto*](https://quarto.org/)
    - [Follow these instructions](https://quarto.org/docs/publishing/github-pages.html)

- [:simple-jupyter: *JupyterBook*](https://jupyterbook.org/en/stable/intro.html)
    - [Create your first book](https://jupyterbook.org/en/stable/start/your-first-book.html)

- [:simple-git: *GitBook*](https://docs.gitbook.com/)
    - [Follow Template builder](https://app.gitbook.com/join)


---

## Self Assessment

??? Question "True or False: Tutorials and How-to-Guides are the same"

    !!! Success "False"

        Tutorials are in general introductory and longer than How-to-Guides and are intended for teaching learners a new concept by describing applications and providing justifications. 

        How-to-Guides are more like cooking recipes which include step-by-step instructions for a specific task.

??? Question "True or False: Teams should communicate over a single messaging platform."

    !!! Success "False"

        While it may be advisable to push informal communication toward a platform like SLACK or Microsoft Teams, there is no one-platform-fits-all solution for managing a diverse science team.

??? Question "What is the best communication platform for team science?"

    !!! Info "There is no best platform, but there are some best practices"

        In general, communications amongst team members may be best suited for messaging services like SLACK, Teams, or Chat.

        For software development, GitHub Issues are one of the primary means of documenting changes and interactions on the web.

        Formal communication over email is preferred, and is necessary for legal, budgetary, and institutional interactions.
