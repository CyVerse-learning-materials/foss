# Version Control

Version control refers to keeping track of the version of a file, set of
files, or a whole project.

Some version control tools:

-   Microsoft Office's *Track Changes* functionality
-   Apple's *Time Machine*
-   Google Docs' *Version History*
-   Git

Version control is as much a philosophy as a set of tools; you don't
need to master Git to utilize version control (though it is certainly a
worthwhile tool for many researchers).

## Definitions

!!! Info "Git-related Definitions"
        *Git* - tool for version control.

        *GitHub* - hosted server that is also interactive.

        *repo* - short for repository

        *local* - on your personal computer.

        *remote* - somewhere other than your computer. GitHub can host remote
        repositories.

        *clone* - copy of a repository that lives locally on your computer.
        Pushing changes will affect the repository online.

        *fetch* - getting latest changes to the repository on your local
        computer.

        *branch* - a history of changes to a repository. You can have parallel
        branches with separate histories, allowing you to keep a "main"
        version and development versions.

        *fork* - copy of someone else's repository stored locally on your
        account. From forks, you can make pull requests to the main branch.

        *upstream* - primary or main branch of original repository.

        *downstream* - branch or fork of repository.

        *commit* - finalize a change.

        *push* - add changes back to the remote repository.

        *merge* - takes changes from a branch or fork and applies them to the
        main.

        *pull request* - proposed changes to/within a repository.

        *issue* - suggestions or tasks needed for the repository. Allows you to
        track decisions, bugs with the repository, etc.

---

## Git vs. GitHub

**Git** is a command-line program for version control of repositories.
It keeps track of changes you make to files in your repository and
stores those changes in a *.git* folder in that repository.
These changes happen whenever you make a **commit**. Git stores the
history of these commits in a "tree", so you can go back to any
previous commit. By keeping track of the **differences** between
commits, Git can be much more efficient than storing an entire copy of
each version in a document's history.

You could utilize Git completely on its own, on your local computer, and
get a lot of benefits. You will have a history of the changes you made
to a project, allowing you to go back to any old version of your work.
However, where Git really shines is in *collaborative* work. In order to
effectively collaborate with others on a project, you need two basic
features: a way to allow people to work in parallel, and a way to host
repositories somewhere where everyone can access them. The first feature
is **branching**, which is part of Git, and the hosting part can be
taken care of by platforms like GitHub, GitLab, or Bitbucket. We will
focus on GitHub.

GitHub is a site that can remotely host your Git repositories. By
putting your repository onto GitHub, you get a backup of the repository,
a way to collaborate with others, and a lot of other features.

---

## Practical Git Techniques

After learning the basics of using Git, which you can learn with the
[Software Carpentry Git Lesson](https://swcarpentry.github.io/git-novice/), there are some next
things that can be useful to learn. Here are a couple topics that are
worth digging into more:

- Using the Git log
    -   you can access using **git log**
    -   will show you your commit history
    -   useful for figuring out where you need to roll back to

- Reverting
    -   there are a lot of different ways to "undo" something in Git
    -   some are safer, some are a bit riskier
    -   depends on what stage of the commit process you're in
    - **here are some useful resources**:
        - https://www.codementor.io/@citizen428/git-tutorial-10-common-git-problems-and-how-to-fix-them-aajv0katd
        - http://justinhileman.info/article/git-pretty/git-pretty.png
        - https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/

- Branching
    - this is important to learn if you\'re going to be doing any sort of collaboration
    - here is a fantastic resource for learning how git branching really works: https://learngitbranching.js.org/
    - **you will probably have to deal with *merge conflicts* at some point**
        -   merge conflicts happen when two branches are being merged, but they have *different* changes to the same part of a file
        -   perhaps you are working on a feature branch, and you change line 61 in *file.R*, but someone else made a change to the main branch at line 61 in *file.R*. When you try to merge the feature and main branches, Git won't know which changes to line 61 in *file.R* are correct, and you will need to manually decide.
        -   here are some good resources:
            - https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
            - https://nitaym.github.io/ourstheirs/

- *.gitignore*
    -   you often want Git to completely ignore certain files
    -   generated files (like HTML files from Markdown docs)
    -   IDE-specific files like in *.RStudio* or *.vscode* folders
    -  **really big files, like data or images**
        -   if you accidentally commit a really big file, GitHub might not let you push that commit
        -   if you have a huge file in Git, your repository size can get way too big
        -   this is a pain to solve, so use the *.gitignore* file ahead of time, but if you need to fix this, here is a great resource: 
        - https://necromuralist.github.io/posts/removing-large-files-from-git-using-bfg-and-a-local-repository/

--- 

## Useful GitHub Features

At its core, GitHub is just a place to host your Git repositories.
However, it offers a lot of functionality that has less to do with Git,
and more to do with our favorite topic, **Project Management**. We will
walk through a few of these useful features.

- Issues
    -   issues let you plan out changes and suggestions to a repo
    -   closing/reopening
    -   labels
    -   assigning
    -   templates
    -   numbering/mentioning
    -   GitHub documentation: https://docs.github.com/en/issues

- Pull Requests
    -   pull requests are a way to request merging code from one branch to another
    -   typical workflow is for someone to fork a repo, then make a PR from that repo to another
    -   reviews
    -   commenting
    -   merging
    -   closing issues
    -   GitHub documentation: https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

- Organizations
    -   you can use Organizations to organize sets of repositories
    -   roles
    -   teams
    -   GitHub documentation:
        https://docs.github.com/en/organizations

- Other neat things
    -   Permissions/collaborators
    -   GitHub Classroom
    -   Gists
    -   CSV and map rendering
    -   Code editor

!!! Note
        Git is not really for storing or manipulating data, especially large
        files. But the [CyVerse Discovery
        Environment](https://de.cyverse.org/de/) is a great place to serve,
        store, and share data.
