# :material-file-document-multiple: Documentation & :material-antenna: Communication

!!! Success "Learning Objectives"
        
    After this lesson, you should be able to:

    *  Identify and explain different types of project documentation (both internal and external)
    *  Describe tools and approaches to creating your own documentation
    *  Describe best practices for maintaining documentation
    *  Identify and explain different communication strategies for working in a team (virtual and in person)
    *  Create your own GitHub Pages website (!)

Peer-reviewed manuscripts or conference preceedings / presentations /posters are one of the primary ways of communicating science, but they are far from the only avenues of communcation available to us as researchers and educators.

As our methods become more complicated and customized, open science means giving people a better understanding of our approaches and tools than may be required in most journals. 

Communicating amongst a team of researchers that may span institutions, time zones, or continents also requires more modern approaches. 

Strong frameworks for internal communication and documentation can make collaboration easier, improve the quality of your science, and reduce the hassle of collaborative work.

## :material-file-document-multiple: Project Documentation

This website is rendered using [:simple-github: GitHub Pages](https://pages.github.com/){target=_blank} using [:simple-markdown: MkDocs](https://www.mkdocs.org/){target=_blank} and the [Material](https://squidfunk.github.io/mkdocs-material/){target=_blank} theme for MkDocs. 

Other popular website generators for GitHub Pages are [:simple-jekyll: Jekyll Theme](https://jekyllrb.com/){target=_blank} or [:simple-bootstrap: Bootstrap.js](https://getbootstrap.com/){target=_blank}.

[:simple-readthedocs: ReadTheDocs.org](https://readthedocs.org/){target=_blank} has become a popular tool for developing web-based documentation. Think of RTD as "Continuous Documentation".

[:material-book-arrow-down: Bookdown](https://bookdown.org/){target=_blank} is an open-source R package that facilitates writing books and long-form articles/reports with R Markdown.

[:simple-r: Quarto](https://quarto.org/){target=_blank} is an open-source scientific and technical publishing system built on Pandoc

[:simple-confluence: Confluence Wikis (CyVerse)](https://wiki.cyverse.org){target=_blank} are another tool
for documenting your workflow.

!!! Quote "Things to remember about Documentation"

    - Documentation should be written in such a way that people who did not write the documentation can read and then use or read and then teach others in the applications of the material.

    - Documentation is best treated as a living document, but version control is necessary to maintain it

    - Technology changes over time, expect to refresh documentation every 3-5 years as your projects age and progress.

*:simple-github: GitHub Pages*

-   You can pull templates from other GitHub users for your website,
    e.g. [:simple-jekyll: Jekyll themes](http://themes.jekyllrc.org/){target=_blank}
-   GitHub pages are free, fast, and easy to build, but limited in use
    of subdomain or URLs.

*:simple-readthedocs: ReadTheDocs*

-   publishing websites via
    [ReadTheDocs.com](https://readthedocs.com/dashboard/){target=_blank} costs money.
-   You can work in an offline state, where you develop the materials
    and publish them to your localhost using
    [Sphinx](https://docs.readthedocs.io/en/stable/intro/getting-started-with-sphinx.html){target=_blank}
-   You can work on a website template in a GitHub repository, and
    pushes are updated in near real time using ReadTheDocs.com.

*:simple-markdown: Material MkDocs*

- publish via GitHub Actions
- Uses open source Material or ReadTheDocs Themes

*:material-book-arrow-down: Bookdown*

-   Bookdown websites can be hosted by [RStudio
    Connect](https://www.rstudio.com/products/connect/){target=_blank}
-   You can publish a Bookdown website using [Github
    Pages](https://github.blog/2016-08-17-simpler-github-pages-publishing/){target=_blank}

*:simple-r: Quarto*

-   [Build a website](https://quarto.org/docs/websites/) using Quarto's template builder
-   [Build with Github Pages](https://quarto.org/docs/publishing/github-pages.html)

*:simple-jupyter: JupyterBook*

-   [Based on Project Jupyter](https://jupyterbook.org/en/stable/start/overview.html){target=_blank} `ipynb` and MarkDown
-   Uses `conda` package management

*:simple-git: GitBook*

- [GitBook](https://docs.gitbook.com/){target=_blank} websites use MarkDown syntax
- Free for open source projects, paid plans are available

### Websites to Host Methods & Protocols

[Open Science Framework](https://osf.io/){target=_blank} for free. OSF can be directly linked to your ORCID.

-   Integrated project management tools
-   Uses templates to create a project website
-   Can publish preprints from within project management tools

[Protocols.io](https://www.protocols.io/){target=_blank} - collaborative platform and preprint server for: science methods, computational workflows, clinical trials, operational procedures, safety checklists, and instructions / manuals.

[QUBES](https://qubeshub.org/){target=_blank} - community of math and biology educators who share resources and methods for preparing students to tackle real, complex, biological problems.

## Hands On: Build a GitHub Pages Website 

[:simple-github:](https://pages.github.com/){target=_blank}

1.  Create a GitHub account
2.  Clone the repo `https://github.com/username/username.github.io`
3.  Create an `index.html`
4.  Push it back to GitHub

[:simple-readthedocs: *ReadTheDocs.org*](https://readthedocs.org/){target=_blank}

1.  [Install](https://docs.readthedocs.io/en/stable/install.html){target=_blank}
2.  [Use Github](https://github.com/rtfd/readthedocs.org){target=_blank}
3.  [Create a ReadTheDocs account](https://readthedocs.org/accounts/signup/){target=_blank}

[:simple-markdown: *Material MkDocs*](https://squidfunk.github.io/mkdocs-material/getting-started/){target=_blank}

1. [Install Material](https://squidfunk.github.io/mkdocs-material/getting-started/#installation) 
    a. use a [`reqirements.txt`](https://github.com/CyVerse-learning-materials/foss/blob/mkdocs/requirements.txt) 
    b. or `pip install mkdocs-material`
2. Clone a repository with an existing template or create a new repo with `mkdocs new .` 
3. Run `python -m mkdocs serve` to build and serve locally
4. Open your browser to preview the build at https://localhost:8000`

[:material-book-arrow-down: *Bookdown*](https://bookdown.org/){target=_blank}

1.  [Install R and RStudio](https://www.rstudio.com/products/rstudio/download/){target=_blank}
2.  Install Bookdown package with `install.packages("bookdown", dependencies=TRUE)`
3.  Open the Bookdown demo and get started

[:simple-r: *Quarto*](https://quarto.org/docs/publishing/github-pages.html){target=_blank}

1. Build locally
2. Push to GitHub
3. (alt) Use GitHub Actions

[:simple-jupyter: *JupyterBook*](https://jupyterbook.org/en/stable/intro.html)

1. [Create your first book](https://jupyterbook.org/en/stable/start/your-first-book.html)

[:simple-git: *GitBook*](https://docs.gitbook.com/){target=_blank}

1. [Follow Template builder](https://app.gitbook.com/join)

---

## :material-antenna: Communication

### Internal Project 

Choosing which software to use for your internal lab communication can be complicated by the cost of setting up, the cost of maintaining, and simply by the sheer number of platforms that are out there.

For this workshop, we use [:simple-slack: SLACK](https://slack.com/){target=_blank} (Searchable Log of All Conversation & Knowledge). Microsoft's competitor to SLACK is [:material-microsoft-teams: Microsoft Teams](https://teams.microsoft.com/start){target=_blank}.

Remember, the intention of these platforms are to **improve productivity** & not become a distraction.

**:simple-slack: SLACK**

-   Slack has [plenty of apps](https://slack.com/apps){target=_blank} for coordinating
    multiple services, i.e. Calendars, Github, GoogleDrive, Box, etc.
-   Slack is limiting unless you're willing to pay for the professional
    support.

**:material-microsoft-teams: Microsoft Teams**

-   Teams is used by many R1 research universities as part of their
    campus wide license agreement for Office 365 Business and Education.

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

Although we didn't cover it explicitly in the announcement for the workshop, communicating with the public and other members of your science community is one of the most important parts of your science!

There are many ways scientists use social media and the web to share their data science ideas:

1.  [:simple-twitter: "Science Twitter"](https://www.sciencemag.org/news/2018/08/scientists-do-you-want-succeed-twitter-here-s-how-many-followers-you-need){target=_blank} -
    is really just regular [Twitter](https://twitter.com/hashtag/science?lang=en){target=_blank}, but with a
    focus on following other scientists and organizations, and tweeting
    about research you're interested in. By building up a significant
    following, more people will know you, know about your work, and
    you'll have a higher likelihood of meeting other new collaborators.
2.  [:fontawesome-solid-blog: Blogs](https://blogging.org/blog/top-science-blogs/){target=_blank} - there are
    numerous platforms for blogging about research, the older platforms
    tend to dominate this space. Other platforms like,
    [:simple-medium:Medium](https://medium.com/topic/data-science){target=_blank} offer a place for
    reseachers to create personalized reading spaces and self publish.
3.  Community groups - There are lists (and lists of lists) of
    [nationals research organizations](https://www.google.com/search?q=list+of+professional+science+organizations){target=_blank},
    in which a researcher can become involved. These older organziations
    still rely on official websites, science journal blogs, and email
    lists to communicate with their members. In the earth sciences there
    are open groups which focus on communication like the [Earth Science
    Information Partners (ESIP)](https://www.esipfed.org/){target=_blank} with
    progressive ideas about how data and science can be done. Other
    groups, like [The Carpentries](https://carpentries.org/){target=_blank} and
    [Research Bazaar](https://resbazblog.wordpress.com/about/){target=_blank} are
    focused on data science training and digital literacy.

!!! Warning "Important"
        **Remember** Personal and Professional Accounts are Not Isolated

        You decide what you post on the internet. Your scientist identity may be
        a part of your personal identity on social media, it might be separate.
        A future employer or current employer can see your old posts. What you
        post in your personal accounts can be considered a reflection of the
        organization you work for and may be used in decisions about hiring or
        dismissal.


# Self Assessment

??? Question "What are the benefits of using a GitHub.io website?"

    [Github Pages](https://pages.github.com/) are hosted directly from your GitHub repository. 
    
    Just edit, push, and your changes are live.

    You do not need to run your own web server!!

---

## Self-Paced Material

- [15 Data Science Communities to Join](https://towardsdatascience.com/15-data-science-slack-communities-to-join-8fac301bd6ce){target=_blank}
- [Python & Slack](https://towardsdatascience.com/python-and-slack-a-natural-match-60b136883d4d){target=_blank}
- [Slack CLI notifications](https://samapriya.github.io/projects/slack_notifier_cli_addon/){target=_blank}
- [Meetups](https://www.meetup.com/){target=_blank}

---