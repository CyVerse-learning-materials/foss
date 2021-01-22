.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_


**Discovery Environment - VICE**
========

CyVerse data science workbench, the `Discovery Environment <https://de.cyverse.org/de/>`_, includes a feature called `VICE (Visual Interactive Computing Environment) <https://learning.cyverse.org/projects/vice/en/latest/>`_

VICE uses Docker containers to launch interactive programs, like RStudio, R Shiny Apps, Project Jupyter, Data Mining, and WebGL Applications that can be run in a browser. These programs allow users to interact with their data and do analyses in one place (i.e. view outputs in the same window code is executed). Researchers using VICE can explore their datasets interactively in the Discovery Environment while using the Data Store.

While VICE does require some coding knowledge, it is for anyone who wants to interact with data in an iteritative way.


.. #### Comment: How to launch apps on VICE

**Visual Interactive Computing Environment**

- You can launch existing VICE images from the DE, or integrate your own using the Manage Tools.
- VICE apps are containers, and your data are in the container until you move them off of it. Your results will be saved when the app terminates in your ``/username/analyses`` directory, unless you specify that the app results be saved elsewhere.


----

..
	#### Comment: Suggested style guide:
	1. Steps begin with a verb or preposition: Click on... OR Under the "Results Menu"
	2. Locations of files listed parenthetically, separated by carets, ultimate object in bold
	(Username > analyses > *output*)
	3. Buttons and/or keywords in bold: Click on **Apps** OR select **Arabidopsis**
	4. Primary menu titles in double quotes: Under "Input" choose...
	5. Secondary menu titles or headers in single quotes: For the 'Select Input' option choose...
	####


**Create a VICE app**
~~~~~~~~~~~~~~~~~~~~~~

**1. Find the Docker image of your interactive tool/software of your interest**

We will integrate RStudio as a VICE app in DE. There is a Docker image available for RStudio on Dockerhub.

.. Note::

  If there is no Docker image available for your tool of interest, then you would either find a Dockerfile which you can use to build the Docker image for your tool of interest or create one. You can get more help with either of that from `here <https://learning.cyverse.org/projects/container_camp_workshop_2019/en/latest>`_

**2. Test the Docker image locally on your computer (Optional but recommended)**

This is optional but highly recommended step to confirm that the Docker image for your tool of interest is working as expected.

**2.1 Pull the image from Dockerhub**

.. code-block:: bash

  $ docker pull cyversevice/rstudio-verse:3.6.0

You could also use `Play with Docker <https://labs.play-with-docker.com/>`_, which is a free resource to test and run the Docker container.

**2.2 Sample run**

.. code-block:: bash

  $ sudo docker run --rm -v /$HOME:/app --workdir /app -p 8787:80 -e REDIRECT_URL=YOUR_IP_ADDRESS:8787 cyversevice/rstudio-verse:3.6.0

In your browser address bar, type YOUR_IP_ADDRESS:8787 to access RStudio

.. Note::

  The username and password for Rstudio is ``rstudio`` and ``rstudio1`` respectively

Once you can open the Rstudio, then you are ready to integrate the tool in DE

**3. Add tool in CyVerse Discovery Environment**

**3.1 Log-in to CyVerse Discovery Environment and click on the "Apps" window**

**3.2 Click "Manage Tools" -> "Tools" -> "Add Tool" and fill the details for your Docker image**

Fill out the following details

.. code-block:: bash

  Tool-Name: FOSS-Rstudio
  Description: RStudio VICE app
  Version: 3.6.0
  Type: interactive
  Image Name: cyversevice/rstudio-verse
  Docker Hub URL: https://hub.docker.com/repository/docker/cyversevice/rstudio-verse
  Tag: 3.6.0
  Working Directory: /home/rstudio
  Port Number: 80


|add-tool-vice-1|


**3.3 Create a VICE app**

Click on the "Apps" window. Click "Apps" -> "Create New"

|create-app-vice-1|

.. Note::

  For VICE apps, make sure to check "Do not pass this argument to command line"

  Example data: /iplant/home/shared/iplantcollaborative/example_data/FOSS_2020/vice_exampledata

**Version control using Git within RStudio**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Step1: Make a new repo on GitHub

- Create a New repository on GitHub. Click the green "New" button to create a new repo. Enter the name of the repo and check initialize this repo with a README file. Click "Create Repository" button.

|create-repo|

Step2: Clone the new GitHub repo

- From Github, copy the repo URL via the green "Clone or Download" button.
- In RStudio, start a new project. File > New Project > Version Control > Git. Paste the GitHub URL in the "repository URL".
- Enter the name of the "project directory" which should be same as the name of your GitHub repo.
- Click "Create Project".

Step3: Push your changes to GitHub

- Make some changes (to README file or add a new code)
- Click on Git (Check Git tab on upper right corner of your RStudio window)
- Check the files that you want to commit. Click commit and enter a commit message on the next window.
- After you commit, it will promot you to set your account's default identity. Go to terminal and configure your git user name and email using the following commands. You should be able to commit without any problems after you confgure.

	- git config --global user.email "you@example.com"
  	- git config --global user.name "Your Name"

- To push the changes to the remote GitHub repository press the Push button on the upper right corner of the commit window. You will be prompted to enter the username and password of your GitHub account.

|git-rstudio|

**Sharing VICE apps with collaborators**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can share your VICE workspace with colleagues (with a CyVerse account) who can see and edit your notebooks, logs, and outputs.

- To share your workspace

|vice-share-3|

- Opening workspaces shared with you

|vice-share-6|

|vice-share-7|


**Specific instructions for launching VICE applications**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-`Jupyter lab <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-jupyter.html>`_

-`Rstudio <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-rstudio.html>`_

-`Rshiny <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-rshiny.html>`_

`List of Discovery Environment VICE apps <https://learning.cyverse.org/projects/vice/en/latest/vice_apps/examples.html>`_

----


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

 .. |Static image| image:: ./img/IMAGENAME.png
    :width: 25
    :height: 25

.. |add-tool-vice-1| image:: ../img/addtool_VICE_1.png
    :width: 750

.. |create-app-vice-1| image:: ../img/createapp_VICE_1.png
    :width: 750

.. |create-repo| image:: ../img/createnewrepo.png
    :width: 250

.. |git-rstudio| image:: ../img/gitrepo.png
    :width: 250

.. |vice-share-1| image:: ../img/vice-share-1.png
    :width: 750

.. |vice-share-2| image:: ../img/vice-share-2.png
    :width: 750
.. |vice-share-3| image:: ../img/vice-share-3.png
    :width: 750
.. |vice-share-4| image:: ../img/vice-share-4.png
    :width: 750
.. |vice-share-5| image:: ../img/vice-share-5.png
    :width: 750
.. |vice-share-6| image:: ../img/vice-share-6.png
    :width: 750
.. |vice-share-7| image:: ../img/vice-share-7.png
    :width: 750

.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss-2020/tree/master/CyVerse/vice.rst" target="blank">Github Repo Link</a>
