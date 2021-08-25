.. include:: cyverse_rst_defined_substitutions.txt
.. include:: custom_urls.txt

|CyVerse_logo|_

Project Management
================================

Project management is a bit of a broad term, but we mean the ways you organize data, code, images, documents, and documentation within a project. If you've ever had to navigate someone else's computer or repository, you probably know that a poorly organized project can greatly reduce its openness. On the other hand, a well-organized project can:

- make your work more accessible to others
- help collaborators effectively contribute to your project
- ease the growing pains of a rapidly scaling project
- make life much easier for your future self

It can be easy to overlook sound project management, opting for a "just get it done ASAP" approach to your work, but in our experience, this almost always costs you more time in the end. The best time to introduce good project management is at the start of a project, and the second best time is right now. An hour spent reorganizing a project today may save you days of headaches later on.

There is no single "right way" to organize and manage a project, and your specific needs may vary, but we will introduce a basic framework that can get you headed in the right direction. It will also help us introduce more advanced topics later on, as many of the skills and approaches we teach will be far more effective if the basic project organization is sound.

For the duration of the workshop, we will be working with a basic example project pipeline, going from raw data to a simple report. While this example project is vastly simplified from a real research project, the basic steps are still found in most projects. The skills you learn to improve this example project will translate to larger and more complex research projects.

General Project Steps
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Your project will almost certainly differ from this general workflow in some way, but many of the basic steps will be similar: you collect some data, manipulate it, analyze it, make some outputs, and produce some reports. There may be many additional steps and sub-steps for each of these processes, but the key thing is how they relate to each other and how you manage the relationships and organization of various files.

1. Manage raw data
******************************



- Data collection
- Data entry
- Data validation
- Data preservation
- Data management
- Metadata

2. Clean data
******************************

- Validation
- Exploratory analysis/sleuthing
- Naming
- Structuring
- Consistency

3. Analyze data
******************************

- Too many different methods to mention
- May make use of other data

4. Produce figures/tables
******************************

- Programmatically generating figures

5. Generate report
******************************

- Word doc
- RMarkdown
- 

Project Critique Activity
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this activity, the instructor will walk you through an example of a simple project workflow on their computer. Take notes on anything you notice that might be a hindrance to the openness or reproducibility of the project. We will then start breakout sessions for 5-10 minutes for group discussions on any issues you noticed and how you might improve on them.

Automatic Structure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You might find a nice basic structure that works as a good starting place for many of your projects, or smaller components of big projects. Instead of having to repeat the process of making that directory structure, which could be tedious and introduce mistakes, you could write some code to do it for you. The following is a :code:`bash` script that takes one argument, the name of the new project (with no spaces), and creates that project with a premade directory structure for you to put files into.

::

   #!/usr/bin/env bash

   # Run this script with the name of the new project as 
   # an argument, like so: `bash make_project.sh my_project`
   # It will generate a project with the following structure:

   #.
   #|-- README.md
   #|-- data
   #|   |-- cleaned
   #|   `-- raw
   #|-- images
   #|-- reports
   #`-- scripts

   mkdir "$1"

   cd "$1" || exit

   echo "# $1" >> README.md

   mkdir data

   mkdir data/raw

   mkdir data/cleaned

   mkdir scripts

   mkdir images

   mkdir reports


This approach to automating repetitive tasks is something we'll dig into even deeper in later lessons.

.. |Github Repo Link|  raw:: html

   <a href="FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX" target="blank">Github Repo Link</a>
