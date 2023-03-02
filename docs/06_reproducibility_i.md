# Repeatability and Reproducibility

!!! Success "Learning Objectives"
        
    After this lesson, you should be able to:

    *  Describe what reproducibility is
    *  Discriminate between reproducibility, replicability, and repeatability
    *  Explain why reproducible research is valuable 
    *  Set up a software project with an environment

The so-called reproducibility crisis (see [1](https://www.nature.com/articles/533452a) , [2](https://www.nature.com/collections/prbfkwmwvz) , [3](https://blogs.scientificamerican.com/observations/to-fix-the-reproducibility-crisis-rethink-how-we-do-experiments/)) is something you have
probably heard about (and maybe one of the reasons you have come to FOSS).
Headlines in the media (such as [Most scientists can't replicate studies by their peers](https://www.bbc.com/news/science-environment-39054778))
definitely give pause to researchers and ordinary citizens who hope
that the science used to recommend a course of medical treatment or design
self-driving cars is sound.

Before we go further, it's actually important to ask what is reproducibility?

!!! Question

        How do you define reproducible science?
        
    ??? success "Answer"
        In [Reproducibility vs. Replicability](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5778115/), Hans Plesser gives the following useful definitions:

        - **Repeatability** (Same team, same experimental setup): The measurement
            can be obtained with stated precision by the same team using the same
            measurement procedure, the same measuring system, under the same operating
            conditions, in the same location on multiple trials. For computational
            experiments, this means that a researcher can reliably repeat her own
            computation.
        - **Replicability** (Different team, same experimental setup): The
            measurement can be obtained with stated precision by a different team
            using the same measurement procedure, the same measuring system, under the
            same operating conditions, in the same or a different location on multiple
            trials. For computational experiments, this means that an independent group
            can obtain the same result using the author's own artifacts.
        - **Reproducibility** (Different team, different experimental setup): The
            measurement can be obtained with stated precision by a different team,
            a different measuring system, in a different location on multiple trials.
            For computational experiments, this means that an independent group can
            obtain the same result using artifacts which they develop completely
            independently.

        The paper goes on to further simplify:

        - **Methods reproducibility**: provide sufficient detail about procedures
            and data so that the same procedures could be exactly repeated.
        - **Results reproducibility**: obtain the same results from an independent
            study with procedures as closely matched to the original study as
            possible.
        - **Inferential reproducibility**: draw the same conclusions from either an
            independent replication of a study or a reanalysis of the original study.

## Defining Reproducibility

!!! question "Discussion Question"
        How do these definitions apply to your research/teaching?

        Work with your fellow learners to develop a shortlist of ways reproducibility
        relates to your work. Try to identify challenges and even successes you'd
        like to share.

Often, when we say "reproducibility" we mean all or at least several of the
concepts the proceeding discussion encompasses. Really, reproducibility can be
thought of as set values such as some laboratories express in a code of conduct,
see for example [Ross-Ibarra Lab code of conduct](https://rilab.ucdavis.edu/expectations.html) or [Bahlai Lab Policies](https://github.com/BahlaiLab/Policies/blob/master/Project_completion.md).
Reproducibility comes from our obligations and desires to work ethically,
honestly, and with confidence that the data and knowledge we produce is done
has integrity. Reproducibility is also a "spectrum of practices", not a
single step. (See figure below from [Peng, 2011](https://science.sciencemag.org/content/334/6060/1226)).

![spectrum](assets/reproducibility-spectrum.png)

Assuming you have taken in the potentially anxiety inducing information above,
the most important thing to know is that there is a lot of help to make
reproducibility a foundation of all of your research.

## Repeatability: a first step

A big first step on the road to reproducibility is **repeatability**. In the context of computation, this means that you should be able to reliably generate the same results.

In many ways, this is the biggest hurdle to reproducibility, as it often requires the biggest leap in skills. You can think of repeatability in a few ways.


!!! question "Discussion Question"
	**Have you ever had any hurdles to reproducing your work?**

	- Have you ever run into a problem that prevented you from generating the same results, figures, analyses as before?
	- Have you ever lost time trying to figure out how you (or a collaborator) got a particular result?
	- What were the issues you ran into, and how might you have solved them?

## Software Management

Have you ever tried to run a script, only to realize you had updated a package without knowing, and now the script doesn't work? 

Package managers can be extremely helpful in keeping software versions aligned with projects.

In Python, it is common to use `pip` and a `requirements.txt` file, and in R, the `renv` package can be used to keep package versions stable within individual projects.

## Automation

In the process of making your work more repeatable, you will often be trying to reduce the amount of work you're doing "by hand". Reducing the human input necessary at each step of a project is a key to reliably reproducing the same results, but it can also help save you a lot of time in the long run.

Have you ever manually edited a figure for a manuscript, only to be asked to change something that negated all your manual edits? Well, in the short run, it may have been quicker to just tinker with the graph by hand, but in the long run, figuring out how to use code to generate the whole thing would have saved you time. 

Automating tasks often comes with an up-front cost, but it is important for the eventual reproducibility of the work, and will often save you time in the short run. 

Automation also tends to make tasks scale more easily (editing 10 rows of data by hand is fine, editing 10,000 is much harder), adapt to new scenarios, and extend to future projects.

!!! question "Discussion Question"
	**What are some tasks you have automated or want to automate?**

	- Have you ever successfully automated a task?
	- Found a way to make something scale or take less time? 
	- What was the task, and how did you do it? 
	- Are there any things you wish you could automate?
	- What are some barriers to automating them?

While we often think about writing scripts to clean data, run analyses, and generate figures, there are even more parts of a research project that can be automated. Here are a few examples:

- data validation
- model checking/validation
- software installation
- report/manuscript generation
- citation management
- email/GitHub/Slack notifications
- workflow itself (using things like make, Snakemake, Nextflow, targets)

Code can be thought of as a set of machine-actionable instructions, or instructions that we write for a computer to follow. What other sets of instructions do you have, either written down or in your head? How can you turn them into something machine-actionable?

## Disposability

A great approach to repeatability/reproducbility is to ask "could I generate my results if I lost X?"

What might happen to your work if:

- you changed some code and your script broke?
- you couldn't find a figure when a journal asked for it?
- some software got uninstalled from your computer?
- your laptop got stolen?
- some software or computing provider stopped being maintained?

## Get off your own machine

More and more work is being done somewhere other than a personal computer. This could be an HPC cluster at a university or a cloud computing provider. "Cloud" just means somebody else is handling the computers, and you get to use them when you need to, typically for a price.

Non-local computing resources have varying levels of complexity, flexibility, cost, and scale. Some services like Binder, Colab, and VICE try to abstract more of the computational details away, letting you focus on your code (ideally). Others, like Gitpod, Codespaces, or GitHub Actions, have more limited uses (in a good way).

## Dependency Hell

Think for a moment about all the branching possibilities for how a computer could be set up:

- hardware: CPUs, GPUs, RAM
- Operating system: many flavors of Linux, MacOS, Windows
- Software versions: R, Python, etc.
- Package versions: specific R or Python packages, etc.

Simply trying to get the same setup as anyone else is difficult enough, but you can also run into all sorts of dependencies. Let's say you try to update a package to match the version someone else used for a project. However, after updating it, you realize you need to update 3 other packages. After that, you realize you need a newer version of R. You finally manage to get everything set up, but when you go back to a different project the next week, nothing works! All those updates made your code for your other project break. You spend a week fixing your code to work with the newer software, and you're finally done... but now your advisor gives you a dataset 10x the size and says you'll need to run it on the cloud. You throw your laptop out the window and move to the woods to live the life of a hermit.

All jokes aside, dealing with software dependencies can be extremely frustrating, and so can setting stuff up on a remote location. It can be even more frustrating if you're trying to reproduce results but you don't actually know the entire software stack used to generate them.

There is a way to handle all of these frustrations at once:

## Containers

Ok, to be fair, working with containers will also be frustrating. But the beautiful thing about working with containers is that you can handle all of the hard stuff at the start of a project, and you won't have to worry about things changing later on. 

What **are** containers?

Containers are reproducible computing environments that contain an operating system (OS), software, and even code needed to run analyses. Containers are similar to virtual machines (VMs), but are smaller and easier to share. A big distinction between Containers and VMs is what is within each environment: VMs require the OS to be present within the image, whilst containers rely solemnly on the host OS (and the container engine). 

![VM_vs_containers](https://cloudblogs.microsoft.com/uploads/prod/sites/37/2019/07/Demystifying-containers_image1.png)
Source: [Microsoft Cloudblogs](https://cloudblogs.microsoft.com/opensource/2019/07/15/how-to-get-started-containers-docker-kubernetes/)

A popular container platform is [Docker](https://www.docker.com/):material-docker:([wikipedia](https://en.wikipedia.org/wiki/Docker_(software)), ["what is a Docker container?"](https://www.docker.com/resources/what-container/)), hosting user created containers on [DockerHub](https://hub.docker.com/), and providing a cross-OS user-friendly toolset for container creation and deployment.

RStudio has a number of [available Docker containers](https://rocker-project.org/images/versioned/rstudio.html), each for different use cases and maintained by the [Rocker Project](https://rocker-project.org/). 

[Apptainer](https://apptainer.org/docs/user/main/) (formerly, Singularity), is another popular container engine, which allows you to deploy containers on HPC clusters.

---

## Reproducibility tutorial

This section is going to cover a short tutorial on reproducibility using software, tools and practices discussed today and throughout FOSS.

!!! Note "OS of choice"

        This tutorial will be performed using the [CyVerse CLI (Command Line Interface)](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621). However, if you'd like to use your own computer feel free to! If you're on Mac or Linux, open your terminal; If you're on Windows, use the Windows Subsystem for Linux (WSL)

!!! Success "Tutorial Goals"

        - Create a small workflow using NextFlow
        - Understand best practices for reproducing a workflow
        - Apply FOSS procedures in order to enable easiness of reproducibility

### Prerequisites

What you'll be using:

- [GitHub](https://github.com/) (already installed)
- [Conda](https://docs.conda.io/en/latest/)
- [Mamba](https://mamba.readthedocs.io/en/latest/installation.html) (optional, recommended)

Installable through Conda/Mamba:

- [Nextflow](https://www.nextflow.io/docs/latest/index.html)
- [Salmon](https://salmon.readthedocs.io/en/latest/)
- [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/)

Installabe through Pip:

- [MultiQC](https://multiqc.info/docs/)

??? Question "What's a Conda and how do I install it?"
    [Conda](https://docs.conda.io/en/latest/) is a popular tool for installing software. Typically software you want to use requires other software (dependancies) to be installed. Conda can manage all of this for you. Each available Conda package is part of a “recipe” that includes everything you need to run your software. There are different versions of Conda, including some specific for bioinformatics like [Bioconda](https://bioconda.github.io/).

    The CyVerse CLI already comes with Conda installed; Please follow these steps in order to install [MiniConda](https://docs.conda.io/en/latest/miniconda.html) (the lightweight version of Conda) on your system.

    For the appropriate installation package, visit https://docs.conda.io/en/latest/miniconda.html. :warning: Note: **If you are using the WSL, install the Linux version!!**
                
    ```
    # Download conda and add right permissions
    wget https://repo.anaconda.com/miniconda/Miniconda3-py39_4.12.0-Linux-x86_64.sh     # Modify this to match the OS you're using.
    chmod +x Miniconda3-py39_4.12.0-Linux-x86_64.sh

    # install conda silenty (-b) and update (-u) and initial conda run
    ./Miniconda3-py39_4.12.0-Linux-x86_64.sh -b -u
    ~/miniconda3/bin/conda init

    # Restart bash so that conda is activated
    source ~/.bashrc
    ```

    You'll be able to tell when conda is active when next `(base)` is present next to the to the shell prompt such as

    ```
    (base) user@machine
    ```

    Conda should now be installed and can be used to install other necessary packages! With this in mind, we are going to create our own environment (select `y` when prompted).

    ```
    conda create --name myenv
    ```

    Activate your new environment with 

    ```
    conda activate myenv
    ```

    You can see the list of environments you can activate by doing

    ```
    conda env list
    ```

### Package management with Conda

Conda makes installing packages simple. Due to it's widespread use, conda has a large number of widely available packages; You can search for these in at https://anaconda.org/.

We are going to to use conda to install Mamba, NextFlow, Salmon and FastQC.

```
# Activate Conda using 
conda activate

# Install Mamba
conda install -c conda-forge mamba
```

You can either use the anaconda website to search for packager, or use the conda search feature (_but also, Google is your best friend._)

!!! Note "Makes things faster with Mamba"

        Mamba is a reimplemetation of Conda using the C++ language, allowing for much quicker Conda experience. The tutorial is going to use **Mamba** instead of **Conda**, but you can always replace `mamba` with `conda`!

!!! Info "Conda channels"

        Conda operates through **channels**, specififc repositories where packages are stored. Specific packages sometimes may appear in multiple channels, however it is always helpful to specify a channel with the `-c` flag.

Install Nextflow and verify its installation with the following commands: 

```
# Install NextFlow
mamba install -c bioconda nextflow      # Press y when prompted with [Y/n]!

# verify the installation
nextflow -version
```

Now that you know how to install packages with Conda/Mamba, install Salmon and FastQC.

??? Question "Installing Packages"
    As an exercise, install Salmon and FastQC using Conda/Mamba.

    ??? Tip "Need a hand?"
        ```
        mamba install -c bioconda salmon
        mamba install -c bioconda fastqc
        ```

        Or you can do it with a single line (doable if packages are from the *same* channel)!
        ```
        mamba install -c bioconda salmon fastqc
        ```


You can view the installed conda packages by doing 

```
conda list
```

In order to make your environment reproducible, conda allows you to export your environment.

```
conda env export > my_conda_env.yml
```

### Package management with Pip

Pip works similarly to Conda, as Pip is the package management supported by the Python Software foundation. If you use Python for your work it is likely you have installed packages using Pip.

We only have to install a single package required for this tutorial, MultiQC. To install MultiQC using Pip, do:

```
pip install multiqc
```

Similar to Conda, you can export your pip environment by doing

```
pip3 freeze > my_pip_env.txt
```

!!! Note "Why `pip3`?"
        `pip3 freeze > my_pip_env.txt` is used to export the pip environment such that it is readable for Python 3. If you want to export an environment for Python 2, you can use `pip freeze > my_pip_env.txt`.

!!! Success "Conda exports your Pip environment as well"
        Exporting your environment using Conda (`conda env export > my_conda_env.yml`) will **ALSO** export your pip environment!

### GitHub repository setup and documentation

Create a repository on GitHub to document your work:

- On [GitHub](https://github.com/), navigate to your account page and create a new repository (add a README to create structure!)
- Clone your repository locally with `git clone <repository_url>.git` (find the url under the green **Code** button)
- Navigate to your cloned repository with `cd <repository_name>`. You should now be inside your repository.
- Move your environemnt files into your repository with `mv ../my_conda_env.yml ../my_pip_env.txt .`.
- Modify your README to reflect the work so far, with meaningful comments (remember that the README is formatted with markdown, a guide to markdown [here](https://www.markdownguide.org/basic-syntax/)). A well documented document may look similar to:

````
# reproducibility-tutorial

This repository contains information about the reproduciblility tutorial from [FOSS 2023 Spring](https://foss.cyverse.org/06_reproducibility_i/#reproducibility-tutorial).

## Environment Setup

- Download conda and add right permissions
```
wget https://repo.anaconda.com/miniconda/Miniconda3-py39_4.12.0-Linux-x86_64.sh
chmod +x Miniconda3-py39_4.12.0-Linux-x86_64.sh
```
- Install conda silenty (-b), update (-u) and initial start
```
./Miniconda3-py39_4.12.0-Linux-x86_64.sh -b -u
~/miniconda3/bin/conda init
```
-  Restart bash so that conda is activated
```
source ~/.bashrc
```
- Install Mamba
```
conda install -c conda-forge mamba
```
- Use environment files in this repo to recreate tutorial env
```
mamba install -f <my_conda_env.yml>     # Will also install pip packages
```

## Obtaining tutorial files

Tutorial files avaiable [here](). Use `wget` to download appropriate files and decompress files with `tar -xvf`.
```
wget <URL>
tar -xvf <files>
```

## Workflow tutorial using Nextflow
Steps of the nextflow tutorial will be added in future commits.
````

- Add, commit and push your changes

```
git add .
git commit -m "adding initial documentation"
git push
```
    
- Github will ask for you username and password; When asked about the password, input a GitHub token. To create a token go to **Account > Settings > Developer settings > Personal access tokens > Generate new token**, add a note, select all the necessary permissions and select Generate token; **Copy the token and use it as password!** [FOSS has covered how to create a Token in Week 0: The Shell and Git, necessary in order to modify code locally](https://foss.cyverse.org/00_basics/#adding-code-locally).

### Workflow Tutororial using Nextflow

!!! Info "...what are we doing?"

        In this tutorial (now that we have set up the environment, repository and pushed our first commit) we are going to:

        - Index a [transcriptome](https://en.wikipedia.org/wiki/Transcriptome) file and quantification of DNA reads (using [Salmon](https://salmon.readthedocs.io/en/latest/)).
        - Perform quality controls (with [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/)).
        - Create a [MultiQC](https://multiqc.info/docs/) report.

!!! Warning "I Don't know DNA stuff, can I still do this?"

        Absolutely yes! This tutorial is supposed to introduce you to the process of reproducibility using GitHub repositories, package managers and workflow managers! You do not need to understand what each file is as this is meant to show how to make your science reproducible. Focus on understanding the process and theory behind the tutorial rather than the files themselves :fontawesome-regular-face-smile-beam:.

Nextflow is a workflow manager, similar to [Snakemake](https://snakemake.readthedocs.io/en/stable/). For this tutorial, we decided to use Nextflow as it is easier to learn, more intuitive and user friendly than Snakemake.

Download the required files using `wget` and `tar` to decompress them

```
wget -O nf_foss_tut.tar.gz https://github.com/CosiMichele/reproducibility_tut/blob/master/nf_foss_tut.tar.gz?raw=true
tar -xvf nf_foss_tut.tar.gz
```

We can now look at the decompressed directory structure by using `tree nf_foss_tut` (if you don not have `tree` installed, you can install it with `sudo apt-get tree`).

```
nf_foss_tut/
├── data
│   └── ggal
│       ├── gut_1.fq
│       ├── gut_2.fq
│       ├── liver_1.fq
│       ├── liver_2.fq
│       ├── lung_1.fq
│       ├── lung_2.fq
│       └── transcriptome.fa
├── script1.nf
├── script2.nf
├── script3.nf
├── script4.nf
├── script5.nf
└── script6.nf

2 directories, 13 files
```
!!! Info "Files information"

        - Scripts 1 through 6 (`script<number>.nf`) are the NextFlow files
        - `<file>.fq` are fastq files, containing DNA sequences and quality scores
        - `transcriptome.fa` is all of the RNA data from the organism (*G.gallus*)

Let's look at one of the NextFlow files (`.nf`)

!!! Info "Understanding the Nextflow synthax"

        Nextflow is powerful workflow manager as it can be deployed on HPCs and Clouds. However, it does require a little effort in order to understand its synthax.
---

## Self Assessment

??? Question "True or False: Docker containers allow for reproducibility across all computing platforms"

    !!! Failure "False"

        While Docker allows you to quickly run software from other people, it may not work across every platform.

        There are different CPU architectures (`arm`, `amd64`, `x64, `x86`) deployed across cloud, computer workstations, laptops, and cellular phones. 

        Docker containers and their software can be cross-compiled across architectures, but this must be done by the creators.

??? Question "When is it advisable to not trust a Docker image?"

    !!! Success "When you cannot view its Dockerfile"

        Featured and Verified Docker images can be trusted, in general.

        User generated images should not be trusted unless you can view their Dockerfile, or build logs to determine what is actually in the container you are attempting to run.