.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo2|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_


**Version Control** 
===================

`Version Control <https://en.wikipedia.org/wiki/Version_control>`_ is an important component in software development which manages changes to documents, websites, code, or other digital information. Version control can save you when code changes break things. Web hosting of your code repositories lets you share and work on code together and save your work in the event of a hardware failure. 

The `most commmon version control software <https://en.wikipedia.org/wiki/List_of_version-control_software>`_ in data science are ``git``, ``svn``, ``cvs``, and ``bzr``.

Given the limited amount of time we have this week, we are only going to cover `Git <https://git-scm.com/>`_ and one web-based hosting service (`GitHub <https://github.com/>`_) in this camp.

.. #### Comment: short description

**Decision Making**

- Determine what your community is using, and learn that first. 
- The most popular software for data science applications are ``git`` and ``svn``. Both are used in Integrated Development Environments (IDE) like `RStudio <https://support.rstudio.com/hc/en-us/articles/200532077-Version-Control-with-Git-and-SVN>`_ and `Jupyter Lab <https://github.com/jupyterlab/jupyterlab-git>`_

----

**Git ready**
------------

  1. Install Git
      - `Download <https://git-scm.com/downloads>`_

  2. Create a Github Account
      - `Sign Up <https://github.com/join?source=header-home>`_
      - If you are an academic and have a ``@ .edu`` email address you can get Educational Account benefits

**Command line versus User Interfaces**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some users are more comfortable on a command line environment, and can use ``git`` without ever looking at a browser tab or file explorer.

Other users are more comfortable in a graphic user interface, like a web browser or stand alone program.

**USE WHAT YOU LIKE BEST AND IS MOST PRODUCTIVE FOR YOU!**

**Git cheat sheet**
~~~~~~~~~~~~~~~

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
      - Command
      - Description 
    * -
      - ``git branch`` 
      - List branches (the asterisk denotes the current branch) 
    * -
      - ``git branch -a`` 
      - List all branches (local and remote) 
    * -
      - ``git branch [branch name]`` 
      - Create a new branch 
    * -
      - ``git branch -d [branch name]`` 
      - Delete a branch 
    * - 
      - ``git push origin --delete [branch name]``
      - Delete a remote branch 
    * - 
      - ``git checkout -b [branch name]`` 
      - Create a new branch and switch to it 
    * - 
      - ``git checkout -b [branch name] origin/[branch name]`` 
      - Clone a remote branch and switch to it 
    * - 
      - ``git checkout [branch name]`` 
      - Switch to a branch 
    * - 
      - ``git checkout -`` 
      - Switch to the branch last checked out 
    * -  
      - ``git checkout -- [file-name.txt]`` 
      - Discard changes to a file 
    * - 
      - ``git merge [branch name]`` 
      - Merge a branch into the active branch 
    * - 
      - ``git merge [source branch] [target branch]`` 
      - Merge a branch into a target branch 
    * - 
      - ``git stash`` 
      - Stash changes in a dirty working directory 
    * - 
      - ``git stash clear`` 
      - Remove all stashed entries 

.. list-table::
    :header-rows: 1

    * - Sharing & Updating Projects
      - Command
      - Description 
    * -       
      - ``git push origin [branch name]`` 
      - Push a branch to your remote repository 
    * -       
      - ``git push -u origin [branch name]`` 
      - Push changes to remote repository (and remember the branch)
    * - 
      - ``git push`` 
      - Push changes to remote repository (remembered branch)
    * - 
      - ``git push origin --delete [branch name]`` 
      - Delete a remote branch
    * - 
      - ``git pull`` 
      - Update local repository to the newest commit
    * - 
      - ``git pull origin [branch name]`` 
      - Pull changes from remote repository 
    * - 
      - ``git remote add origin ssh://git@github.com/[username]/[repository-name].git`` 
      - Add a remote repository 
    * - 
      - ``git remote set-url origin ssh://git@github.com/[username]/[repository-name].git`` 
      - Set a repository's origin branch to SSH 

