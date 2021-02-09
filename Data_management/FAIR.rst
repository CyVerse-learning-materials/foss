.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**FAIR Data**
--------------------

**Vocabulary**
  - Metadata
  - PID: Permanent Identifier
  - GUID: Globally Unique Identifier
  - Ontology
  - Provenance
  - License
  - Search Index
  - Access protocol

FAIR Principles
===============

In 2016, the |FAIR Guiding Principles|_ for scientific data management and stewardship were published in Scientific Data. Read it. Its short.

**Findable**
 - F1. (meta)data are assigned a globally unique and persistent identifier
 - F2. data are described with rich metadata (defined by R1 below)
 - F3. metadata clearly and explicitly include the identifier of the data it describes
 - F4. (meta)data are registered or indexed in a searchable resource

**Accessible**
 - A1. (meta)data are retrievable by their identifier using a standardized communications protocol
 - A1.1 the protocol is open, free, and universally implementable
 - A1.2 the protocol allows for an authentication and authorization procedure, where necessary
 - A2. metadata are accessible, even when the data are no longer available

**Interoperable**
 - I1. (meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
 - I2. (meta)data use vocabularies that follow FAIR principles
 - I3. (meta)data include qualified references to other (meta)data

**Reusable**
 - R1. meta(data) are richly described with a plurality of accurate and relevant attributes
 - R1.1. (meta)data are released with a clear and accessible data usage license
 - R1.2. (meta)data are associated with detailed provenance
 - R1.3. (meta)data meet domain-relevant community standard

CARE Principles
===============

The |CARE principles|_ for Indigenous Data Governance were drafted at the International Data Week and Research Data Alliance Plenary co-hosted event “Indigenous Data Sovereignty Principles for the Governance of Indigenous Data Workshop,” 8 November 2018, Gaborone, Botswana.

**Collective Benefit**
  - C1. For inclusive development and innovation
  - C2. For improved governance and citizen engagement
  - C3. For equitable outcomes

**Authority to Control**
  - A1. Recognizing rights and interests
  - A2. Data for governance
  - A3. Governance of data

**Responsibility**
  - R1. For positive relationships
  - R2. For expanding capability and capacity
  - R3. For Indigenous languages and worldviews

**Ethics**
  - E1. For minimizing harm and maximizing benefit
  - E2. For justice
  - E3. For future use

FAIR - TLC
===============
**Traceable, Licensed, and Connected**
 - The need for metrics: https://zenodo.org/record/203295#.XkrzTxNKjzI

.. admonition:: Question
   :class: admonition-question

   Which do you think is the hardest, F, A, I, or R, and why?

.. admonition:: Question
   :class: admonition-question

   What is the best way to cite data?

.. admonition:: Question
   :class: admonition-question

   What are the relative values of a data publication verus a peer-reviewed paper?

.. admonition:: Question
   :class: admonition-question

   What role do ontologies play in FAIR-TLC?

Hands on Exercise - Metadata in CyVerse
======================

 - `Using metadata in the DE <../CyVerse/de-data-manage.html#using-metadata-in-the-de>`_
 - iCommands metadata: `imeta <https://docs.irods.org/4.2.0/icommands/metadata/>`_
  - example 1: ``imeta add -C B123 test_metadata value unit``
  - example 2: ``imeta add -d B123/0123.txt test_metadata value unit``
----

References and Resources
=================

https://www.nature.com/articles/sdata201618


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

.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>

.. |FAIR Guiding Principles| raw:: html

   <a href="https://www.nature.com/articles/sdata201618" target="_blank">FAIR Guiding Principles</a>

.. |CARE principles| raw:: html

   <a href="https://www.gida-global.org/care" target="_blank">CARE principles</a>

.. |Github Repo Link| raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss/tree/master/Data_management/FAIR.rst" target="blank">Github Repo Link</a>
