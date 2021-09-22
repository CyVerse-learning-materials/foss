.. include:: cyverse_rst_defined_substitutions.txt
.. include:: custom_urls.txt

|CyVerse_logo|_

Project Management
================================

"Project Management" is a bit of a broad, vague term, but we use it here in two different contexts. First, we'll go over broad management of scientific projects, talking about things like how to develop operations manuals, lay out roles and responsibilities, and plan out general project steps and the workflow connecting them. Next, we'll go over management of computational projects and how to organize them. Making sure your data, code, and documents are well-organized is crucial for future topics like version control and reproducibility.

Organizing the Whole Thing
--------------------------------

This type of overall project management may be required for some grants, and while it may be tempting to put in the minimal effort on one of the many pieces of paperwork you're required to complete, this type of overall project planning can be very useful. Here we'll discuss some of the benefits of this type of project management:

- clarifies roles and responsibilities
        - it can be easy for certain tasks to slip through the cracks
        - ensures that nobody gets saddled with too much work
        - reduces chances of disputes among collaborators
- defines project steps and their order
        - the larger a project, the more convoluted this can get
        - even small projects can quickly get out of hand
- looks good to funders and collaborators
- gives you somewhere to record changes to the project
        - if someone leaves the project or roles change, it is worth documenting these changes
        - can also be part of the "Open Process" we talked about

Ryan will give a brief talk on how the |GPE| used a |GOM| to establish a clear structure for the project.

Now we will do a breakout discussion section to talk about overall project management.

 .. admonition:: Discussion Question
    :class: admonition-question

        What are some project management strategies that you have found to work well?

        What is an example of a poorly managed project you were involved in? What contributed to this feeling?

        Why do you think effective project management is important to Open Science?

        What are some limitations to you, your lab/group, or your domain?

Computational Project Management
---------------------------------------

When we talk about project management in this section, we mean the ways you organize data, code, images, documents, and documentation within a project. If you've ever had to navigate someone else's computer or repository, you probably know that a poorly organized project can greatly reduce its openness. On the other hand, a well-organized project can:

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
- LaTeX


Key Concepts for Project Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Projects should be self-contained
        - this is probably the most important concept
        - strictly necessary for version control
        - use relative paths
2. Use structure to organize files
3. Don't underestimate complexity
4. Keep raw data raw
5. Treat generated output as disposable
6. Avoid manual (point-and-click) steps as much as possible
        - if necessary, record in detail
        - should also be recorded in prior and subsequent steps
7. Avoid spaces in names
8. Describe structure in README
9. The best time to organize is at the start, the 2nd best is right now
10. Reorganize if necessary, but don't overdo it

|tradeoff|

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

Other Resources
~~~~~~~~~~~~~~~~~~~~~~~

There are many other resources on more specific elements of project management. We'll link to some of them here.

- Using `R Projects` with RStudio: https://support.rstudio.com/hc/en-us/articles/200526207-Using-Projects
- Using the R package `here`: https://github.com/jennybc/here_here and https://here.r-lib.org/
- An even more compartmentalized approach to project management: https://hrdag.org/2016/06/14/the-task-is-a-quantum-of-workflow/

.. |GPE| raw:: html

   <a href="https://genophenoenvo.github.io/" target="blank">GenoPhenoEnvo Project</a>  

.. |GOM| raw:: html

   <a href="https://zenodo.org/record/3839120#.YUOmEWZKj0o" target="blank">Governance and Operations Manual</a>  

.. |tradeoff| image:: img/organizing_searching_tradeoff.png
[]() 
