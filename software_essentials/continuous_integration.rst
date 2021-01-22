.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_


**Continuous Integration**
======================

`Continous Integration (CI) <https://en.wikipedia.org/wiki/Continuous_integration>`_ is a practice of checking code repositories (typically a few times a day) to test for changes which may cause failures.

CI can be integrated into either scientific programming workflows or into code development

The most popular CI tools are:

  - `Travis CI <https://travis-ci.org/>`_ - fast, easy to set up, cloud based
  - `Circle CI <https://circleci.com/>`_ - fast, easy to set up, cloud based
  - `Jenkins <https://jenkins.io/>`_ - free, can be hosted internally (requires server), highly customizable (plugins)

**When to use CI?**

 * building or hosting services to a community
 * developing versioned copies of containers for public consumption
 * DevOps + Data Science

**Travis CI**
~~~~~~~~~~

`Setup <https://docs.travis-ci.com/user/tutorial/>`_

**Circle CI**
~~~~~~~~~~

`Setup <https://circleci.com/docs/enterprise/quick-start/>`_

**Jenkins**
~~~~~~~~~~

Jenkins is a bit harder to set up because you need a dedicated server

`Setup <https://jenkins.io/doc/book/installing/>`_

**GitHub Actions**
~~~~~~~~~~~~

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

----

**Fix or improve this documentation:**

- On Github: |Github Repo Link|
- Send feedback: `Tutorials@CyVerse.org <Tutorials@CyVerse.org>`_


.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss-2019/tree/master/getting_started/intro.rst" target="blank">Github Repo Link</a>
