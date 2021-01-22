.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_


Launching a Docker app on Atmosphere
---------------------------------

You don't need to do the first 5 steps if you are running the 'DataCarpentry Genomics May2019' image.

1. Use web shell to run a basic Atmosphere instance*

2. Type ``ezd``

3. Wait for Docker to install

4. Close or Refresh the Web Shell browser tab.

5. type ``docker run hello-world``

6. type ``docker run godlovedc/lolcow``


.. note::
   You may receive an error if Docker did not add your username to the ``docker`` group, you'll need to use the ``sudo`` invocation, e.g. ``sudo docker run hello-world``

   To add yourself to the docker group type ``sudo usermod -aG docker $USER`` and refresh your terminal window.

----

**Fix or improve this documentation:**

- On Github: |Github Repo Link|
- Send feedback: `Tutorials@CyVerse.org <Tutorials@CyVerse.org>`_

----


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss-2019/tree/master/Containers/dockeronatmo.rst" target="blank">Github Repo Link</a>
