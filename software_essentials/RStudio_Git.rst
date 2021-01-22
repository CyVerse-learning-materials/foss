.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**RStudio with Version Control**
================================

RStudio can be used with Git or SVN. For today's lesson we're going to be using Git with your new GitHub accounts.

.. #### Comment: short description

**Some things to remember about the platform**

- You can pull other GitHub repositories using ``git clone`` via the RStudio terminal.
- Your local commits are not sent to GitHub until you initiate the repository with your GitHub username and password.

----

*Instructions*
~~~~~~~~~~~~~~

  1. Create a GitHub Repository

  2. On your local computer, create a directory called ``~/github`` and change into that directory

  3. Open RStudio and start a new Project: *File > New Project > Version Control > Git*. In the ``repository URL`` paste the URL of your new GitHub repository

  4. Save your new git repository to the newly created ``~/github`` directory.

  5. Open the directory in RStudio and set the project folder as the workspace.

*R Markdown*
~~~~~~~~~~~

  1. Create a new `.Rmd` format file.

  2. Set the parameters (e.g. HTML, PDF, etc)

  3. Create an code block and specify the language, e.g.

.. code:: R
  ```{R, echo=FALSE}

  ```
  ```{bash, echo=FALSE}

  ```
  ```{python, echo=FALSE}

  ```
  4. Run the code block

*Workflow R*
~~~~~~~~~~~

R has `many projects which deal with workflows <https://github.com/jdblischak/r-project-workflows>`_

We're going to talk about the ``workflowr`` and ``drake``

1. Install Packages and depends

.. code::
   install.package(c("workflowr","drake"), dependencies=TRUE)

2. Follow instructions for building a  `workflowr website <https://jdblischak.github.io/workflowr/articles/wflow-01-getting-started.html>`_

3. Follow instructions for building a  `drake <https://ropensci.github.io/drake/>`_ workflow


*Self Paced*
------------

`rOpenSci <https://github.com/ropensci>`_ is a leader in the development of reproducible research. There are hundreds of repositories to explore for examples of research using R.

|CyverseLogo|_ |LearningCenter|_

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

   <a href="https://github.com/CyVerse-learning-materials/foss-2019/tree/master/software_essentials/RStudio_Git.rst" target="blank">Github Repo Link</a>
