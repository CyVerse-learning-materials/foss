# Template CyVerse Workshop Repo
**README Version 2.0, May 2020**

You should import this repo to build CyVerse Platform/Service Guides

**See what this template looks like [rendered on ReadTheDocs](https://cyverse-cyverse-workshop-template.readthedocs-hosted.com/en/latest/)**
## How CyVerse Learning Center documentation is built

Each piece of CyVerse Learning Center has its own [ReadtheDocs](https://readthedocs.com/)
page which in turn is built from its own GitHub repo (see the template repos at [https://github.com/CyVerse-learning-materials](https://github.com/CyVerse-learning-materials)).
Starting from a
[ResStructured text file](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html)
(index.rst) The documentation is built using
[Sphinx](http://www.sphinx-doc.org/en/1.4.8/),
and hosted on a repo configured with GitHub
[Webhooks/Services](http://docs.readthedocs.io/en/latest/webhooks.html).
Finally, the site is added to the CyVerse ReadtheDocs account. Directions for completing this
workflow are below **(see Building a Tutorial from Scratch)**.

## Documentation types

- **Manuals -** A Manual is a more comprehensive documentation piece on a CyVerse
  platform or software product.
   - Written by: CyVerse Staff, with community contributions welcome
- **Platform Guide -** A Platform Guide is a slightly modified form of tutorial
  that covers an entire platform or service.
   - Written by: CyVerse Staff, with community contributions welcome
- **Quick Starts -** These materials are short tutorials that cover the minimal
  amount of information needed to complete an **operational task** (e.g.
  uploading data, reformatting a file, etc. ); there is no significant
  explanation of the science or interpretation of results. Quick Starts highlight
  available resources, answer common questions,
  and refer users to the most appropriate materials.
   - Written by: CyVerse Staff or community members
- **Tutorials -** Tutorials teach. Users should be able to follow an example
  dataset through the steps of a tutorial and gain understanding about what is
  happening along those steps. These are in-depth guides that usually address a
  scientific question by covering the major steps of a scientific workflow.
  A tutorial is ‘successful’ when a user is able to follow the tutorial a
  second time with their own data and obtain reasonable results.
  - Written by: CyVerse Staff or community members
- **Workshops -** Workshops also teach. This template is designed for teaching
  (either in-person or online) users a variety of topics under a common theme.
  Users should be able to follow a collection of tutorials and quickstarts
  and gain understanding about what is happening along those steps.
  These are in-depth guides that usually address a scientific question by
  covering the major steps of a scientific workflow.
  A workshop is ‘successful’ when a user is able to follow the different topics
  and think they have met the expected outcomes of the workshop.
  - Written by: CyVerse Staff or community members

**Examples of when to use what type of template:**

- Uploading a file: Quick Start
- Cleaning FastQ reads: Quick Start
- Basic introduction to an app: Quick Start
- Assembling a transcriptome using multiple apps and explaining the science: Tutorial
- An intro to the Discovery Environment: Platform Guide
- Comprehensive listing of all the basic functionalities of Discovery Environment: Manual
- Teaching your own version of a camp: Workshop


## What this repo contains

|Item|Description|Notes|
|----|-----------|-----|
|`index.rst`|This is the homepage of your documentation. It list the title and goal of the documentation, lists a maintainer, and usually indicates what prerequisite platforms, files, and services are needed to complete the tutorial||
|`step1.rst`|If documentation has more than one page, use this for the second and subsequent pages|Copy as needed for additional pages|
|`/img`|Place images for your tutorials here|CyVerse logos and other useful images are already here|
|`example_directives_delete.rst`|Example page with code for common restructured text objects|**Delete** this page before publishing your materials|
|`cyverse_rst_defined_substitutions.txt`|Restructured text substitutions for common URLs and images||
|`custom_urls.txt`|Place URLs particular to your repository here in a single page, suing restructured text substitutions to create hyperlinks|Be sure any documentation page referring to this one has the directive `.. include:: custom_urls.txt` |
|`conf.py` and `/misc/cyverse_sphinx_conf.py`|Edit the tutorial and author name; versioning||
|README.md|These instructions|**Delete** before publishing your documentation|
|`/slides`|Place slides associated with your tutorial here|Version controlled files preferred, PPT acceptable|
|`/misc`|Miscellaneous needed for building documentation| |
|`License.md`|License|This license file applies to all materials created by CyVerse for this documentation|



## Simple contribution instructions

### Reporting an error or issue via GitHub

- Click the 'issues' tab at the top of this GitHub page to let us know about a
  simple mistake such as a typo or missing file.

 OR

- Send an email to the maintainer  listed in the documentation or [Tutorials@CyVerse.org](mailto:tutorials@cyverse.org)

## More complex contributions

### Fixing and/or improving documentation via GitHub

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repo to your
   GitHub account
2. Make desired edits. For very significant changes (we suggest
   [making a new branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)).
3. Commit change; if working from a local copy, push those changes to your fork
   in Github.
4. Submit a pull request back to the master repository; you may need to act on
   feedback before your request is merged.


## Building Documentation from Scratch

**You will need the following accounts**

1. GitHub account - makes it possible to collaborate on the documentation:
    - https://github.com/

### Obtaining the template

1. Choose one of the template repositories at https://github.com/CyVerse-learning-materials/
   (these are pinned at the top of this page). Click the **Use this template**
   button. Name your repo for the name of your documentation e.g.
   *'name_tutorial'*. You may choose public or private. There is no need to
   include all branches (leave unchecked).

2. Once you have a new repo made from the template, clone this new repo
   to your local machine for editing.

        $git clone MY-TUTORIAL

### Authoring tools (local install)

In order to build our documentation you can install the authoring tools or
skip this section and use the Docker container we have built.

**You will need the following software**

1. Python (3.7 or later) - This is required for the Sphinx package that will
   build our documentation:
    - https://www.python.org/downloads/
2. If needed, install pip:
    - https://packaging.python.org/installing/#install-pip-setuptools-and-wheel
3. Sphinx - This will build our tutorials into HTML and other formats (this uses
   the Python package installer 'pip' so Python must be installed first); we
   will also install the theme we need for our documentation

   **Note** You can use the [`minimal_requirements.txt`](https://raw.githubusercontent.com/CyVerse-learning-materials/learning-center-2.0-release/master/readthedocstools/minimal_requirements.txt) in /readthedocstools to
   install these requirements. If you run into problems try this with
   the whole [`requirements.txt`](https://raw.githubusercontent.com/CyVerse-learning-materials/learning-center-2.0-release/master/readthedocstools/requirements.txt) - both of which are in the
   [learning-center-2.0-release](https://github.com/CyVerse-learning-materials/learning-center-2.0-release)
   repo (see `/readthedocstools` in that repo).

        $ pip3 install -r /readthedocstools/minimal_requirements.txt

4. git - We use git to version control our documentation and manage with GitHub
    - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

#### Editing the template

1. Edit the **index.rst** and other files as needed. Save images or other files
   in the appropriate directories. **See the recommended style guide in the template.**

2. Since tutorials will likely span multiple pages, you can copy internal pages
   page as many times as needed. Update the table of contents at the top of the
   'index.rst' accordingly. We will have **only documentation piece per repo.**

3. Save your work such as:
    - individual pages (e.g. `index.rst`, `step2.rst`)
    - images (as `.png` files in the  the `/img` folder)
    - changes or additions to `cyverse_rst_defined_substitutions.txt` and
      `custom_urls.txt`

4. Edit the `conf.py` and `/misc/cyverse_sphinx_conf.py` files to set the
   project and author information

5. Build the tutorial:

     ````
        $ make html
     ````
    Alternatively you can make an automatically building previewing using this
    command

      ````
         $ sphinx-autobuild -b html --host 0.0.0.0 --port 8000 --poll . _build_html
      ````

6. Your HTML site will be in the `_build_html` or `_build` directory that has
   been created (you can preview this in your web browser at this time).

7. Commit your changes and push the tutorial back to GitHub.


### Authoring tools (Docker)

For your convenience, all of the documentation software has been packed in
a Docker container.

1. If needed, install Docker (See [Get Docker](https://docs.docker.com/get-docker/))
   then pull the Docker image:

     ````
        $ docker pull jasonjwilliamsny/cyverse-learning-materials-tools:1.0
     ````

2. Run the container interactively (`-it`). Map port 8000 inside the container to
   port 8000 outside (`-p 8000:8000`) and use the volume command (`-v`) to
   mount the container to a directory of your choice. This directory should be
   the place where you cloned your repo in step 1 of this section.  You will
   need to be able to open files using a web browser and use a text editor to
   edit files.

     ````
        $ docker run -it -p 8000:8000 -v LOCALDIRECTORY:/DOCKERDOCUMENTATION jasonjwilliamsny/cyverse-learning-materials-tools:1.0
     ````
4. From inside the Docker container bash terminal, navigate to the
   mounted directory (e.g. `DOCKERDOCUMENTATION`). You should see your cloned
   repository there. You can now follow the steps in the
   `Obtaining the template` section with the following modifications:

   - To preview your documentation, from **inside the docker container** use the
     following command to view build and preview your documentation. **NOTE**
     this command will only work if you are in the same directory as your
     documentation repository and you are **inside the docker container shell**.

     ````
         $ sphinx-autobuild -b html --host 0.0.0.0 --port 8000 --poll . _build_html
     ````

      You documentation should be served at http://0.0.0.0:8000. Open a web
      browser on your computer to see the preview. As you make changes
      to the documentation, the browser should automatically update within
      a few seconds of making the change.

5. Follow the directions in the "Editing the template" section above.

## Wrapping up and hosting documentation in the Learning Center

Once you have built your documentation, notify
[Tutorials@CyVerse.org](mailto:Tutorials@CyVerse.org) that your tutorial is
ready for inclusion in the main CyVerse documentation repo. We will review and
verify the contribution, and add you as a maintainer repo in the CyVerse
collection. Alternatively, you can host your tutorial independently on
ReadTheDocs following their
[instructions for importing documentation](https://docs.readthedocs.io/en/latest/getting_started.html#import-your-docs). We will also follow up about ensuring test data associated with the
documentation are available and open.

### Documentation Style Guide

*General Principles*

- Write instructions in short numbered steps
- Where possible limit step to one action; small final actions such as
  'press submit' should be separated by a semicolon
- Limit the use of screenshots; where they are needed, use ReStructured text
  directives for [substitution of images](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#substitution-definitions)
- Use the *'raw ::html'* directive to enter hyperlinks so that they will open
  in a new tab. See each repo for an example of the code
- Example data associated with documentation should be anonymously available on
  CyVerse Data Commons (Tutorials@cyverse.org can help you with this)
- Discovery Environment applications should be directly linked to documentation
  (clicking the 'info' button on any application will give you the 'App URL')
- Atmosphere images should be directly linked to documentation
  (e.g. "atmo.cyverse.org/application/images/####"

*Specific examples*

|Instruction|Example|
|-----------|-------|
|Steps generally begin with a verb or preposition|<ul><li>Click on the button<li>Under the "Result" menu</ul>|
|Locations of files are given in absolute paths|<ul><li>/dir1/dir2/file.extension</ul>|
|Top-level menus in Discovery Environment Apps in double quotes|<ul><li>Under "Input" select...</ul>|
|Subheadings/steps in Discovery Environment Apps in single quotes|<ul><li>For 'sensitivity' enter...</ul>|
|Buttons and keywords in bold|<ul><li>Click on **Apps**<li>Select **Arabidopsis**<li>Set 'sensitivity' to **Medium**</ul>|

## Sample and test data for Learning Center materials

**ALL** materials with sample or test data on the Learning Center should be  
available with anonymous/public read access at /iplant/home/shared/cyverse_training

````
/iplant/home/shared/cyverse_training:
  C- /iplant/home/shared/cyverse_training/classrooms
  C- /iplant/home/shared/cyverse_training/cyverse_austria_training
  C- /iplant/home/shared/cyverse_training/datasets
  C- /iplant/home/shared/cyverse_training/example
  C- /iplant/home/shared/cyverse_training/manuals
  C- /iplant/home/shared/cyverse_training/platform_guides
  C- /iplant/home/shared/cyverse_training/quickstarts
  C- /iplant/home/shared/cyverse_training/tutorials
  C- /iplant/home/shared/cyverse_training/workshop_materials
````

In general, data should be in the appropriate `manuals`,`platform_guides`,
`quickstarts`, `tutorials`, or `workshop_materials` folders.
