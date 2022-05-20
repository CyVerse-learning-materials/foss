> \<a href=\"<https://atmo.cyverse.org>\"
> target=\"blank\"\>Atmosphere\</a\>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/atmman/Atmosphere+Manual+Table+of+Contents>\"
> target=\"blank\"\>Atmosphere Manual\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/atmosphere-guide/en/latest/>\"
> target=\"blank\"\>Atmosphere Guide\</a\>

> \<a href=\"<https://bisque.cyverse.org/client_service/>\"
> target=\"blank\"\>BisQue\</a\>

> \<a href=\"<https://wiki.cyverse.org/wiki/display/BIS>\"
> target=\"blank\"\>BisQue Manual\</a\>

> \<a href=\"<https://user.cyverse.org/>\" target=\"\_blank\"\>CyVerse
> User Portal\</a\>

> \<a href=\"<http://learning.cyverse.org>\" target=\"blank\"\>CyVerse
> Learning Center\</a\>

> \<a href=\"<https://wiki.cyverse.org>\" target=\"blank\"\>CyVerse
> Wiki\</a\>

> \<a href=\"<http://www.cyverse.org/data-store>\"
> target=\"\_blank\"\>Data Store\</a\>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/DS/Data+Store+Table+of+Contents>\"
> target=\"blank\"\>Data Store Manual\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/data_store_guide/en/latest/>\"
> target=\"blank\"\>Data Store Guide\</a\>

> \<a href=\"<https://de.cyverse.org/de/>\" target=\"blank\"\>Discovery
> Environment\</a\>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/DEmanual/Table+of+Contents>\"
> target=\"blank\"\>DE Manual\</a\>

> \<a
> href=\"<http://learning.cyverse.org/projects/cyverse-discovery-environment-guide/>\"
> target=\"blank\"\>Discovery Environment Guide\</a\>

> \<a href=\"<https://dnasubway.cyverse.org/>\" target=\"blank\"\>DNA
> Subway\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/dnasubway_guide/en/latest/>\"
> target=\"blank\"\>DNA Subway Manual\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/dnasubway_guide/en/latest/>\"
> target=\"blank\"\>DNA Subway Guide\</a\>

> \<a href=\"<https://www.sciapps.org/>\"
> target=\"blank\"\>SciApps\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/sciapps_guide/en/latest/>\"
> target=\"blank\"\>SciApps Manual\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/sciapps_guide/en/latest/>\"
> target=\"blank\"\>SciApps Guide\</a\>

> \<a href=\"<https://cyverse-de.github.io/api/>\"
> target=\"blank\"\>Terrain DE API Docs\</a\>

> \<a href=\"<https://www.tacc.utexas.edu/tapis>\"
> target=\"blank\"\>Tapis TACC API\</a\>

> \<a href=\"<http://ask.iplantcollaborative.org/questions>\"
> target=\"blank\"\>Ask CyVerse\</a\>

> \<a href=\"<http://learning.cyverse.org/en/latest/>\"
> target=\"blank\"\>Agave Guide\</a\>

> \<a href=\"<http://developer.agaveapi.co/#introduction>\"
> target=\"blank\"\>Agave API\</a\>

> \<a href=\"<https://agaveapi.co>\" target=\"blank\"\>Agave Live
> Docs\</a\>

> \<a href=\"<http://learning.cyverse.org/en/latest/>\"
> target=\"blank\"\>BisQue Guide\</a\>

> \<a href=\"<http://datacommons.cyverse.org/>\" target=\"blank\"\>Data
> Commons\</a\>

\_

