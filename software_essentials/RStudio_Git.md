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

# **RStudio with Version Control**

RStudio can be used with Git or SVN. For today\'s lesson we\'re going to
be using Git with your new GitHub accounts.

**Some things to remember about the platform**

-   You can pull other GitHub repositories using `git clone` via the
    RStudio terminal.
-   Your local commits are not sent to GitHub until you initiate the
    repository with your GitHub username and password.

------------------------------------------------------------------------

## *Instructions*

> 1.  Create a GitHub Repository
> 2.  On your local computer, create a directory called `~/github` and
>     change into that directory
> 3.  Open RStudio and start a new Project: *File \> New Project \>
>     Version Control \> Git*. In the `repository URL` paste the URL of
>     your new GitHub repository
> 4.  Save your new git repository to the newly created `~/github`
>     directory.
> 5.  Open the directory in RStudio and set the project folder as the
>     workspace.

*R Markdown* \~\~\~\~\~\~\~\~\~\~\~

> 1.  Create a new [.Rmd]{.title-ref} format file.
> 2.  Set the parameters (e.g. HTML, PDF, etc)
> 3.  Create an code block and specify the language, e.g.

```` R
```{R, echo=FALSE}
```
```{bash, echo=FALSE}

```
```{python, echo=FALSE}

```
4. Run the code block
````

*Workflow R* \~\~\~\~\~\~\~\~\~\~\~

R has [many projects which deal with
workflows](https://github.com/jdblischak/r-project-workflows)

We\'re going to talk about the `workflowr` and `drake`

1.  Install Packages and depends

``` install.package(c("workflowr","drake"), dependencies=TRUE)
```

2.  Follow instructions for building a [workflowr
    website](https://jdblischak.github.io/workflowr/articles/wflow-01-getting-started.html)
3.  Follow instructions for building a
    [drake](https://ropensci.github.io/drake/) workflow

### *Self Paced*

[rOpenSci](https://github.com/ropensci) is a leader in the development
of reproducible research. There are hundreds of repositories to explore
for examples of research using R.

\_ \_

------------------------------------------------------------------------

**Fix or improve this documentation:**

-   On Github:

\- Send feedback: [Tutorials@CyVerse.org](Tutorials@CyVerse.org) \-\-\--

> \# Use this example to ensure that links open in new tabs, avoiding \#
> forcing users to leave the document, and making it easy to update
> links \# In a single place in this document
>
> > \<a href=\"REPLACE_THIS_WITH_URL\"
> > target=\"blank\"\>Replace_with_text\</a\>

> \<a
> href=\"<https://github.com/CyVerse-learning-materials/foss-2019/tree/master/software_essentials/RStudio_Git.rst>\"
> target=\"blank\"\>Github Repo Link\</a\>
