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

# **GitHub Action and EHT Demo**

## **Introduction**

Building Docker images on your machine and then pushing it to DockerHub
manually is sometime cumbersome. Since we use Git and GitHub to keep
track of all our source codes anyway, it will be great to ask GitHub to
automatically build and push docker images for us whenever we change our
codes.

We will use one of the Event Horizon Telescope (EHT)\'s imaging pipeline
as an example. The EHT is an international collaboration with a science
goal to take pictures of black holes. The EHT published its visibility
data on
[CyVerse](https://datacommons.cyverse.org/browse/iplant/home/shared/commons_repo/curated/EHTC_FirstM87Results_Apr2019)
and its software pipeline on
[GitHub](https://github.com/eventhorizontelescope/2019-D01-02) .

## **Fork the EHT Pipeline**

When you are on the EHT pipeline GitHub repository, first, click the
\"Fork\" badge/button to create your own repository.

In your own repository, go to \"Settings\" to rename your repository to
something readable for human, e.g., \"eht-demo\".

Because we will need to connect to DockerHub to publish our image, go to
the \"Secerts\" tab in \"Settings\" and add the following two secrets:

``` bash
DOCKERHUB_USERNAME : your Docker Hub username

DOCKERHUB_PASSWORD : your Docker Hub password
```

## **Create a Dockerfile**

To edit your version of the pipeline repository, let\'s clone it to your
\"local\" machines (laptop, desktop, atmosphere VM, etc).

``` bash
git clone git@github.com:[GITHUB_USERNAME]/eht-demo.git
```

Then, change-directory into your local repository and create a
`wrapper.sh` script:

``` bash
#!/bin/bash

python /usr/local/src/eht-imaging_pipeline.py "$@"
```

Turn it into an run-able script by

``` bash
chmod 755 wrapper.sh
```

Then, add a new `Dockerfile` with the follow content:

``` C
FROM eventhorizontelescope/img-env

COPY eht-imaging/eht-imaging_pipeline.py /usr/local/src/
COPY wrapper.sh /usr/bin

WORKDIR /img
ENTRYPOINT ["/usr/bin/wrapper.sh"]
```

Commit all your files and push to GitHub:

``` bash
git add .
git commit -m 'For building FOSS demo Docker image'
git push
```

## **Setup GitHub Action**

Go back to your web browser and make sure that your own pipeline
repository is updated. Click the \"Actions\" tab. Because you have not
set up any GitHub Action, GitHub presents you many examples. Let\'s
click on \"Workflow for Python, Maven, Docker and more \...\" at the
bottom of the page and look for the \"Docker image\" example. Click
\"Set up this workflow\" as a starting point.

GitHub now presents you an online text editor that describes an Action
Workflow. Let\'s just click \"Start commit\" to turn this into a Git
commit.

Once you are done, click the \"Actions\" tab again. You will see the
workflow is now set up. It\'s probably still in the GitHub Action work
queue. Wait a bit and it will turn into a running state.

Your \"Action\" workflow should finish successfully. However, it built
an image call `my-image-name` inside the Action build machine. The name
is not right, and you cannot use this Docker image.

## **Edit GitHub Action**

Click on the name your Action workflow and select the \"Workflow file\"
tab, then click the pencil icon on the top right, GitHub gives you an
online editor again. Update the `dockerimage.yml` file to:

``` C
name: Docker Image CI

on: [push]

jobs:

  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Build the Docker image
      run: docker build . --file Dockerfile --tag ${{ secrets.DOCKERHUB_USERNAME }}/eht-demo
    - name: Login to Docker Hub
      run: echo ${{ secrets.DOCKERHUB_PASSWORD }} | docker login -u ${{ secrets.DOCKERHUB_USERNAME }} --password-stdin
    - name: Push to Docker Hub
      run: docker push ${{ secrets.DOCKERHUB_USERNAME }}/eht-demo:latest
```

Once you are done, commit it. And go back to \"Actions\" tab. Because
editing the Action workflow is itself a Git commit, it triggers GitHub
Action to rerun the workflow. If it works, you it should have built a
Docker image and push it to Docker Hub.

## **EHT Image Reconstruction**

Now, we are ready to perform an EHT image reconstruction to create your
own black hole image!

First, because it will take some time to download the Docker image,
let\'s start pulling it first onto your \"local\" machines (laptop,
desktop, atmosphere VM, etc) in the background.

``` bash
docker pull [DOCKERHUB_USERNAME]/eht-demo > git-pull-log &
```

Let\'s also create an empty work directory

``` bash
mkdir ~/eht-demo
cd ~/eht-demo
```

Remember EHT published its data on CyVerse? Let\'s download a data file:

``` bash
wget https://de.cyverse.org/anon-files//iplant/home/shared/commons_repo/curated/EHTC_FirstM87Results_Apr2019/uvfits/SR1_M87_2017_095_lo_hops_netcal_StokesI.uvfits
```

You have both the data and software (in a Docker image). Let\'s perform
the image reconstruction:

``` bash
docker run --rm -v $PWD:/img [DOCKERHUB_USERNAME]/eht-demo -i SR1_M87_2017_095_lo_hops_netcal_StokesI.uvfits -o [NAME].fits --savepdf
```

It will take some time. And it may work or may not work\-\--depending on
if you pull an old version of the pipeline repository, or a new version.

If docker finished with an error message, you used the old version. And
it is a great opportunity to see how convenient to see how GitHub
Actions work. If docker finished without an error, congratulations, you
can skip the next paragraph.

Go to GitHub on your browser, open
`eht-imaging/eht-imaging_pipeline.py`, and click the pencil icon to edit
the file directly. Add the following two lines:

``` python
import matplotlib
matplotlib.use('Agg')
```

on line 50 and the commit from the GitHub website. Because GitHub
Actions \"license\" for changes on your repository, it will
automatically rebuild your Docker image. Once it is done, pull the new
Docker image by:

``` bash
docker pull [DOCKERHUB_USERNAME]/eht-demo
```

And now you can rerun your analysis with the new Docker image!

Once it\'s done, you will see two new files `[NAME].fits` and
`[NAME].pdf` on the local machines.

Here you go! You just reconstructed your own black hole image!

## **Exercise**

OK this is cool so far. But the point of GitHub Actions is that it will
rerun the workflow whenever you commit and push your repository to
GitHub. So try to make some silly changes to your local Git repository,
push it to GitHub, and see Actions react to your edits.
