.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**Accessing Data Store**
-------------

.. #### Comment: Data Store usage outside the DE and Data Commons

|DS_icon|

The Data Store is more than a place to save your files -- it is a way to manage the life cycle of your data. From creation to publication to beyond, there are a number of practices to ensure that the integrity and value of your data are maintained.

In this lesson we will practice other ways of accessing the Data Store, plus how to make your data publicly available.

Discovery Environment Interface
================================
DE interface allows uploading and downloading one file at a time. It works best for transfer of small files < 2GB.

From the DE interface, go to "Upload -> Simple Upload from Desktop" to upload a file. For downloading a file go to "Download -> Simple Download".

.. code-block:: bash

    Sample data for practice
    /iplant/home/shared/iplantcollaborative/example_data/FOSS_2020/foss_sampledata

iCommands
===========
iCommands is a collection of tools developed by the `iRODS project <https://irods.org/>`_, which is the technology that supports the CyVerse Data Store. Using iCommands is the most flexible way to interact with the Data Store.

iCommands provides command line access to the Data Store, so it can be included in scripts to automate data upload and download. Unfortunately, the latest iCommands cannot be installed on most Windows operating systems, but participants with Windows computers can do this exercise using Atmosphere (which will be covered in tomorrow's lessons). If you are running Window 10, you can `run iCommands on the Linux subsystem <https://wiki.cyverse.org/wiki/display/DS/Setting+Up+iCommands#SettingUpiCommands-other>`_.

.. #### Comment: Instructers launch Atmosphere for anyone with a Windows computer

Follow along with the `Using iCommands <https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step2.html>`_ quick start to:

 - Install and configure iCommands
 - Upload a file to your home folder (iput)
 - Download a file to your desktop (iget)

In addition, we will use iCommands to:

- Create a new folder in your home directory (imkdir)
.. code-block:: bash

    $ imkdir newdir

- Move a file from your home directory to the new folder (imv)
.. code-block:: bash

    $ imv file_name newdir/file_name

- Navigate to a public folder (icd)

.. code-block:: bash

    $ icd /iplant/home/shared/imicrobe/camera

- List files in a directory

.. code-block:: bash

    $ ils

- Copy a public file to the newly created folder (icp)

.. code-block:: bash

    $ icp camera_projects/CAM_PROJ_AcidMine.csv /iplant/home/$username/newdir/CAM_PROJ_AcidMine.csv
    $ icd /iplant/home/$username/
    $ils newdir
    $ils -A newdir

Here is the `full documentation of iCommands <https://docs.irods.org/master/icommands/user/>`_.

CyberDuck
==========
Cyberduck is a free 3rd party software tool that allows you to drag-and-drop files between your local computer (or a remote server) and the Data Store. Cyberduck can also be used to rename files, and browse other shared or public Data Store locations.

Follow along with the `CyberDuck <https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step1.html>`_ quick start to:

 - Install and configure CyberDuck
 - Upload a file to your CyVerse home directory
 - Navigate to a public folder

WebDAV
=======

WebDAV is an extension to the HTTP protocol that allows users to remotely edit and manage files. CyVerse has added support for WebDAV to the Data Store. This means users can access their home and public folders in the CyVerse Data Store from their local computers using web browsers and other WebDAV enabled applications such as common operating system file managers. With WebDAV, users can copy files between local computer and the Data Store as easily as if they were copying them between two folders on their computer.

Follow along with the `WebDAV <https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step5.html>`_ quick start to access CyVerse data via WebDAV services.

Which method to choose?
========================
.. list-table::
    :header-rows: 1

    * - Criteria
      - Cyberduck
      - iCommands
      - DE Interface
      - DE WebDAV
    * - Ease of use
      - 2
      - 4
      - 1
      - 3
    * - Setup required?
      - Yes
      - Yes
      - No
      - No
    * - Works best for?
      - Multiple small files
      - Large files
      - Small files < 2GB
      - Small files < 2GB
    * - GUI support?
      - Yes
      - No
      - Yes
      - Yes
    * - Command-line support
      - Yes
      - Yes
      - No
      - Yes
    * - Allows to open/edit files?
      - No
      - No
      - Yes
      - Yes
----

CyVerse Data Commons
========================

The Data Commons provides services throughout CyVerse to manage, organize, preserve, publish, discover, and reuse data.

Data Publication
~~~~~~~~~~~~~~~~~

Through the Data Commons, you can submit data directly to `NCBI's SRA <https://learning.cyverse.org/projects/sra_submission_quickstart/en/latest/index.html>`_ or `WGS <https://wiki.cyverse.org/wiki/pages/viewpage.action?pageId=34834057>`_, or `request a Digital Object Identifier (DOI) <https://cyverse-doi-request-quickstart.readthedocs-hosted.com/en/latest/>`_ for your dataset.

For data that are not stable or permanent, you can request a `Community Released Folder <https://wiki.cyverse.org/wiki/display/DC/Preparing+Community+Released+Data+Folders>`_.

For an overview see `Publishing data on the CyVerse Data Commons <https://wiki.cyverse.org/wiki/display/DC/Publishing+Data+through+the+Data+Commons>`_.



Additional Resources
==================
`Data Store Manual <https://wiki.cyverse.org/wiki/display/DS/Data+Store+Table+of+Contents>`_

`Create a public link via the DE <https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step4.html>`_

.. #### Comment: Scripting with iCommands

`DOI request quick start <https://learning.cyverse.org/projects/cyverse-doi-request-quickstart/en/latest/index.html>`_

----

**Fix or improve this documentation:**

- On Github: |Github Repo Link|
- Send feedback: `Tutorials@CyVerse.org <Tutorials@CyVerse.org>`_

----


.. Comment: Place Images Below This Line
   use :width: to give a desired width for your image
   use :height: to give a desired height for your image
   replace the image name/location and URL if hyperlinked


 .. |Clickable hyperlinked image| image:: ./img/IMAGENAME.png
    :width: 500
    :height: 100
 .. _CyVerse logo: http://learning.cyverse.org/

.. |DS_icon| image:: ../img/data_store/datastore-icon.png
    :width: 50
    :height: 70


.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss-2020/tree/master/CyVerse/data_store.rst" target="blank">Github Repo Link</a>
