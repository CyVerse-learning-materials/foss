# Containers and the HPC

<figure markdown>
  ![sin-2-app](assets/logos/sin-app-slurm.png)
    <figcaption> Singularity > Apptainer and working with the [SLURM workload manager](https://slurm.schedmd.com/documentation.html) (HPC scheduler). </figcaption>
</figure>

!!! Success "Expected Outcomes"
    - Being able to log onto the HPC and start an interactive node
    - Know basic HPC related commands
    - Execute containerized code through Singularity/Apptainer
    - Being able to search and load specific software
    - Execute NextFlow scripts on the HPC

Through FOSS and FOSS+ we have learned about container technology and how it can affect reproducibility by wrapping all the necessary components that allow a specific software to be executed. 

Similar to Docker, Singularity/Apptainer is a powerful tool that enables researchers to package entire environments, including software dependencies and libraries, into a single executable file.

**Unlike other containerization platforms, Singularity/Apptainer is designed with HPC in mind, allowing seamless integration with cluster computing environments.**

The biggest difference between Docker and Singularity/Apptainer, is that with the latter *you do **not** require sudo priviledges*. Exciting!

In this workshop, we are going to learn how we can use Singularity/Apptainer on the UA HPC, covering orientation of the HPC, and executing Singularity/Apptainer control commands.

## HPC: The Basics

Resources:

  - https://uarizona.atlassian.net/wiki/spaces/UAHPC/pages/75990696/User+Guide
  - https://uarizona.atlassian.net/wiki/spaces/UAHPC/pages/75990091/HPC+High+Performance+Storage

### Logging onto the HPC
### Choosing the System
### Checking Available Resources
## Launching an Interactive Node

Resources:

  - https://uarizona.atlassian.net/wiki/spaces/UAHPC/pages/75989825/Interactive+Jobs

### SLURM and Commands

Resouces:

  - https://uarizona.atlassian.net/wiki/spaces/UAHPC/pages/75989875/Running+Jobs+with+Slurm
  - https://uarizona.atlassian.net/wiki/spaces/UAHPC/pages/75989486/Cheat+Sheet

---

## Singularity/Apptainer

In 2021, the Sylabs, the developers behind the original Singularity, made a fork of the original project and renamed it [SingularityCE (Community Edition)](https://github.com/apptainer/singularity). This would allow for the SingularityCE to be compliat with FOSS and allowing for the community to contribute to the builds. The Singularity team then joined the [Linux Foundation](https://en.wikipedia.org/wiki/Linux_Foundation) and decided to rename their effor to [**Apptainer**](https://github.com/apptainer/apptainer). 

The technology behind Singularity/Apptainer is similar to the one of Docker, but, as mentioned before, it was created with the HPC in mind, and therefore bypasses the requirement of sudo.

!!! Note
    Until now we have used Singularity/Apptainer to refer to the same software. Onwards, you can decide whether to use Singularity *OR* Apptainer; in order to keep up with the latest release, we are going to be executing apptainer commands. 

??? info "Docker vs SingularityCE & Apptainer in the blink of an eye"

    **:material-open-source-initiative: Apptainer and SingularityCE are 100% compatible with Docker but they do have some distinct differences**


    **:material-docker: Docker**
      
    :octicons-container-24: Docker containers run as `root`

      -  This privilege is almost never supported by administrators of High Performance Computing (HPC) centers. Meaning Docker is not, and will likely never be, installed natively on your HPC cluster.

    :octicons-container-24: uses compressed layers to create one image

    **:material-open-source-initiative: SingularityCE & Apptainer**:

    :octicons-container-24:  Same user and group identity inside as outside the container
    
    :octicons-container-24:  User only has `root` privileges if elevated with `sudo` when the container is run
    
    :octicons-container-24:  Can run and modify any existing Docker image

      - These key differences allow Singularity to be installed on most HPC centers. Because you can run virtually all Docker containers in Singularity, you can effectively run Docker on an HPC. 



### Executable Commands
 
Resources:

  - https://cc.cyverse.org/singularity/intro/
  - https://cc.cyverse.org/singularity/hpc/
  - https://cc.cyverse.org/singularity/advanced/


Singularity’s [command line interface](https://sylabs.io/guides/3.9/user-guide/cli.html){target=_blank} allows you to build and interact with containers transparently. You can run programs inside a container as if they were running on your host system. You can easily redirect IO, use pipes, pass arguments, and access files, sockets, and ports on the host system from within a container.

#### :octicons-container-24: help

The `help` command gives an overview of Singularity options and
subcommands as follows:

```
 $ singularity help pull
Pull an image from a URI

Usage:
  singularity pull [pull options...] [output file] <URI>

Description:
  The 'pull' command allows you to download or build a container from a given
  URI. Supported URIs include:

  library: Pull an image from the currently configured library
      library://user/collection/container[:tag]

  docker: Pull a Docker/OCI image from Docker Hub, or another OCI registry.
      docker://user/image:tag
    
  shub: Pull an image from Singularity Hub
      shub://user/image:tag

  oras: Pull a SIF image from an OCI registry that supports ORAS.
      oras://registry/namespace/image:tag

  http, https: Pull an image using the http(s?) protocol
      https://library.sylabs.io/v1/imagefile/library/default/alpine:latest

Options:
      --arch string      architecture to pull from library (default "amd64")
      --dir string       download images to the specific directory
      --disable-cache    dont use cached images/blobs and dont create them
      --docker-login     login to a Docker Repository interactively
  -F, --force            overwrite an image file if it exists
  -h, --help             help for pull
      --library string   download images from the provided library
      --no-cleanup       do NOT clean up bundle after failed build, can be
                         helpful for debugging
      --no-https         use http instead of https for docker:// oras://
                         and library://<hostname>/... URIs


Examples:
  From Sylabs cloud library
  $ singularity pull alpine.sif library://alpine:latest

  From Docker
  $ singularity pull tensorflow.sif docker://tensorflow/tensorflow:latest

  From Shub
  $ singularity pull singularity-images.sif shub://vsoch/singularity-images

  From supporting OCI registry (e.g. Azure Container Registry)
  $ singularity pull image.sif oras://<username>.azurecr.io/namespace/image:tag


For additional help or support, please visit https://www.sylabs.io/docs/
```


#### :octicons-container-24: search

Just like with Docker, you can `search` the Singularity container registries for images.

```
singularity search tensorflow
```

#### :octicons-container-24: pull

The easiest way to use a Singularity is to `pull` an existing container
from one of the Registries.

```
singularity pull library://lolcow
```

```
singularity pull docker://<yourusername>/cowsay
```

### Downloading pre-built images

You can use the `pull` command to download pre-built images from a
number of Container Registries, here we'll be focusing on the
[Singularity-Hub](https://www.singularity-hub.org) or
[DockerHub](https://hub.docker.com/).

Container Registries:

-   `library://` - images hosted on Sylabs Cloud
-   `docker://` - images hosted on Docker Hub
-   `localimage://` - images saved on your machine
-   `yum://` - yum based systems such as CentOS and Scientific Linux
-   `debootstrap://` - apt based systems such as Debian and Ubuntu
-   `arch://` - Arch Linux
-   `busybox://` - BusyBox
-   `zypper://` - zypper based systems such as Suse and OpenSuse

-   `shub://` - (archived) images hosted on Singularity Hub, no longer maintained

#### Pulling an image from Singularity Hub

Similar to previous example, in this example I am pulling a base Ubuntu
container from Singularity-Hub:

```
$ singularity pull shub://singularityhub/ubuntu
WARNING: Authentication token file not found : Only pulls of public images will succeed
88.58 MiB / 88.58 MiB [===============================================================================================] 100.00% 31.86 MiB/s 2s
```

You can rename the container using the --name flag:

```
$ singularity pull --name ubuntu_test.simg shub://singularityhub/ubuntu
WARNING: Authentication token file not found : Only pulls of public images will succeed
88.58 MiB / 88.58 MiB [===============================================================================================] 100.00% 35.12 MiB/s 2s
```

The above command will save the alpine image from the Container Library
as `alpine.sif`

#### Pulling an image from Docker Hub

This example pulls an `ubuntu:16.04` image from DockerHub and saves it
to the working directory.

```
$ singularity pull docker://ubuntu:20.04
INFO:    Converting OCI blobs to SIF format
INFO:    Starting build...
Getting image source signatures
Copying blob 8f6b7df711c8 done
Copying blob 0703c52b8763 done
Copying blob 07304348ce1b done
Copying blob 4795dceb8869 done
Copying config 05ac933964 done
Writing manifest to image destination
Storing signatures
2020/03/09 16:14:12  info unpack layer: sha256:8f6b7df711c8a4733138390ff2aba1bfeb755bf4736c39c6e4858076c40fb5eb
2020/03/09 16:14:13  info unpack layer: sha256:0703c52b8763604318dcbb1730c82ad276a487335ecabde2f43f69a6222e8090
2020/03/09 16:14:13  info unpack layer: sha256:07304348ce1b6d24f136a3c4ebaa800297b804937a6942ce9e9fe0dac0b0ca74
2020/03/09 16:14:13  info unpack layer: sha256:4795dceb8869bdfa64f3742e1df492e6f31baf9cfc36f1a042a8f981607e99a2
INFO:    Creating SIF file...
INFO:    Build complete: ubuntu_20.04.sif
```

!!! Warning

    Pulling Docker images reduces reproducibility. If you were to pull a
    Docker image today and then wait six months and pull again, you are not
    guaranteed to get the same image. If any of the source layers has
    changed the image will be altered. If reproducibility is a priority for
    you, try building your images from the Container Library.

#### Pulling an image from Sylabs cloud library

Let’s use an easy example of `alpine.sif` image from the [container
library](https://cloud.sylabs.io/library/)

!!! Tip
    You can use `singularity search <name>` command to locate groups,
    collections, and containers of interest on the Container Library

### Interact with images

You can interact with images in several ways such as `shell`, `exec` and
`run`.

For these examples we will use a `cowsay_latest.sif` image that can be
pulled from the Docker Hub.

```
$ singularity pull docker://tswetnam/cowsay
INFO:    Downloading library image
 67.00 MiB / 67.00 MiB [=====================================================================================================] 100.00% 5.45 MiB/s 12s
WARNING: unable to verify container: cowsay_latest.sif
WARNING: Skipping container verification

$ sudo singularity run cowsay_latest.sif
 ________________________________________
/ Expect a letter from a friend who will \
\ ask a favor of you.                    /
 ----------------------------------------
    \   ^__^
     \  (oo)\_______
        (__)\       )\/\
        ||----w |
        ||     ||
```

#### :octicons-container-24: shell

The `shell` command allows you to spawn a new shell within your
container and interact with it as though it were a small virtual
machine.

```
$ singularity shell cowsay_latest.sif
  Singularity cowsay_latest.sif:~>
```

The change in prompt indicates that you have entered the container
(though you should not rely on that to determine whether you are in
container or not).

Once inside of a Singularity container, you are the same user as you are
on the host system.

```
$ Singularity cowsay_latest.sif:~> whoami
tswetnam
```

!!! Warning
    `shell` also works with the library://, docker://, and shub:// URIs.
    This creates an ephemeral container that disappears when the shell is
    exited.


#### :octicons-container-24: exec

The exec command allows you to execute a custom command within a
container by specifying the image file. For instance, to execute the
`cowsay` program within the cowsay\_latest.sif container:

```
$ singularity exec cowsay_latest.sif cowsay container camp rocks
______________________
< container camp rocks >
 ----------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

`exec` also works with the library://, docker://, and shub:// URIs. 

```
singularity exec library://lolcow container camp 2022
```

This  creates an ephemeral container that executes a command and disappears.

#### :octicons-container-24: run

Singularity containers contain
[runscripts](https://www.sylabs.io/guides/3.0/user-guide/definition_files.html#runscript).
These are user defined scripts that define the actions a container
should perform when someone runs it. The runscript can be triggered with
the `run` command, or simply by calling the container as though it were
an executable.

```
singularity run lolcow_latest.sif
 _________________________________________
/  You will remember, Watson, how the     \
| dreadful business of the Abernetty      |
| family was first brought to my notice   |
| by the depth which the parsley had sunk |
| into the butter upon a hot day.         |
|                                         |
\ -- Sherlock Holmes                      /
 -----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

#### :octicons-container-24: inspect

The `inspect` command will provide information about labels, metadata, and environmental variables.

```
singularity inspect lolcow.sif
```

```
singularity inspect library://lolcow
```

#### :octicons-container-24: build

See [Next Section](../singularity/advanced.md) for details of `build`



## NextFlow on the HPC

Resources:

- https://training.nextflow.io/basic_training/executors/
- https://lescailab.unipv.it/guides/eos_guide/use_nextflow.html
- Example: https://nf-co.re/smartseq2/dev/docs/usage