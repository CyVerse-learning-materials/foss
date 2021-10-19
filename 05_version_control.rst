.. include:: cyverse_rst_defined_substitutions.txt
.. include:: custom_urls.txt

|CyVerse_logo|_

Version Control
------------------------------

Version control refers to keeping track of the version of a file, set of files, or a whole project.

Some version control tools:

- Microsoft Office's *Track Changes* functionality
- Apple's *Time Machine*
- Google Docs' *Version History*
- Git

Version control is as much a philosophy as a set of tools; you don't need to master Git to utilize version control (though it is certainly a worthwhile tool for many researchers).

**Definitions**
~~~~~~~~~~~~~~~~~~~~~~~~~~~
*Git* - tool for version control.

*GitHub* - hosted server that is also interactive.

*repo* - short for repository

*local* - on your personal computer.

*remote* - somewhere other than your computer. GitHub can host remote repositories.

*clone* - copy of a repository that lives locally on your computer. Pushing changes will affect the repository online.

*fetch* - getting latest changes to the repository on your local computer.

*branch* - a history of changes to a repository. You can have parallel branches with separate histories, allowing you to keep a "main" version and development versions.

*fork* - copy of someone else's repository stored locally on your account. From forks, you can make pull requests to the main branch.

*upstream* - primary or main branch of original repository.

*downstream* - branch or fork of repository.

*commit* - finalize a change.

*push* - add changes back to the remote repository.

*merge* - takes changes from a branch or fork and applies them to the main.

*pull request* - proposed changes to/within a repository.

*issue* - suggestions or tasks needed for the repository. Allows you to track decisions, bugs with the repository, etc.

Git vs. GitHub
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Git** is a command-line program for version control of repositories. It keeps track of changes you make to files in your repository and stores those changes in a `.git` folder in that repository. These changes happen whenever you make a **commit**. Git stores the history of these commits in a "tree", so you can go back to any previous commit. By keeping track of the **differences** between commits, Git can be much more efficient than storing an entire copy of each version in a document's history.

You could utilize Git completely on its own, on your local computer, and get a lot of benefits. You will have a history of the changes you made to a project, allowing you to go back to any old version of your work. However, where Git really shines is in *collaborative* work. In order to effectively collaborate with others on a project, you need two basic features: a way to allow people to work in parallel, and a way to host repositories somewhere where everyone can access them. The first feature is **branching**, which is part of Git, and the hosting part can be taken care of by platforms like GitHub, GitLab, or Bitbucket. We will focus on GitHub.

GitHub is a site that can remotely host your Git repositories. By putting your repository onto GitHub, you get a backup of the repository, a way to collaborate with others, and a lot of other features.

Practical Git Techniques
~~~~~~~~~~~~~~~~~~~~~~~~~

Useful GitHub Features
~~~~~~~~~~~~~~~~~~~~~~~~~

..
.. note:: Git is not really for storing or manipulating data, especially large files. But the `CyVerse Discovery Environment <https://de.cyverse.org/de/>`_ is a great place to serve, store, and share data.

------

.. |Github Repo Link|  raw:: html

   <a href="FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX" target="blank">Github Repo Link</a>
