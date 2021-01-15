.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo2|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**CyVerse Data Store**
-------------

.. #### Comment: Data Store usage outside the DE and Data Commons

|DS_icon|

The Data Store is more than  a place to save your files -- it is a way to manage the life cycle of your data. From creation to publication to beyond, there are a number of practices to ensure that the integrity and value of your data are maintained. 

We have already covered accessing the Data Store using the Discovery Environment in the `previous lesson <./de.rst>`_. In this lesson we will practice other ways of accessing the Data Store, plus how to make your data publicly available.

iCommands
===========
iCommands is a collection of tools developed by the `iRODS project <https://irods.org/>`_, which is the technology that supports the CyVerse Data Store. Using iCommands is the most flexible way to interact with the Data Store.

iCommands provides command line access to the Data Store, so it can be included in scripts to automate data upload and download. Unfortunately, the latest iCommands cannot be installed on most Windows operating systems, but participants with Windows computers can do this exercise using Atmosphere (which will be covered in tomorrow's lessons). If you are running Window 10, you can `run iCommands on the Linus subsystem <https://wiki.cyverse.org/wiki/display/DS/Setting+Up+iCommands#SettingUpiCommands-other>`_.

.. #### Comment: Instructers launch Atmosphere for anyone with a Windows computer

Follow along with the `Using iCommands <https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step2.html>`_ quick start to:

 - Install and configure iCommands
 - Upload a file to your home folder (iput)
 - Download a file to your desktop (iget)
 
In addition, we will use iCommands to:
 - Create a new folder in your home directory (imkdir) 
 - Move a file from your home directory to the new folder (imv)
 - Navigate to a public folder (icd)
 - Copy a public file to the newly created folder (icp)

.. code-block:: bash

    $ imkdir newdir
    $ imv file_name newdir/file_name
    $ icd /iplant/home/shared/imicrobe/camera
    $ ils
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

CyVerse Data Commons
========================

The Data Commons provides services throughout CyVerse to manage, organize, preserve, publish, discover, and reuse data.

Data Publication
~~~~~~~~~~~~~~~~~

Through the Data Commons, you can submit data directly to `NCBI's SRA <https://learning.cyverse.org/projects/sra_submission_quickstart/en/latest/index.html>`_ or `WGS <https://wiki.cyverse.org/wiki/pages/viewpage.action?pageId=34834057>`_, or `request a Digital Object Identifier (DOI) <https://cyverse-doi-request-quickstart.readthedocs-hosted.com/en/latest/>`_ for your dataset.

For data that are not stable or permanent, you can request a `Community Released Folder <https://wiki.cyverse.org/wiki/display/DC/Preparing+Community+Released+Data+Folders>`_.

For an overview see `Publishing data on the CyVerse Data Commons <https://wiki.cyverse.org/wiki/display/DC/Publishing+Data+through+the+Data+Commons>`_.

Advanced Metadata Usage
~~~~~~~~~~~~~~~~~~~~~

The Data Commons provides advanced metadata features in the Discovery Environment, including:

- `metadata templates <https://wiki.cyverse.org/wiki/display/DEmanual/Using+Metadata+in+the+DE#UsingMetadataintheDE-Usingmetadatatemplates>`_ 

Exercise: 
- Open the DE
- Apply the DOI request template to a folder.
- Apply an ontology term to a file or folder.


- `bulk metadata application <https://wiki.cyverse.org/wiki/display/DEmanual/Using+Metadata+in+the+DE#UsingMetadataintheDE-Addingbulkmetadatatomultiplefilesorfolders>`_

Exercise:
- Copy the B123 file to your home directory

.. code-block:: bash

    $ icd /iplant/home/$username
    $ icp -r /iplant/home/rwalls/B123 B123
    $ ils

- In the DE apply the DE apply metadata to the contents of B123
	- Browse to B123
	- View the metadata for one of the files using the *Metadata* menu or the three dots (it should be black)
	- View the contents of the file ``Rice_metadata.csv``
	- Browse back to your home directory
	- Check the box next to any directory
	- Select *Metadata* > *Apply Bulk Metadata*
	- Select the file B123/Rice_metadata.csv
	- Browse back to B123
	- View the metadata of the different files in the directory

Additional Resources
==================
`Data Store Manual <https://wiki.cyverse.org/wiki/display/DS/Data+Store+Table+of+Contents>`_

`Create a public link via the DE <https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step4.html>`_

`WebDav <https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step5.html>`_

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

   <a href="https://github.com/CyVerse-learning-materials/foss-2019/tree/master/CyVerse/data_store.rst" target="blank">Github Repo Link</a>
