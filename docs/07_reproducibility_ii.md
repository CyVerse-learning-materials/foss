# Reproducibility II: Containers

!!! Success "Learning Objectives"

    After this lesson, you should be able to:

    * Explain what containers are used for in reproducible research contexts
    * Search for and run a Docker container locally or on a remote system
    * Understand how version control and data can be used inside a container


## Containers

Ok, to be fair, working with containers will also be frustrating. But the beautiful thing about working with containers is that you can handle all of the hard stuff at the start of a project, and you won't have to worry about things changing later on. 

What **are** containers?

Containers are reproducible computing environments that contain an operating system (OS), software, and even code needed to run analyses. Containers are similar to virtual machines (VMs), but are smaller and easier to share. A big distinction between Containers and VMs is what is within each environment: VMs require the OS to be present within the image, whilst containers rely solemnly on the host OS (and the container engine). 

![VM_vs_containers](https://cloudblogs.microsoft.com/wp-content/uploads/sites/37/2019/07/Demystifying-containers_image1.png)
Source: [Microsoft Cloudblogs](https://cloudblogs.microsoft.com/opensource/2019/07/15/how-to-get-started-containers-docker-kubernetes/)

A popular container platform is [Docker](https://www.docker.com/):material-docker:([wikipedia](https://en.wikipedia.org/wiki/Docker_(software)), ["what is a Docker container?"](https://www.docker.com/resources/what-container/)), hosting user created containers on [DockerHub](https://hub.docker.com/), and providing a cross-OS user-friendly toolset for container creation and deployment.

RStudio has a number of [available Docker containers](https://rocker-project.org/images/versioned/rstudio.html), each for different use cases and maintained by the [Rocker Project](https://rocker-project.org/). 

[Apptainer](https://apptainer.org/docs/user/main/) (formerly, Singularity), is another popular container engine, which allows you to deploy containers on HPC clusters.


!!! Tip "Container Camp: an introdution to Docker containers"

    [Introduction to Docker](https://cyverse-learning-materials.github.io/container-camp/docker/intro/){target=_blank}

??? Tip "Alt: The Carpentries Introductory Container workshop"

    The Carpentries have an incubator workshop on [Docker Containers](https://carpentries-incubator.github.io/docker-introduction/){target=_blank} 
    
    [Containers in Research Workflows](https://carpentries-incubator.github.io/docker-introduction/reproduciblity/index.html){target=_blank}

## Self Assessment

??? Question "A Docker container with the tagname `latest` ensures old code and data will work on a new computer setup?"

    !!! Failure 

        Never use the `latest` tag for a publication or archival. 

        The `latest` version is always being updated and should be considered "cutting edge".

        `latest` is the default tag name of all Docker images

        `latest` versions MAY have backward compatibility with older code and data, but this is not always a given

??? Question "When are containers the right solution?"

    !!! Success

        Containers are valuable when you need to run an analyses on a remote platform, and you need it to work every time.

    !!! Failure

        You need to do some simple text file editing 

        You need to run a web service
        


??? Question "True or False: Docker containers allow for reproducibility across all computing platforms"

    !!! Success "False"

        While Docker allows you to quickly run software from other people, it may not work across every platform.

        There are different CPU architectures (`arm`, `amd64`, `x64, `x86`) deployed across cloud, computer workstations, laptops, and cellular phones. 

        Docker containers and their software can be cross-compiled across architectures, but this must be done by the creators.

??? Question "When is it advisable to not trust a Docker image?"

    !!! Success "When you cannot view its Dockerfile"

        Featured and Verified Docker images can be trusted, in general.

        User generated images should not be trusted unless you can view their Dockerfile, or build logs to determine what is actually in the container you are attempting to run.