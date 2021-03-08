.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**GitHub Overview**
-------------------

`Version Control <https://en.wikipedia.org/wiki/Version_control>`_ is an important component in software development which manages changes to documents, websites, code, or other digital information. Version control can save you when code changes break things. Web hosting of your code repositories lets you share and work on code together and save your work in the event of a hardware failure.

The `most commmon version control software <https://en.wikipedia.org/wiki/List_of_version-control_software>`_ in data science are ``git``, ``svn``, ``cvs``, and ``bzr``.

Given the limited amount of time we have this week, we are only going to cover `Git <https://git-scm.com/>`_ and one web-based hosting service (`GitHub <https://github.com/>`_) in this camp.

In this lesson you will learn how to:

- Interact with ``git`` via GitHub
	- Using a browser
  	- Using the command line
- Add collaborators to your organization
- Initialize a ``git`` repository on the command line and push it to GitHub
	- Push/pull files
	- Commit to GitHub
- Learn about versions
	- Forks
	- Branches
	- Merges
	- Revert
	- Releases
	- Badging

.. Goals::

	- Feel comfortable using the GitHub environment
	- Integrate at least one repository onto GitHub


.. Prerequisites::

   In order to complete this exercise you should have already installed ``git`` for the command line (`instructions <https://git-scm.com/downloads>`_) & created an account on the `GitHub <https://github.com/>`_

.. Important::

   GitHub is not really intended for storing or manipulating data

Navigating & Interacting with GitHub
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Basic Layout:**


|Git_Hub|

The basic layout includes:

- Profile
- Organizations
- Teams
- Repositories
- `Projects <https://help.github.com/en/articles/about-project-boards>`_
- Followers
- Contributions
- Watch / Unwatch repos

**Add a Collaborator:**


*Online only*

1. Go to your Organization
2. Click "people"
3. Invite someone!

OR

1. Can add collaborators under "Settings" -> "Collaborators"

**Create a Repository Online:**


*Online*

1. Go to your dasboard
2. Click "New"
3. Name the repository
4. Initialize with "README"
   - form of metadata
   - this tells you and the those looking at the repository what it is about
5. Go to "Clone or Download" and clone to local folder / directory titled "Lab"
6. Can delete repo under "Settings" -> "Options"

**Create a Repository in the Command Line:**

1. Locate or create a local folder / directory structure titled "Lab"

.. code-block:: bash

   cd
   mkdir -p github/lab
   cd github/lab


2. Initialize folder as a repository with ``git``

.. code-block:: bash

   git init
   echo "This is a test repo" >> README.md #append to file
   git add . #add all the files in the current directory
   git commit -m "initial project"

.. NOTE::

   **Documentation is vital** *You will be doing this for YOU 6 months from now*

Interact with the GitHub Website
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Clone a repository:**

This is used to work *locally* rather than online.

*Using GitHub Website User Interface:*

1. Click the down arrow "Clone or download"
2. Click "Open in Desktop"
3. Select where to save it
   - Create a folder for GitHub repos on your computer locally

*Using git in the Command Line:*

.. code-block:: bash

   cd path/to/location
   git clone <url> [rename]
   #URL of thte repository on GitHub
   #rename the directory (optional)

"Committing" your work to GitHub
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*Using Website User Interface:*

1. Create a file  by clicking "Create a new file"
2. Name file (/name)
3. Write commit message
4. Press "Commit"

OR

1. Create a file *locally*
2. Click "Upload files"
3. Select file(s) within a folder

*Using the Command Line:*

1. Create a file

.. code-block:: bash

   cd path/to/repo
   touch file.txt

2. Add file(s)

.. code-block:: bash

   git add -A #adds all the new files
   git push
   git commit -m "added file" #-m initiates a message


.. tip::

    It is good practice to write commmit messages to remember what you added or fixed.

Create an Issue in a Repository
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Issues are great for tracking decisions made or to-do lists

**GitHub Website User Interface:**