\_ [Learning Center Home](http://learning.cyverse.org/)

**CI/CD** ======

Building your own software, data management or workflow management
systems requires you to do a significant amount of interpersonnel
management, as well as tracking of development.

Software engineers having long suffered under the burden of
disorganization and communication with clients, have come up with a
framework for developing software and sharing it with their users.

While data science applications have a different audience and intended
result, the organizational practices of software developers are a
valuable and useful tool to consider integrating into your open science
lab group.

**Frequently Used Terms**

-   **Continuous Integration:** (CI) is testing automation to check that
    the application is not broken whenever new commits are integrated
    into the main branch
-   **Continuous Delivery:** (CD) is an extension of \'continuous
    integration\' to make sure that you can release new changes in a
    sustainable way
-   **Continuous Deployment:** a step further than \'continuous
    delivery\', every change that passes all stages of your production
    pipeline is released
-   **Continuous Development:** a process for iterative software
    development and is an umbrella over several other processes
    including \'continuous integration\', \'continuous testing\',
    \'continuous delivery\' and \'continuous deployment\'
-   **Continuous Testing:** a process of testing and automating software
    development.
-   **Development:** the environment on your computer where you write
    code
-   **DevOps:** **Dev**elopment and information techology **Op**erations
    is the set of practices surrounding CI/CD
-   **Production:** environment where users access the final code after
    all of the updates and testing
-   **Stage:** environment that is as similar to the production
    environment as can be for final testing

**Continuous Development** \~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

The software developer concept of \'continuous delivery\' can be applied
to your data science projects and lab.

As we\'ve discussed, version control is an important component of modern
software development. Critically, version control can also be used in
data science applications and for research project management. There are
two dominant forms of project management for continuous delivery in open
source software:
[Waterfall](https://en.wikipedia.org/wiki/Waterfall_model) and [Agile
Scrum](https://en.wikipedia.org/wiki/Agile_software_development).

<https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment>

# **Agile**

Agile development practices involve organizing a team around short term
(1-2 week long) \'sprints\'. Sprints are organized by [scrum
master](https://en.wikipedia.org/wiki/Scrum_(software_development)).
Team members are assigned tasks and evaluate their results during sprint
reviews and planning sessions.

**Waterfall** \"\"\"\"\"\"\"\"\"

Similar to the common [Gantt
chart](https://en.wikipedia.org/wiki/Gantt_chart) a [waterfall
model](https://en.wikipedia.org/wiki/Waterfall_model) is a breakdown of
project activities into linear sequential phases, where each phase
depends on the deliverables of the previous one and corresponds to a
specialisation of tasks.

::: note
::: title
Note
:::

In this workshop, we\'re working with GitHub, but there are other
services, like [GitLab](https://about.gitlab.com/) or
[Bitbucket](https://bitbucket.org) which might fit your needs better.
:::

**Continuous Integration** \~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

Doing reproducible science requires you to host your code and versioned
software used to complete the analysis, in addition to the actual data.
GitHub or Gitlab could become the central point supporting your data
science lab.

Powerful uses of GitHub include integration with other web services,
like container registries ([DockerHub](https://hub.docker.com/)),
websites ([ReadTheDocs](https://readthedocs.org/), web sites
<https://pages.github.com/>), continuous integration
([CircleCI](https://circleci.com), [Jenkins](https://jenkins.io/),
[Travis](https://travis-ci.org/)), and workflow managers [GitHub
Actions](https://github.com/features/actions).

[Continous Integration
(CI)](https://en.wikipedia.org/wiki/Continuous_integration) is a
practice of checking code repositories (typically a few times a day) to
test for changes which may cause failures.

CI can be integrated into either scientific programming workflows or
into code development

The most popular CI tools are:

> -   [Travis CI](https://travis-ci.org/) - fast, easy to set up, cloud
>     based
> -   [Circle CI](https://circleci.com/) - fast, easy to set up, cloud
>     based
> -   [Jenkins](https://jenkins.io/) - free, can be hosted internally
>     (requires server), highly customizable (plugins)

**When to use CI?** \"\"\"\"\"\"\"\"\"

> -   building or hosting services to a community
> -   developing versioned copies of containers for public consumption
> -   DevOps + Data Science

**Travis CI** \"\"\"\"\"\"\"\"\"

[Setup](https://docs.travis-ci.com/user/tutorial/)

**Circle CI** \"\"\"\"\"\"\"\"\"

[Setup](https://circleci.com/docs/enterprise/quick-start/)

**Jenkins** \"\"\"\"\"\"\"\"\"

Jenkins is a bit harder to set up because you need a dedicated server

[Setup](https://jenkins.io/doc/book/installing/)

**GitHub Actions** \"\"\"\"\"\"\"\"\"

GitHub now offers \'actions\' which serve as an [integrated CI for your
repositories](https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions)

**Badges** \~\~\~\~\~\~\~\~\~

Status badges can be embedded in a README.md. Badges let you show the
state of code or documentation.

You can view a diverse list of different badges on
[Shields.io](https://shields.io/)

*Different Badge Styles* \-\-\-\-\-\-\-\--

Now you can pass the `style` GET argument, to get custom styled badges
same as you would for shields.io. If no argument is passed, `flat` is
used as default.

  ----------------------------------------------------------------------------------------------------------
  STYLE           BADGE
  --------------- ------------------------------------------------------------------------------------------
  flat            ![Flat Badge](https://readthedocs.org/projects/pip/badge/?version=latest&style=flat)

  flat-square     ![Flat-Square
                  Badge](https://readthedocs.org/projects/pip/badge/?version=latest&style=flat-square)

  for-the-badge   ![Badge](https://readthedocs.org/projects/pip/badge/?version=latest&style=for-the-badge)

  plastic         ![Plastic Badge](https://readthedocs.org/projects/pip/badge/?version=latest&style=plastic)

  social          ![Social Badge](https://readthedocs.org/projects/pip/badge/?version=latest&style=social)
  ----------------------------------------------------------------------------------------------------------

**Self paced** \~\~\~\~\~\~\~\~\~\~

[Circle vs Jenkins vs
Travis](https://stackshare.io/stackups/circleci-vs-jenkins-vs-travis-ci)

------------------------------------------------------------------------

**Fix or improve this documentation:**

-   On Github:
-   Send feedback: [Tutorials@CyVerse.org](Tutorials@CyVerse.org)

------------------------------------------------------------------------

> \# Use this example to ensure that links open in new tabs, avoiding \#
> forcing users to leave the document, and making it easy to update
> links \# In a single place in this document
>
> > \<a href=\"REPLACE_THIS_WITH_URL\"
> > target=\"blank\"\>Replace_with_text\</a\>

> \<a
> href=\"<https://github.com/CyVerse-learning-materials/foss-2020/tree/master/reproducible_science/version_control.rst>\"
> target=\"blank\"\>Github Repo Link\</a\>
