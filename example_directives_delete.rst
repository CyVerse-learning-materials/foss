.. include:: cyverse_rst_defined_substitutions.txt
.. include:: custom_urls.txt

|CyVerse_logo|_

|Home_Icon|_
`Learning Center Home <http://learning.cyverse.org/>`_


STYLE TIPS - DELETE THIS PAGE BEFORE PUBLISHING
--------------------------------------------------

    .. tip::

         Check the code (.rst) source to see how these examples are written
         in restructured text.


.. #### Comment: short description

Many of the examples Writing your documentation using sample data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Where possible, you want write documentation instructions to be general enough
for users can follow along with their own data. To help do this, you can use
the **sample data admonition** to intersperse sample data-specific instructions
into your generic instructions.

To do this, start your documentation with a description and where possible,
a citation of the data:

     .. admonition:: Sample data

      **How to use provided sample data**

      In this guide, we will use an RNA-Seq dataset (*"Zika infected hNPCs"*).
      This experiment compared human neuroprogenetor cells (hNPCs)
      infected with the Zika virus to non-infected hNPCs. You can read more
      about the experimental conditions and methods
      `here <https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175744>`_.
      Where appropriate, a note (in this orange colored background) in the
      instructions will indicate which options to select to make use of this
      provided dataset.

      **Sample data citation**: Yi L, Pimentel H, Pachter L (2017) Zika
      infection of neural progenitor cells perturbs transcription in
      neurodevelopmental pathways. PLOS ONE 12(4):
      e0175744. `10.1371/journal.pone.0175744 <https://doi.org/10.1371/journal.pone.0175744>`_

Then, as you have instructions, intersperse the sample data .. admonition


    1. First, enter the cutoff value for your dataset

        .. admonition:: Sample data

          *"Zika infected hNPCs"* dataset:

          Enter **30**

    2. Continue with next step...


Other admonitions
~~~~~~~~~~~~~~~~~~~

There are several admonitions you can use, but tip and warning are the most
common for our documentation.

    .. tip::
         If you don't see a desired species/genome `contact us <https://dnasubway.cyverse.org/feedback.html>`_ to have it added

    .. warning::
     When naming your samples and conditions, avoid spaces and special characters
     (e.g. !#$%^&/, etc.). Also be sure to be consistent with spelling.


Buttons and keyboard combinations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Where it adds clarity you can use this text to add buttons:

  1. Click :guilabel:`&Cancel` to continue

  2. Press :guilabel:`&Control` + :guilabel:`&P` to print your result

  3. Fix the |CyVerse_launch| link in `custom_url.txt` to use this button
     to launch a quicklaunch link in the DE (the embed HTML the DE generates may
     not render properly in RTD)

Detail expand questions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can have questions by using `.. admonition:: Question` and
`.. admonition:: Answer`. Just make sure you pay attention to spacing as below.

  .. admonition:: Question

    1. Test your reader's knowledge with a question

      .. admonition:: Answer

        Give them an answer

    2. Test your reader's knowledge with a question

      .. admonition:: Answer

        Give them an answer


Embed video
~~~~~~~~~~~~~~~

You can embed responsive YouTube videos:

 .. raw:: html

  <div class="video-container">
  <iframe width="560" height="315" align="center"
  src="https://www.youtube.com/embed/XLBpway_jG8" frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
  </div>

URLs/Links
~~~~~~~~~~~

Have hyperlinks open in a new tab to avoid pushing the reader off the documentation
page. Always use substitutions. Best practice is to define your substitutions in
the **cyverse_rst_defined_substitutions.txt** file in this repo for easy future
updating.

Bad link ...

`bad google <https://www.google.com/>`_


Good link ...

|google|

.. |google| raw:: html

   <a href="https://www.google.com/" target="blank">Google</a>

Even better link (because it is defined in a separate file)

|CyVerse User Portal|


Images
~~~~~~~

Images should only be used when necessary.

Choose an image size that works for your page:

 |Too big kitten|

.. |Too big kitten| image:: ./img/kitten_no_border.png

Better size:

 |Right-size kitten|

.. |Right-size kitten| image:: ./img/kitten_no_border.png
    :width: 400
    :height: 350

Images should have a 1px black border:

 |Right-size kitten w border|

.. |Right-size kitten w border| image:: ./img/kitten_w_border.png
    :width: 400
    :height: 350


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


.. |Github Repo Link|  raw:: html

   <a href="FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX_FIX" target="blank">Github Repo Link</a>
