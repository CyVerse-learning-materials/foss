> \<a href=\"<https://atmo.cyverse.org>\"
> target=\"blank\"\>Atmosphere\</a\>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/atmman/Atmosphere+Manual+Table+of+Contents>\"
> target=\"blank\"\>Atmosphere Manual\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/atmosphere-guide/en/latest/>\"
> target=\"blank\"\>Atmosphere Guide\</a\>

> \<a href=\"<https://bisque.cyverse.org/client_service/>\"
> target=\"blank\"\>BisQue\</a\>

> \<a href=\"<https://wiki.cyverse.org/wiki/display/BIS>\"
> target=\"blank\"\>BisQue Manual\</a\>

> \<a href=\"<https://user.cyverse.org/>\" target=\"\_blank\"\>CyVerse
> User Portal\</a\>

> \<a href=\"<http://learning.cyverse.org>\" target=\"blank\"\>CyVerse
> Learning Center\</a\>

> \<a href=\"<https://wiki.cyverse.org>\" target=\"blank\"\>CyVerse
> Wiki\</a\>

> \<a href=\"<http://www.cyverse.org/data-store>\"
> target=\"\_blank\"\>Data Store\</a\>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/DS/Data+Store+Table+of+Contents>\"
> target=\"blank\"\>Data Store Manual\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/data_store_guide/en/latest/>\"
> target=\"blank\"\>Data Store Guide\</a\>

> \<a href=\"<https://de.cyverse.org/de/>\" target=\"blank\"\>Discovery
> Environment\</a\>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/DEmanual/Table+of+Contents>\"
> target=\"blank\"\>DE Manual\</a\>

> \<a
> href=\"<http://learning.cyverse.org/projects/cyverse-discovery-environment-guide/>\"
> target=\"blank\"\>Discovery Environment Guide\</a\>

> \<a href=\"<https://dnasubway.cyverse.org/>\" target=\"blank\"\>DNA
> Subway\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/dnasubway_guide/en/latest/>\"
> target=\"blank\"\>DNA Subway Manual\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/dnasubway_guide/en/latest/>\"
> target=\"blank\"\>DNA Subway Guide\</a\>

> \<a href=\"<https://www.sciapps.org/>\"
> target=\"blank\"\>SciApps\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/sciapps_guide/en/latest/>\"
> target=\"blank\"\>SciApps Manual\</a\>

> \<a
> href=\"<https://learning.cyverse.org/projects/sciapps_guide/en/latest/>\"
> target=\"blank\"\>SciApps Guide\</a\>

> \<a href=\"<https://cyverse-de.github.io/api/>\"
> target=\"blank\"\>Terrain DE API Docs\</a\>

> \<a href=\"<https://www.tacc.utexas.edu/tapis>\"
> target=\"blank\"\>Tapis TACC API\</a\>

> \<a href=\"<http://ask.iplantcollaborative.org/questions>\"
> target=\"blank\"\>Ask CyVerse\</a\>

> \<a href=\"<http://learning.cyverse.org/en/latest/>\"
> target=\"blank\"\>Agave Guide\</a\>

> \<a href=\"<http://developer.agaveapi.co/#introduction>\"
> target=\"blank\"\>Agave API\</a\>

> \<a href=\"<https://agaveapi.co>\" target=\"blank\"\>Agave Live
> Docs\</a\>

> \<a href=\"<http://learning.cyverse.org/en/latest/>\"
> target=\"blank\"\>BisQue Guide\</a\>

> \<a href=\"<http://datacommons.cyverse.org/>\" target=\"blank\"\>Data
> Commons\</a\>

\_

\_ [Learning Center Home](http://learning.cyverse.org/)

**Introduction to Cloud Computing** ===================

The simplist way to think of cloud is that its like a laptop or desktop
computer that you connect to remotely. In more granular applications,
cloud is a way of submitting a single task to a computer or a set of
computers on demand without having to host them or keep them running.
Cloud services can also be optimized to run many machines in parallel
for large cluster-like tasks, similar to what is done using High
Performance Computing.

There are three major private cloud providers: [Amazon Web Services
(AWS)](https://aws.amazon.com/), [Google Cloud Platform
(GCP)](https://cloud.google.com/gcp), and [Microsoft
Azure](https://azure.microsoft.com/en-us/). These services cost money to
use. They do provide free credits to researchers
([GCP](https://edu.google.com/programs/credits/faqs/?modal_active=none),
[AWS](https://aws.amazon.com/research-credits/faq/),
[Azure](https://www.microsoft.com/en-us/research/academic-program/microsoft-azure-for-research/))
with short applications.

The big cloud providers have been replicating publicly owned data sets,
e.g. [40+ years of NASA and European Space Agency (ESA) earth
observation system data](https://aws.amazon.com/earth/), on their
cloud-hosted data storage services in the hope that researchers and
businesses will pay to use these data by doing cloud computing on them.
NASA recently [announced a
plan](https://earthdata.nasa.gov/eosdis/cloud-evolution) to move
hundreds of PBs of its data to AWS.

Some cloud services are free, like [Google\'s Earth
Engine](https://earthengine.google.com/), others have limited sandboxes
which are useful for training, but may not fit your needs for larger
scale data analyses. Launching IDEs like Jupyter Notebooks or RStudio in
cloud is possible with platforms like [MyBinder](https://mybinder.org/)
and [CoLab](https://colab.research.google.com/).

There are also options where your institution can stand up a cloud
service on its own hardware: [Open Stack](https://www.openstack.org/)
and [VMWare](https://www.vmware.com/). CyVerse and XSEDE operate
multiple OpenStack clouds which they provide as a service called
[Atmosphere (CyVerse)](https://atmo.cyverse.org/) and [Jetstream
(XSEDE)](https://use.jetstream-cloud.org/) free to researchers.

We will be focusing the workshop time on the applications of
\'containers\' like [Docker](https://www.docker.com/) and
[Singularity](https://sylabs.io) which are a way of taking your research
and running analyses on ANY cloud providor. The rapid development of
containers and container orchestration is due to the rise of the cloud.
The utility of containers to researchers in the areas of sharing and
reproducible research are fortunate benefits.

------------------------------------------------------------------------

**Fix or improve this documentation:**

-   On Github:
-   Send feedback: [Tutorials@CyVerse.org](Tutorials@CyVerse.org)

------------------------------------------------------------------------

> \# Use this example to ensure that links open in new tabs, avoiding \#
> forcing users to leave the document, and making it easy to update
> links \# In a single place in this document
>
> > \<a href=\"REPLACE_THIS_WITH_URL\"
> > target=\"blank\"\>Replace_with_text\</a\>

> \<a
> href=\"<https://github.com/CyVerse-learning-materials/foss-2020/tree/master/reproducible_science/intro.rst>\"
> target=\"blank\"\>Github Repo Link\</a\>
