# Reproducibility II: Containers

!!! Success "Learning Objectives"

    After this lesson, you should be able to:

    * Explain what containers are used for in reproducible research contexts
    * Search for and run a Docker container locally or on a remote system
    * Understand how version control and data can be used inside a container

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
        
