# Version Control


!!! Success "Learning Objectives"
        
    After this lesson, you should be able to:

    *  Understand the basics of `git` as a resource for reproducible programming
    *  Describe tools and approaches to creating your `git` Repositories
    *  Describe best practices for maintaining GitHub Organizations and Repositories
    *  Maintain own GitHub user profile and repositories

Version control refers to keeping track of the version of a file, set of
files, or a whole project.

Some version control tools:

-   :material-microsoft-office: Microsoft Office's [*Track Changes*](https://support.microsoft.com/en-au/office/track-changes-in-word-197ba630-0f5f-4a8e-9a77-3712475e806a) functionality
-   :simple-apple: Apple's [*Time Machine*](https://support.apple.com/en-us/HT201250)
-   :simple-googledocs: Google Docs' [*Version History*](https://support.google.com/docs/answer/190843?hl=en&co=GENIE.Platform%3DDesktop)
-   :simple-git: [Git](https://git-scm.com/)

Version control is as much a philosophy as a set of tools; you don't
need to master Git to utilize version control (though it is certainly a
worthwhile tool for many researchers).


<figure markdown>
  <a href="https://swcarpentry.github.io/git-novice/01-basics.html" target="blank" rel="git_def">![git_def](https://swcarpentry.github.io/git-novice/fig/phd101212s.png) </a>
    <figcaption> We have all been here, taken by the [Software Carpentry Version Control lesson](https://swcarpentry.github.io/git-novice/01-basics.html). </figcaption>
</figure>

---

## :simple-git: Git vs. :simple-github: GitHub

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

<figure markdown>
  <a href="https://devmountain.com/blog/git-vs-github-whats-the-difference/" target="blank" rel="git_v_github">![git_v_github](https://devmountain.com/wp-content/uploads/2022/01/Gitvs_Github-1a-1.jpg) </a>
    <figcaption> Git vs GitHub, simplified </figcaption>
</figure>

### Definitions

!!! Info "Git-related Definitions"
        
    **Platforms**:
    
    - **Git**: tool for version control.
    - **GitHub**: hosted server that is also interactive.

    **Locations and directions**:

    - **repo**: short for repository
    - **local**: on your personal computer.
    - **remote**: somewhere other than your computer. GitHub can host remote
    repositories.
    - **upstream**: primary or main branch of original repository.
    - **downstream**: branch or fork of repository.

    **Actions**:
    
    - **clone**: copy of a repository that lives locally on your computer.
    Pushing changes will affect the repository online.
    - **pull**: getting latest changes to the repository on your local
    computer.
        - the **fetch** command does the same, however one needs to also **merge** the changes, whilst with pull, the merge action is automatic.
    - **branch**: a history of changes to a repository. You can have parallel
    branches with separate histories, allowing you to keep a "main"
    version and development versions.
    - **fork**: copy of someone else's repository stored locally on your
    account. From forks, you can make pull requests to the main branch.
    - **commit**: finalize a change.
    - **push**: add changes back to the remote repository.
    - **merge**: takes changes from a branch or fork and applies them to the
    main.

    !!! tip "These are also commands when paird with `git`!"
        Using the following synthax `git <command>` one can trigger an action. An example is `git pull`, which will pull all of the latest changes in the remote repository.

    **Funtional**: 
    
    - **pull request**: proposed changes to/within a repository.

    - **issue**: suggestions or tasks needed for the repository. Allows you to
    track decisions, bugs with the repository, etc.

<figure markdown>
  <a href="https://www.c-sharpcorner.com/article/git-and-github-version-control-local-and-remote-repository/" target="blank" rel="git_def">![git_def](https://n7b3p4s2.stackpathcdn.com/article/git-and-github-version-control-local-and-remote-repository/Images/Git%20And%20Github%20Version%20Control.png) </a>
    <figcaption> Visualizing the commands through a workflow example <br> (graphic's correction: ~~marged~~ merged) </figcaption>
</figure>

---

## Practical Git Techniques

<figure markdown>
  <a href="https://resources.pcb.cadence.com/blog/what-is-a-version-control-system" target="blank" rel="vc_path">![vc_path](https://content.cdntwrk.com/files/aHViPTg1NDMzJmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzYzOTkwY2I4OWU5YTUuanBnJnZlcnNpb249MDAwMCZzaWc9OWJjZTA5NDIxNzY4MWFhZjYyNmEwNWNhYmI1YTUzMWQ%253D) </a>
    <figcaption> The version control path sofware takes before release </figcaption>
</figure>

!!! info "The basic Git life cycle"

    When using Git for your version control, the usual life cycle is the following:

    | Action| Explanation |
    |---|---|
    | 1. `git clone <repository>` | Clones the target repository to your machine |
    | 2. `git status` | Checks whether there are changes in the remote, original repository |
    | 3. `git pull`| Pulls any change to your local repository |
    | 4. `git add <changes>` | Adds to a future commit any change |
    | 5. `git commit -m "<message>"` | Creates the commit and adds a descriptive message |
    | 6. `git push` | Pushes the changes commited from local to the remote repository |

    If there are no branches or external pull requests, the *basic* Git life cycle is summarizable like this:

    ```mermaid
    graph LR
    A[1. git clone] --> B[2. git status] -->C([differences from origin?]):::colorclass;
    C-->|yes| D[3. git pull]--> E;
    C-->|no| E[4. git add];
    E-->F[5. git commit] -->G[6. git push];
    G-->B;
    classDef colorclass fill:#f96
    ```

After learning the basics of using Git, which you can learn with the
[Software Carpentry Git Lesson](https://swcarpentry.github.io/git-novice/), there are some next
things that can be useful to learn. Here are a couple topics that are
worth digging into more:

- **:octicons-log-24: Using the Git log**
    -   You can access using **git log**
    -   Will show you your commit history
    -   Useful for figuring out where you need to roll back to

- **:material-keyboard-tab-reverse: Reverting**
    -   There are a lot of different ways to "undo" something in Git
    -   Some are safer, some are a bit riskier
    -   Depends on what stage of the commit process you're in
    - **Here are some useful resources**:
        - [*10 Common Git Problems and How to Fix Them*](https://www.codementor.io/@citizen428/git-tutorial-10-common-git-problems-and-how-to-fix-them-aajv0katd)
        - [*"So you have a mess on your hands..."*](http://justinhileman.info/article/git-pretty/git-pretty.png)
        - [*How to undo almost anything*](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/)

- **:octicons-git-branch-24: Branching**
    - This is important to learn if you're going to be doing any sort of collaboration
    - Here is a fantastic resource for learning how git branching really works: https://learngitbranching.js.org/
    - **you will probably have to deal with *merge conflicts* at some point**
        -   Merge conflicts happen when two branches are being merged, but they have *different* changes to the same part of a file
        -   Perhaps you are working on a feature branch, and you change line 61 in *file.R*, but someone else made a change to the main branch at line 61 in *file.R*. When you try to merge the feature and main branches, Git won't know which changes to line 61 in *file.R* are correct, and you will need to manually decide.
        -   Here are some good resources:
            - [Resolving merge conflics](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/)resolving-a-merge-conflict-using-the-command-line
            - [git - ours & theirs, a CLI resource to help with conflicts](https://nitaym.github.io/ourstheirs/)

- **:simple-gitignoredotio: .gitignore**
    -   You often want Git to completely ignore certain files
    -   Generated files (like HTML files from Markdown docs)
    -   IDE-specific files like in *.RStudio* or *.vscode* folders
    -  **really big files, like data or images**
        -   If you accidentally commit a really big file, GitHub might not let you push that commit
        -   If you have a huge file in Git, your repository size can get way too big
        -   This is a pain to solve, so use the *.gitignore* file ahead of time, but if you need to fix this, here is a great resource: 
        - [Removing Large Files From git Using BFG and a Local Repository](https://necromuralist.github.io/posts/removing-large-files-from-git-using-bfg-and-a-local-repository/)

--- 

## Git, GitHub and Data

Git and data don't always go hand in hand. GitHub allows commited files to be uploaded only if the file is of 100MB or less (with a warning being issued for files between 50MB and 100MB). Additionally, [GitHub recommends to keep repositories below the 1GB threshold](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github#repository-size-limits), as this also allows for quicker cloning and sharing of the repository. If a large file has been uploaded by mistake and you wish to remove it, [you can follow these instrutctions](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history).

If you *do* have to work with large files and Git, here are some questions to ask yourself:

- Is this data shareable?
- Are there alternative file hosting platforms I can use?
- How will this data impact the sharability of this repository?
- Am I using a .gitignore?

GitHub now offers the [**Git Large File Storage (:simple-gitlfs: Git LFS)**](https://git-lfs.com/): the system works by storing references to the file in your repository, but not the file itself -- it creates a *pointer* file within the repo, and stores the file elsewhere. If you were to clone the repository, the pointer file will act as a map to show you how to obtain the original file.

Git LFS data upload limits are based on your GitHub subscription: 

- 2 GB for GitHub free and GitHub Pro
- 4 GB for GitHub Team
- 5 GB for GitHub Enterprise Cloud

<figure markdown>
  <a href="https://git-lfs.com/" target="blank" rel="gitlfs">![gitlfs](https://git-lfs.com/images/tweet-promo.png) </a>
    <figcaption> A depiction of how the Git LFS pointer-repository relationship works. </figcaption>
</figure>

---

## Useful GitHub Features

At its core, GitHub is just a place to host your Git repositories.
However, it offers a lot of functionality that has less to do with Git,
and more to do with [**Project Management**](02_project_management.md). We will
walk through a few of these useful features.

- [**:octicons-issue-opened-16: Issues**](https://docs.github.com/en/issues)
    -   Issues let you plan out changes and suggestions to a repo
    -   Closing/reopening
    -   Labels
    -   Assigning
    -   Templates
    -   Numbering/mentioning

- [**:material-source-pull: Pull Requests**](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
    -   Pull requests are a way to request merging code from one branch to another
    -   typical workflow is for someone to fork a repo, then make a PR from that repo to another
    -   Reviews
    -   Commenting
    -   Merging
    -   Closing issues

- [**:octicons-organization-16: Organizations**](https://docs.github.com/en/organizations)
    -   You can use Organizations to organize sets of repositories
    -   Roles
    -   Teams
    -   GitHub documentation:
        
- **Other neat things**
    -   Permissions/collaborators
    -   GitHub Classroom
    -   Gists
    -   CSV and map rendering
    -   Code editor

---

## Beyond Git and GitHub

There are other platforms that address Version Control and have similar functionalities to GitHub:

- **[:material-gitlab: GitLab](https://gitlab.com/)**: An alternative to GitHub, GitLab offers both a cloud-hosted platform and a self-hosted option ([GitLab CE/EE](https://about.gitlab.com/install/ce-or-ee/)). It provides a comprehensive DevOps platform with built-in CI/CD, container registry, and more.

- **[:simple-bitbucket: Bitbucket](https://bitbucket.org/product/)**: Atlassian's Bitbucket is a Git repository hosting service that also supports Mercurial repositories. It offers integration with Jira, Confluence, and other Atlassian products.

- **[:simple-sourceforge: SourceForge](https://sourceforge.net/)**: A platform that provides Git and Subversion hosting, as well as tools for project management, issue tracking, and collaboration.

- **[:fontawesome-brands-aws: AWS CodeCommit](https://aws.amazon.com/codecommit/)**: Part of Amazon Web Services (AWS), CodeCommit is a managed Git service that integrates seamlessly with other AWS services.

- **[:simple-azuredevops: Azure DevOps Services (formerly VSTS)](https://azure.microsoft.com/en-us/products/devops))**: Microsoft's Azure DevOps Services offers Git repository hosting along with a wide range of DevOps tools for planning, developing, testing, and deploying software.

- **[:simple-mercurial: Mercurial](https://www.mercurial-scm.org/)**: Like Git, Mercurial is a distributed version control system, but with a different branching and merging model. It's an alternative to Git for version control.

---

## Self Assessment

??? Question "True or False: Using `Git` requires a GitHub account"

    !!! Failure "False"

        `Git` is open source software.

        GitHub is a privately owned (Microsoft) company

        Other platforms like [GitLab](https://gitlab.com){target=_blank}, [GitBucket](https://gitbucket.github.io/){target=_blank}, and [GNU Savannah](https://savannah.gnu.org/){target=_blank} all offer `Git` as a version control system service.

??? Question "True or False: Using `Git` is easy"

    !!! Failure "False"

        Using `Git` can be frustrating to even the most experienced users

??? Question "When you find a new repository on GitHub that you think can help your research, what are the first things you should do?"

    !!! Success "Look at the README.md"

        Most GitHub repositories have a README.md file which explains what you're looking at.

    !!! Success "Look at the LICENSE"

        Not all repositories are licensed the same way - be sure to check the LICENSE file to see whether the software is open source, or if it has specific requirements for reuse. 
