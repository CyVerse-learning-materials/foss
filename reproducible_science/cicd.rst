.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**CI/CD**
======

Building your own software, data management or workflow management systems requires you to do a significant amount of interpersonnel management, as well as tracking of development.

Software engineers having long suffered under the burden of disorganization and communication with clients, have come up with a framework for developing software and sharing it with their users.

While data science applications have a different audience and intended result, the organizational practices of software developers are a valuable and useful tool to consider integrating into your open science lab group.

**Frequently Used Terms**

- **Continuous Integration:** (CI) is testing automation to check that the application is not broken whenever new commits are integrated into the main branch
- **Continuous Delivery:** (CD) is an extension of 'continuous integration' to make sure that you can release new changes in a sustainable way
- **Continuous Deployment:** a step further than 'continuous delivery', every change that passes all stages of your production pipeline is released
- **Continuous Development:** a process for iterative software development and is an umbrella over several other processes including 'continuous integration', 'continuous testing', 'continuous delivery' and 'continuous deployment'
- **Continuous Testing:** a process of testing and automating software development.
- **Development:** the environment on your computer where you write code
- **DevOps:** **Dev**\elopment and information techology **Op**\erations is the set of practices surrounding CI/CD
- **Production:** environment where users access the final code after all of the updates and testing
- **Stage:**  environment that is as similar to the production environment as can be for final testing

**Continuous Development**
~~~~~~~~~~~~~~~~~

The software developer concept of 'continuous delivery' can be applied to your data science projects and lab.

As we've discussed, version control is an important component of modern software development. Critically, version control can also be used in data science applications and for research project management. There are two dominant forms of project management for continuous delivery in open source software: `Waterfall <https://en.wikipedia.org/wiki/Waterfall_model>`_ and `Agile Scrum <https://en.wikipedia.org/wiki/Agile_software_development>`_.

https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment

**Agile**
"""""""""

Agile development practices involve organizing a team around short term (1-2 week long) 'sprints'. Sprints are organized by `scrum master <https://en.wikipedia.org/wiki/Scrum_(software_development)>`_. Team members are assigned tasks and evaluate their results during sprint reviews and planning sessions.

**Waterfall**
"""""""""

Similar to the common `Gantt chart <https://en.wikipedia.org/wiki/Gantt_chart>`_ a `waterfall model <https://en.wikipedia.org/wiki/Waterfall_model>`_ is a breakdown of project activities into linear sequential phases, where each phase depends on the deliverables of the previous one and corresponds to a specialisation of tasks.


.. note::

   In this workshop, we're working with GitHub, but there are other services, like `GitLab <https://about.gitlab.com/>`_ or `Bitbucket <https://bitbucket.org>`_ which might fit your needs better.

**Continuous Integration**
~~~~~~~~~~~~~~~~~~~~~~

Doing reproducible science requires you to host your code and versioned software used to complete the analysis, in addition to the actual data. GitHub or Gitlab could become the central point supporting your data science lab.

Powerful uses of GitHub include integration with other web services, like container registries (`DockerHub <https://hub.docker.com/>`_), websites (`ReadTheDocs <https://readthedocs.org/>`_, web sites `<https://pages.github.com/>`_), continuous integration (`CircleCI <https://circleci.com>`_, `Jenkins <https://jenkins.io/>`_, `Travis <https://travis-ci.org/>`_), and workflow managers `GitHub Actions <https://github.com/features/actions>`_.

`Continous Integration (CI) <https://en.wikipedia.org/wiki/Continuous_integration>`_ is a practice of checking code repositories (typically a few times a day) to test for changes which may cause failures.

CI can be integrated into either scientific programming workflows or into code development

The most popular CI tools are:

  - `Travis CI <https://travis-ci.org/>`_ - fast, easy to set up, cloud based
  - `Circle CI <https://circleci.com/>`_ - fast, easy to set up, cloud based
  - `Jenkins <https://jenkins.io/>`_ - free, can be hosted internally (requires server), highly customizable (plugins)

**When to use CI?**
"""""""""

 * building or hosting services to a community
 * developing versioned copies of containers for public consumption
 * DevOps + Data Science

**Travis CI**
"""""""""

`Setup <https://docs.travis-ci.com/user/tutorial/>`_

**Circle CI**
"""""""""

`Setup <https://circleci.com/docs/enterprise/quick-start/>`_

**Jenkins**
"""""""""

Jenkins is a bit harder to set up because you need a dedicated server

`Setup <https://jenkins.io/doc/book/installing/>`_

**GitHub Actions**
"""""""""

GitHub now offers 'actions' which serve as an `integrated CI for your repositories <https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions>`_

**Badges**
~~~~~~~~~

Status badges can be embedded in a README.md. Badges let you show the state of code or documentation.

You can view a diverse list of different badges on `Shields.io <https://shields.io/>`_

*Different Badge Styles*
---------

Now you can pass the ``style`` GET argument,
to get custom styled badges same as you would for shields.io.
If no argument is passed, ``flat`` is used as default.

+---------------+---------------------+
| STYLE         | BADGE               |
+===============+=====================+
| flat          | |Flat Badge|        |
+---------------+---------------------+
| flat-square   | |Flat-Square Badge| |
+---------------+---------------------+
| for-the-badge | |Badge|             |
+---------------+---------------------+
| plastic       | |Plastic Badge|     |
+---------------+---------------------+
| social        | |Social Badge|      |
+---------------+---------------------+

.. |Flat Badge| image:: https://readthedocs.org/projects/pip/badge/?version=latest&style=flat
.. |Flat-Square Badge| image:: https://readthedocs.org/projects/pip/badge/?version=latest&style=flat-square
.. |Badge| image:: https://readthedocs.org/projects/pip/badge/?version=latest&style=for-the-badge
.. |Plastic Badge| image:: https://readthedocs.org/projects/pip/badge/?version=latest&style=plastic
.. |Social Badge| image:: https://readthedocs.org/projects/pip/badge/?version=latest&style=social


**Self paced**
~~~~~~~~~~

`Circle vs Jenkins vs Travis <https://stackshare.io/stackups/circleci-vs-jenkins-vs-travis-ci>`_


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

   <a href="https://github.com/CyVerse-learning-materials/foss-2020/tree/master/reproducible_science/version_control.rst" target="blank">Github Repo Link</a>
