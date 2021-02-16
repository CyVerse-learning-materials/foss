.. include:: ../cyverse_rst_defined_substitutions.txt
.. include:: ../custom_urls.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**Data Management Plans (DMP)**
--------------------------------

.. admonition:: learning-objectives

       - Describe the purpose of a data management plan
       - Describe the important elements of a data management plan
       - Use a self-assessment to design a data management plan


.. #### Comment: Introduction to basic data management principles

"A data management plan or DMP is a formal document that outlines how data are to be handled both during a research project, and after the project is completed.[1] The goal of a data management plan is to consider the many aspects of data management, metadata generation, data preservation, and analysis before the project begins; this may lead to data being well-managed in the present, and prepared for preservation in the future."

(Source: https://en.wikipedia.org/wiki/Data_management_plan)

`Example DMP <../slides/DMPFuTRES_v2.docx>`_

----

**Why bother with a DMP?**


  .. admonition:: How would you answer?

     Do you have a data management plan? If so, how do you use it?

 *"Those who fail to plan, plan to fail"*

Returning to the assertion that data (and its value) is at the foundation of
your science, working without a data management plan should be considered
scientific misconduct.

Those are strong words. And while we might have an intuition of the boundaries
of research ethics - data mismanagement seems more like an annoyance than
misconduct. However, if your mismanagement leads to error in your research
data, or the inability to make publicly-funded research open to the public,
these are serious consequences. Increasingly, funders realize this.


**Stick:**

 - `You have to make one <https://www.nsf.gov/pubs/2019/nsf19069/nsf19069.jsp>`_
 - Reviewers definitely look at them, but they may not be enforced.

**Carrot:**

 - Make your life easier
 - Planning for you project makes it run more smoothly
 - Avoid surprise costs

Elements of a good DMP
~~~~~~~~~~~~~~~~~~~~~~~~~

 - Information about data & data format(s)

       - data types
       - data sources
       - analysis methods
       - formats
       - QA/QC
       - version control
       - **data life cycle**
 - Metadata content and format(s)

       - format
       - standards
 - Policies for access, sharing, and re-use

       - funder obligations
       - ethical and privacy issues (data justice)
       - intellectual property, copyright, citation
       - timeline for releases
 - Long-term storage, data management, and preservation

       - which data to preserve
       - which archive/repository
 - Budget (`PAPPG <https://www.nsf.gov/pubs/policydocs/pappg19_1/pappg_2.jsp#IIC2gvib>`_)

       - each of the above elements cost time/money
       - Personnel time for data preparation, management, documentation, and preservation (including time)
       - Hardware and/or software for data management, back up, security, documentation, and preservation (including time)
       - Publication/archiving costs (including time)

Not only what, but *who* (roles).

Extra challenges for collaborative projects.

Machine actionable DMPs
=======================

 - DMPs describe research methods that will evolve over the course of a project
 - to be a useful tool for researchers and others, the content must be updated to capture the methods that are employed and the data that are produced

|maDMP|

 (Source: https://doi.org/10.1371/journal.pcbi.1006750.g002)

Tools for DMPs
~~~~~~~~~~~~~~~~~~~

.. admonition:: Exercise

    Thinking about a dataset you work with, complete the |Data Stewardship Wizzard|.


----

References and Resources
~~~~~~~~~~~~~~~~~~~~~~~~~~~

 - `NSF Guidelines on DMPs <https://www.nsf.gov/bio/biodmp.jsp>`_
 - https://dmptool.org/general_guidance
 - https://dmptool.org/public_templates
 - Professional and scholarly societies, e.g., theEcological Society of America http://www.esa.org/esa/science/data-sharing/resources-and-tools/
 - DataOne - https://www.dataone.org/best-practices
 - Data Carpentry - http://datacarpentry.org/
 - The US Geological Survey http://www.usgs.gov/datamanagement/index.php
 - Repository registry (and search) service: http://www.re3data.org/
 - Your university library


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

.. |maDMP| image:: ../img/journal.pcbi.1006750.g002.png


.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss-2019/tree/master/Data_management/dmp.rst" target="blank">Github Repo Link</a>