.. list-table::
    :header-rows: 1

    * - Inspection & Comparison
      - Command
      - Description 
    * - 
      - ``git log`` 
      - View changes
    * - 
      - ``git log --summary`` 
      - View changes (detailed)
    * - 
      - ``git diff [source branch] [target branch]`` 
      - Preview changes before merging

**GitHub**
-----------

`Github for Education <https://education.github.com/>`_

`GitHub <https://github.com/>`_ is (as of spring 2019) the largest and most popular platform for working with ``git``.

The use of GitHub could become the most central point of software supporting your science lab. Reproducible research requires you to host your analysis code, copies of the software (with version), operating system, and language kernels used to complete the analysis, in addition to the actual data.  

GitHub allows you to support your open science lab by creating 'repositories' where you can host each of these components of your data science workflows. It also allows you to make copies (clones) or new branches of a master repository to test out new analyses or code changes, and to merge these back in.

 - Basic Workflows
 - Repositories
 - Branches
 - Collaboration

Other more powerful uses of GitHub include the integration with other web services, like container registries (`DockerHub <https://hub.docker.com/>`_), websites (`ReadTheDocs <https://readthedocs.org/>`_, GitHub Pages `<https://pages.github.com/>`_), continuous integration (`CircleCI <https://circleci.com>`_, `Jenkins <https://jenkins.io/>`_, `Travis<https://travis-ci.org/>`_).

.. note:: 

   In this workshop, we're working with GitHub, but there are other services, like `GitLab <https://about.gitlab.com/>`_ or `Bitbucket <https://bitbucket.org>`_ which might fit your needs better. 


**Your first Repository**
~~~~~~~~~~~~~~~~~~~~~~~

1. Log into GitHub

2. Create a new Repository and initiate it with a ``README.md`` file

3. Edit the README.md by clicking on the pencil icon.

4. Create a new file by clicking on the "Create New File" icon.

5. Type in `LICENSE` - note that a "Choose a License Template" icon has been activated.

6. Click on the License Template icon and choose your preferred license.

**Issue Tracking**
~~~~~~~~~~~~~~~~

Development teams use tracking software, like `Jira <https://www.atlassian.com/software/jira>`_, or `GitHub Issues <https://guides.github.com/features/issues/>`_ to track their development progress.

ZenHub and Jira use a `Kanban <https://en.wikipedia.org/wiki/Kanban_board>`_ style board for organizing issues.

We're going to use ZenHub because it is free and works off of GitHub Issues.

**ZenHub**
~~~~~~~~~~~

`ZenHub <https://www.zenhub.com/>`_ is agile program management software which uses GitHub issues.

You log into ZenHub using your GitHub user name.

**Self-Paced Lessons**
----------------------

The Carpentries host numerous tutorials on using ``git``. You can take time on your own to explore these lessons, find a workshop, or request one be taught at your local institution.

- `Novice Git Lesson <http://swcarpentry.github.io/git-novice/>`_

Using Github on your own or for your classes

- `Github Handbook <https://guides.github.com/>`_
- `Github Classroom <https://classroom.github.com/>`_

..
	#### Comment: Suggested style guide:
	1. Steps begin with a verb or preposition: Click on... OR Under the "Results Menu"
	2. Locations of files listed parenthetically, separated by carets, ultimate object in bold
	(Username > analyses > *output*)
	3. Buttons and/or keywords in bold: Click on **Apps** OR select **Arabidopsis**
	4. Primary menu titles in double quotes: Under "Input" choose...
	5. Secondary menu titles or headers in single quotes: For the 'Select Input' option choose...
	####

----

**Fix or improve this documentation:**

- On Github: |Github Repo Link|
- Send feedback: `Tutorials@CyVerse.org <Tutorials@CyVerse.org>`_

----


.. Comment: Place Images Below This Line
   use :width: to give a desired width for your image
   use :height: to give a desired height for your image
   replace the image name/location and URL if hyperlinked



.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss-2019/tree/master/software_essentials/version_control.rst" target="blank">Github Repo Link</a>
