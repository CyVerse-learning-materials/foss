.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_


**Introduction to Cloud Computing**
===================

The simplist way to think of cloud is that its like a laptop or desktop computer that you connect to remotely. In more granular applications, cloud is a way of submitting a single task to a computer or a set of computers on demand without having to host them or keep them running. Cloud services can also be optimized to run many machines in parallel for large cluster-like tasks, similar to what is done using High Performance Computing.

There are three major private cloud providers: `Amazon Web Services (AWS) <https://aws.amazon.com/>`_, `Google Cloud Platform (GCP) <https://cloud.google.com/gcp>`_, and `Microsoft Azure <https://azure.microsoft.com/en-us/>`_. These services cost money to use. They do provide free credits to researchers (`GCP <https://edu.google.com/programs/credits/faqs/?modal_active=none>`_, `AWS <https://aws.amazon.com/research-credits/faq/>`_, `Azure <https://www.microsoft.com/en-us/research/academic-program/microsoft-azure-for-research/>`_) with short applications.

The big cloud providers have been replicating publicly owned data sets, e.g. `40+ years of NASA and European Space Agency (ESA) earth observation system data <https://aws.amazon.com/earth/>`_, on their cloud-hosted data storage services in the hope that researchers and businesses will pay to use these data by doing cloud computing on them. NASA recently `announced a plan <https://earthdata.nasa.gov/eosdis/cloud-evolution>`_ to move hundreds of PBs of its data to AWS.

Some cloud services are free, like `Google's Earth Engine <https://earthengine.google.com/>`_, others have limited sandboxes which are useful for training, but may not fit your needs for larger scale data analyses. Launching IDEs like Jupyter Notebooks or RStudio in cloud is possible with platforms like `MyBinder <https://mybinder.org/>`_ and `CoLab <https://colab.research.google.com/>`_.

There are also options where your institution can stand up a cloud service on its own hardware: `Open Stack <https://www.openstack.org/>`_ and `VMWare <https://www.vmware.com/>`_. CyVerse and XSEDE operate multiple OpenStack clouds which they provide as a service called `Atmosphere (CyVerse) <https://atmo.cyverse.org/>`_ and `Jetstream (XSEDE) <https://use.jetstream-cloud.org/>`_ free to researchers.

We will be focusing the workshop time on the applications of 'containers' like `Docker <https://www.docker.com/>`_ and `Singularity <https://sylabs.io>`_ which are a way of taking your research and running analyses on ANY cloud providor. The rapid development of containers and container orchestration is due to the rise of the cloud. The utility of containers to researchers in the areas of sharing and reproducible research are fortunate benefits.

----

**Fix or improve this documentation:**

- On Github: |Github Repo Link|
- Send feedback: `Tutorials@CyVerse.org <Tutorials@CyVerse.org>`_

----


.. Comment: Place Images Below This Line
   use :width: to give a desired width for your image
   use :height: to give a desired height for your image
   replace the image name/location and URL if hyperlinked



.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss-2020/tree/master/reproducible_science/intro.rst" target="blank">Github Repo Link</a>
