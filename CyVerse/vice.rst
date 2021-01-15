.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo2|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_






**VICE**
========



**Learning Outcomes**

After reading this document, new users should be able to:

1. Understand the types of computing problems for which VICE is a good solution

2. How to start VICE to run a Jupyter Notebook, R Shiny App, and related applications

3. How to connect VICE to the CyVerse Data Store to move data into and out of a running VICE instance

4. How to use notebooks and R Shiny Apps created by other researchers.

5. How to create a notebook and R Shiny App

6. How to share a notebook/R Shiny App with other users/researchers

**About VICE**

CyVerse data science workbench, the `Discovery Environment <https://de.cyverse.org/de/>`_, includes a feature called `VICE (Visual Interactive Computing Environment) <https://learning.cyverse.org/projects/vice/en/latest/>`_

VICE uses Docker containers to launch interactive programs, like RStudio, R Shiny Apps, Project Jupyter, Data Mining, and WebGL Applications that can be run in a browser. These programs allow users to interact with their data and do analyses in one place (i.e. view outputs in the same window code is executed). Researchers using VICE can explore their datasets interactively in the Discovery Environment while using the Data Store. 

While VICE does require some coding knowledge, it is for anyone who wants to interact with data in an iteritative way. 


.. #### Comment: How to launch apps on VICE

**Visual Interactive Computing Environment**

- You can launch existing VICE images from the DE, or integrate your own using the Manage Tools. 
- VICE apps are containers, and your data are in the container until you move them off of it. Your results will be saved when the app terminates in your ``/username/analyses`` directory, unless you specify that the app results be saved elsewhere.


`List of all VICE apps <https://learning.cyverse.org/projects/vice/en/latest/vice_apps/examples.html>`_

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

*Specific instructions for launching VICE applications*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-`Jupyter lab <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-jupyter.html>`_

-`Rstudio <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-rstudio.html>`_

-`Rshiny <https://learning.cyverse.org/projects/vice/en/latest/user_guide/quick-rshiny.html>`_

----

*Sharing VICE apps with collaborators*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can share your VICE workspace with colleagues (whith a CyVerse account) who can see and edit your notebooks, logs, and outputs. 

**To share your workspace**

|vice-share-1|

|vice-share-2| 

|vice-share-3|

|vice-share-4|

|vice-share-5|



**Opening workspaces shared with you**


|vice-share-1|

|vice-share-6|

|vice-share-7|
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

   <a href="https://github.com/CyVerse-learning-materials/foss-2019/tree/master/CyVerse/vice.rst" target="blank">Github Repo Link</a>
