.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**Websites & Documentation**
============================

This website is rendered using a `ReadTheDocs.org <https://readthedocs.org/>`_ template. Think of RTD as "Continuous Documentation".

ReadTheDocs has become a popular tool for developing web-based documentation. `CyVerse Learning Materials Github <https://github.com/CyVerse-learning-materials>`_ hosts a few templates which you can view and pull for your own use.

`Bookdown <https://bookdown.org/>`_  is an open-source R package that facilitates writing books and long-form articles/reports with R Markdown.

`GitHub Pages <https://pages.github.com/>`_ using `Jekyll <https://jekyllrb.com/>`_ or `Bootstrap.js <https://getbootstrap.com/>`_, are another popular way of hosting websites via GitHub.

`Confluence Wikis (CyVerse) <https://wiki.cyverse.org>`_ are another tool for documenting your workflow.

.. #### Comment: short description

*Some things to remember*
----------------------

*Open Science Framework*
~~~~~~~~~~~~~~~~~~~~~~~~~

- Provides tools via `osf.io <https://osf.io/>`_ for free
- Can be directly linked to your ORCID
- Integrated project management tools
- Uses templates to create a project website
- Can publish preprints from within project management tools


*ReadTheDocs*
~~~~~~~~~~~

- publishing websites via `ReadTheDocs.com <https://readthedocs.com/dashboard/>`_ costs money.
- You can work in an offline state, where you develop the materials and publish them to your localhost using `Sphinx <https://docs.readthedocs.io/en/stable/intro/getting-started-with-sphinx.html>`_
- You can work on a website template in a GitHub repository, and pushes are updated in near real time using ReadTheDocs.com.

*Bookdown*
~~~~~~~~~

- Bookdown websites can be hosted by `RStudio Connect <https://www.rstudio.com/products/connect/>`_
- You can publish a Bookdown website using `Github Pages <https://github.blog/2016-08-17-simpler-github-pages-publishing/>`_

*GitHub Pages*
~~~~~~~~~~~~~

- You can pull templates from other GitHub users for your website, e.g. `jekyll themes <http://themes.jekyllrc.org/>`_
- GitHub pages are free, fast, and easy to build, but limited in use of subdomain or URLs.



**Websites to Host Methods & Protocols**
-----------------------------------------

`Protocols.io <https://www.protocols.io/>`_ - collaborative platform and preprint server for: science methods, computational workflows, clinical trials, operational procedures, safety checklists, and instructions / manuals.

`QUBES <https://qubeshub.org/>`_ - community of math and biology educators who share resources and methods for preparing students to tackle real, complex, biological problems.



**Build your own Website**
--------------------------


*ReadTheDocs*
~~~~~~~~~~~~~

  1. `Install <https://docs.readthedocs.io/en/stable/install.html>`_

  2. `Use Github <https://github.com/rtfd/readthedocs.org>`_

  3. `Create a ReadTheDocs account <https://readthedocs.org/accounts/signup/>`_


*Bookdown*
~~~~~~~~~~

   1. `Install R and RStudio <https://www.rstudio.com/products/rstudio/download/>`_

   2. Install Bookdown package

   .. code-block:: bash

      install.packages("bookdown", dependencies=TRUE)

   3. Open the Bookdown demo and get started

*GitHub Pages*
~~~~~~~~~~~~~~

   1. Create a GitHub account

   2. Clone the repo ``https://github.com/username/username.github.io``

   3. Create an ``index.html``

   4. Push it back to GitHub


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

   <a href="https://github.com/CyVerse-learning-materials/foss/tree/master/reproducible_science/websites.rst" target="blank">Github Repo Link</a>
