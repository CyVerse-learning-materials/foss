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

**Accessing Data Store** \-\-\-\-\-\-\-\-\-\-\-\--

![DS_icon](../img/data_store/datastore-icon.png){width="50px"
height="70px"}

The Data Store is more than a place to save your files \-- it is a way
to manage the life cycle of your data. From creation to publication to
beyond, there are a number of practices to ensure that the integrity and
value of your data are maintained.

In this lesson we will practice other ways of accessing the Data Store,
plus how to make your data publicly available.

# Discovery Environment Interface

DE interface allows uploading and downloading one file at a time. It
works best for transfer of small files \< 2GB.

From the DE interface, go to \"Upload -\> Simple Upload from Desktop\"
to upload a file. For downloading a file go to \"Download -\> Simple
Download\".

``` bash
Sample data for practice
/iplant/home/shared/iplantcollaborative/example_data/FOSS_2020/foss_sampledata
```

# iCommands

iCommands is a collection of tools developed by the [iRODS
project](https://irods.org/), which is the technology that supports the
CyVerse Data Store. Using iCommands is the most flexible way to interact
with the Data Store.

iCommands provides command line access to the Data Store, so it can be
included in scripts to automate data upload and download. Unfortunately,
the latest iCommands cannot be installed on most Windows operating
systems, but participants with Windows computers can do this exercise
using Atmosphere (which will be covered in tomorrow\'s lessons). If you
are running Window 10, you can [run iCommands on the Linux
subsystem](https://wiki.cyverse.org/wiki/display/DS/Setting+Up+iCommands#SettingUpiCommands-other).

Follow along with the [Using
iCommands](https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step2.html)
quick start to:

> -   Install and configure iCommands
> -   Upload a file to your home folder (iput)
> -   Download a file to your desktop (iget)

In addition, we will use iCommands to:

\- Create a new folder in your home directory (imkdir) .. code-block::
bash

> \$ imkdir newdir

\- Move a file from your home directory to the new folder (imv) ..
code-block:: bash

> \$ imv file_name newdir/file_name

-   Navigate to a public folder (icd)

``` bash
$ icd /iplant/home/shared/imicrobe/camera
```

-   List files in a directory

``` bash
$ ils
```

-   Copy a public file to the newly created folder (icp)

``` bash
$ icp camera_projects/CAM_PROJ_AcidMine.csv /iplant/home/$username/newdir/CAM_PROJ_AcidMine.csv
$ icd /iplant/home/$username/
$ils newdir
$ils -A newdir
```

Here is the [full documentation of
iCommands](https://docs.irods.org/master/icommands/user/).

# CyberDuck

Cyberduck is a free 3rd party software tool that allows you to
drag-and-drop files between your local computer (or a remote server) and
the Data Store. Cyberduck can also be used to rename files, and browse
other shared or public Data Store locations.

Follow along with the
[CyberDuck](https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step1.html)
quick start to:

> -   Install and configure CyberDuck
> -   Upload a file to your CyVerse home directory
> -   Navigate to a public folder

# WebDAV

WebDAV is an extension to the HTTP protocol that allows users to
remotely edit and manage files. CyVerse has added support for WebDAV to
the Data Store. This means users can access their home and public
folders in the CyVerse Data Store from their local computers using web
browsers and other WebDAV enabled applications such as common operating
system file managers. With WebDAV, users can copy files between local
computer and the Data Store as easily as if they were copying them
between two folders on their computer.

Follow along with the
[WebDAV](https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step5.html)
quick start to access CyVerse data via WebDAV services.

# Which method to choose?

  Criteria                     Cyberduck              iCommands     DE Interface         DE WebDAV
  ---------------------------- ---------------------- ------------- -------------------- --------------------
  Ease of use                  2                      4             1                    3
  Setup required?              Yes                    Yes           No                   No
  Works best for?              Multiple small files   Large files   Small files \< 2GB   Small files \< 2GB
  GUI support?                 Yes                    No            Yes                  Yes
  Command-line support         Yes                    Yes           No                   Yes
  Allows to open/edit files?   No                     No            Yes                  Yes

------------------------------------------------------------------------

# CyVerse Data Commons

The Data Commons provides services throughout CyVerse to manage,
organize, preserve, publish, discover, and reuse data.

## Data Publication

Through the Data Commons, you can submit data directly to [NCBI\'s
SRA](https://learning.cyverse.org/projects/sra_submission_quickstart/en/latest/index.html)
or
[WGS](https://wiki.cyverse.org/wiki/pages/viewpage.action?pageId=34834057),
or [request a Digital Object Identifier
(DOI)](https://cyverse-doi-request-quickstart.readthedocs-hosted.com/en/latest/)
for your dataset.

For data that are not stable or permanent, you can request a [Community
Released
Folder](https://wiki.cyverse.org/wiki/display/DC/Preparing+Community+Released+Data+Folders).

For an overview see [Publishing data on the CyVerse Data
Commons](https://wiki.cyverse.org/wiki/display/DC/Publishing+Data+through+the+Data+Commons).

Additional Resources ================== [Data Store
Manual](https://wiki.cyverse.org/wiki/display/DS/Data+Store+Table+of+Contents)

[Create a public link via the
DE](https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step4.html)

[DOI request quick
start](https://learning.cyverse.org/projects/cyverse-doi-request-quickstart/en/latest/index.html)

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
> href=\"<https://github.com/CyVerse-learning-materials/foss-2020/tree/master/CyVerse/data_store.rst>\"
> target=\"blank\"\>Github Repo Link\</a\>