1. Click on the repository you just created.
2. Click on "Issues"
3. Click on "New issue"
4. Create a title (# and issue number for reference)
5. Assign to someone, or create a label
6. Submit new issue
7. Close issue

.. Exercise::

   Create a new issue and relate it back to the issue you just created.


Version Control Features
~~~~~~~~~~~~~~~~~~~~~~~~

**View Version Control History Online:**

1. Click on file
2. Click "History"

**View Version Control history in the Command Line:*

.. code-block:: bash

   git log
   git log --stat #gives abbreviated stats for each commit
   git log --pretty=oneline #can also add options: short, full, fuller
   git log --pretty=format:"%h - %an, %ar : %s #lots of options for pretty=format
   q #to quit

Branching in Git
~~~~~~~~~~~~~~~~

Branches are useful to working on code etc. without disturbing the *main branch*.

*Create a Branch using the GitHub Website User Interface:*

1. Select the down arrow on the repository page that says "Branch:main"
2. Create a new branch name

OR

1. Add new file or edit existing file.
2. Write a commit message.
3. Select "Create a **new branch**"

*Creating a Branch Using the Command Line interface:*

1. Create a new branch

.. code-block:: bash

   cd path/to/repo
   #common practice to pull before commiting anything
   git pull #does a fetch for you
   git checkout -b new-branch #creates a new branch and puts you on that branch
   #set new branch upstream
   git push --set-upstream origin new-branch

2. Edit some files

.. code-block:: bash

   #edit files
   vi path/to/file
   q #to quit

3. Commit changes

.. code-block:: bash

   git pull
   git add
   commit -am "changed a file" #stage changes and write a message
   git push


Make a pull request
~~~~~~~~~~~~~~~~~~~

Pull requests are useful to have another set of eyes to review changes  before merging them with the master branch.

**GitHub Website User Interface:**

1. From your branch, create a new file
2. Commit file to your branch
3. Hit "Compare & pull request"
4. Go to pull requests
5. Set it on the master branch

Merging Pull Requests
~~~~~~~~~~~~~~~~~~~~~

**GitHub Website User Interface:**

1. Go to "Pull requests"
2. Select down arrow of "Merge pull request" (if no conflicts)
3. Delete branch
4. Leave comment if need be
5. Close pull request

**Merging with Git Command Line:**

.. code-block:: bash

   cd path/to/repo
   git pull
   git checkout new-branch
   git merge master #testing to see if merging breaks anythin
   git checkout master
   git merge new-branch #now repull it all into master

Revert to Previous Commit
~~~~~~~~~~~~~~~~~~~~~~~~~

**Reverting to Previous Commit with Command Line:**

.. code-block:: bash

   git log
   #copy tag for last working commit
   git revert <tag to last working commit>
   #will make it look like a new commit
   git add -A
   git commit -m "changed things back to <commit tag>"
   git push

Advanced Git & GitHub Features
-------------------------------

Forking a Repository
~~~~~~~~~~~~~~~~~~~~

**Fork via GitHub Website User Interface:**

1. Go to a new repository
2. Click fork
3. Save to personal repository.
4. Clone to Desktop.
5. Interact via online or in Desktop.
6. If want to make suggestions, can create a pull request.

*Fork via git Command Line*

.. code-block:: bash

   git close <github-repo>
   cd <new-folder>
   git fork

Versioning
~~~~~~~~~~~

Versioning is *Online only*

**Versioning:**

	1. Go to "Releases"
	2. Click "Create a new release"
	3. Tag version: Version #
	4. Release title: I usually put the date of the release, but any system can work



.. Definitions::

   **Git** - tool for version control.

   **GitHub** - hosted server that is also interactive.

   **repo** - short for repository; GitHub lets you create a remote repository online.

   **local** - on your personal computer.

   **clone** - copy of a repository that lives locally on your computer. Pushing changes will affect the repository online.

   **fetch** - getting latest changes to the repository on your local computer.

   **branch** - parallel to the master branch; allows you to make changes without affecting the master branch. Changes made on a branch can be merged back to the master.

   **fork** - copy of someone else's repository stored locally on your account. From forks, you can make pull requests to the master branch.

   **upstream** - primary or master branch of original repository.

   **downstream** - branch or fork of repository.

   **untracked** - changes made locally but not yet commited or pushed to the online repo.

   **staged** - item added to the repo.

   **commit** - finalize a change.

   **push** - add changes back to the remote repository.

   **merge** - takes changes from a branch or fork and applies them to the master.

   **pull request** - proposed changes to/within a repository.

   **issue** - suggestions or tasks needed for the repository. Allows you to track decisions, bugs with the repository, etc.


**Git cheat sheet**
~~~~~~~~~~~~~~~~~~~

Here is a list of the most important commands in Git:

.. list-table::
    :header-rows: 1

    * - Git Task
      - Command
      - Description
    * - Set up your profile locally
      - ``git config --global user.name "Cy Unicorn"``
      - Set your user name
    * -
      - ``git config --global user.email Cy1@cyverse.org``
      - Set your email address
    * - Create a Repository locally
      - ``git init``
      - Initialize a folder as a  ``git`` repository
    * - Get an existing repository from a web service
      - ``git clone ssh://git@github.com/[username]/[repository-name].git``
      - Create a local copy of a remote repository

.. list-table::
    :header-rows: 1

    * - Basic Snapshots
      - Command
      - Description
    * -
      - ``git status``
      - Check status of the repository
    * -
      - ``git add [file-name.txt]``
      - Add a file to "the staging area"
    * -
      - ``git add -A``
      - Add all new and changed files to "the staging area"
    * -
      - ``git commit -m "[brief commit message]"``
      - Commit changes to "the staging area"
    * -
      - ``git rm -r [file-name.txt]``
      - Remove a file (or folder)
    * -
      -`git push`
      - Push changes to remote repository (remembered branch)

.. list-table::
    :header-rows: 1

    * - Branching & Merging
      - Description
    * - ``git branch``
      - List branches (the asterisk denotes the current branch)
    * - ``git branch -a``
      - List all branches (local and remote)
    * - ``git branch [branch name]``
      - Create a new branch
    * - ``git branch -d [branch name]``
      - Delete a branch
    * - ``git push origin --delete [branch name]``
      - Delete a remote branch
    * - ``git checkout -b [branch name]``
      - Create a new branch and switch to it
    * - ``git checkout -b [branch name] origin/[branch name]``
      - Clone a remote branch and switch to it
    * - ``git checkout [branch name]``
      - Switch to a branch
    * - ``git checkout -``
      - Switch to the branch last checked out
    * - ``git checkout -- [file-name.txt]``
      - Discard changes to a file
    * - ``git merge [branch name]``
      - Merge a branch into the active branch
    * - ``git merge [source branch] [target branch]``
      - Merge a branch into a target branch
    * - ``git stash``
      - Stash changes in a dirty working directory
    * - ``git stash clear``
      - Remove all stashed entries

.. list-table::
    :header-rows: 1

    * - Sharing & Updating Projects
      - Description
    * - ``git push origin [branch name]``
      - Push a branch to your remote repository
    * - ``git push -u origin [branch name]``
      - Push changes to remote repository (and remember the branch)
    * - ``git push``
      - Push changes to remote repository (remembered branch)
    * - ``git push origin --delete [branch name]``
      - Delete a remote branch
    * - ``git pull``
      - Update local repository to the newest commit
    * - ``git pull origin [branch name]``
      - Pull changes from remote repository
    * - ``git remote add origin ssh://git@github.com/[username]/[repository-name].git``
      - Add a remote repository
    * - ``git remote set-url origin ssh://git@github.com/[username]/[repository-name].git``
      - Set a repository's origin branch to SSH

.. list-table::
    :header-rows: 1

    * - Inspection & Comparison
      - Description
    * - ``git log``
      - View changes
    * - ``git log --summary``
      - View changes (detailed)
    * - ``git diff [source branch] [target branch]``
      - Preview changes before merging

----

**Fix or improve this documentation:**

- On Github: |Github Repo Link|
- Send feedback: `Tutorials@CyVerse.org <Tutorials@CyVerse.org>`_

----

.. |Git_Hub| image:: ../img/git-logo.png
    :width: 150

.. |Github Repo Link| raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss/tree/master/reproducible_science/GitHub.rst" target="blank">Github Repo Link</a>
