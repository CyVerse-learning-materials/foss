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

**Continuous Integration** ======================

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

**When to use CI?**

> -   building or hosting services to a community
> -   developing versioned copies of containers for public consumption
> -   DevOps + Data Science

**Travis CI** \~\~\~\~\~\~\~\~\~\~

[Setup](https://docs.travis-ci.com/user/tutorial/)

**Circle CI** \~\~\~\~\~\~\~\~\~\~

[Setup](https://circleci.com/docs/enterprise/quick-start/)

**Jenkins** \~\~\~\~\~\~\~\~\~\~

Jenkins is a bit harder to set up because you need a dedicated server

[Setup](https://jenkins.io/doc/book/installing/)

**GitHub Actions** \~\~\~\~\~\~\~\~\~\~\~\~

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

> \# Use this example to ensure that links open in new tabs, avoiding \#
> forcing users to leave the document, and making it easy to update
> links \# In a single place in this document
>
> > \<a href=\"REPLACE_THIS_WITH_URL\"
> > target=\"blank\"\>Replace_with_text\</a\>

> \<a
> href=\"<https://github.com/CyVerse-learning-materials/foss-2019/tree/master/getting_started/intro.rst>\"
> target=\"blank\"\>Github Repo Link\</a\>
