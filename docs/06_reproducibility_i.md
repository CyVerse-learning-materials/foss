# Repeatability and Reproducibility

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

## Reproducibility tutorial I: Setting up your project

This section is going to cover a short tutorial spanning this and [the next](07_reproducibility_ii.md/#reproducibility-tutorial-ii-using-snakemake-and-containers-for-your-workflow) reproducibility sessions. In this tutorial you're going to use software and tools discussed today and previously in FOSS.

What you'll be using:

- [GitHub](https://github.com/) (already installed)
- [Docker](https://www.docker.com/) (already installed)
- [Snakemake](https://snakemake.readthedocs.io/en/stable/)
- [Conda](https://docs.conda.io/en/latest/)
- [JetStream2](https://jetstream-cloud.org/)

### Connecting to JetStream2

JetStream2 is a service that allows users to create and connect to Virtual Machines (VMs). We have created a number of virtual machines for you to connect to and follow this tutorial, however, you're welcome to use your own machine for this.

!!! Warning 
        For security reasons, the google sheets with the IP addresses and passwords is shared solemnly through the HackMD.

In order to connect to JetStream2, you will be using the SSH (Secure Shell) protocol, which allows connections over a network. To connect to a machine, open a termial and enter your user number and IP as follows and press enter:

```
ssh <user>@<IP>
```

When asked for the password, copy and paste the corresponding password from the google sheets and press enter. **Note**: you will NOT see the password being pasted (but it's there!)

### Install Conda

[Conda](https://docs.conda.io/en/latest/) is a popular tool for installing software. Typically software you want to use requires other software (dependancies) to be installed. Conda can manage all of this for you. Each available Conda package is part of a “recipe” that includes everything you need to run your software. There are different versions of Conda, including some specific for bioinformatics like [Bioconda](https://bioconda.github.io/). We will install Conda and then use it to install some of the tools we need. We will install a lightweight version of Conda called [MiniConda](https://docs.conda.io/en/latest/miniconda.html).

```
# Download conda and add right permissions
wget https://repo.anaconda.com/miniconda/Miniconda3-py39_4.12.0-Linux-x86_64.sh
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

### Installing packages through conda

Conda makes installing packages simple. Due to it's widespread use, conda has a large number of widely available packages; You can search for these in at https://anaconda.org/.

We are going to to use conda to install snakemake.

```
# See what snakemake version are available
conda search -c bioconda snakemake

# Let's choose the latest, in this case 7.16.0
conda install -c bioconda -c conda-forge -y snakemake=7.16.0
```

conda will proceed and install all the dependencies required by snakemake

```
# verify the installation
snakemake --version
```

You can view the installed conda packages by doing 

```
conda list
```

In order to make your environment reproducible, conda allows you to export your environment.

```
conda env export > myenv.yml
```

### GitHub repository setup and documentation

- Create a repository on GitHub to document your work:
    - On [GitHub](https://github.com/), navigate to your account page and create a new repository (add a README to create structure!)
    - Clone your repository to the VM with `<repository_url>.git` (find the url under the green **Code** button)
    - Add your history to the README file with `history >> README.md` and add meaninigful comments. `.md` is the MarkDown extension that is used for formatting in GitHub (and HackMD!); Read more about [here](https://www.markdownguide.org/basic-syntax/). A well documented document may look similar to:

    ```
    # reproducibility-tutorial

    ## Computer setup

    ### Download conda and add right permissions
    wget https://repo.anaconda.com/miniconda/Miniconda3-py39_4.12.0-Linux-x86_64.sh
    chmod +x Miniconda3-py39_4.12.0-Linux-x86_64.sh

    ### install conda silenty (-b), update (-u) and initial start
    ./Miniconda3-py39_4.12.0-Linux-x86_64.sh -b -u
    ~/miniconda3/bin/conda init

    ### Restart bash so that conda is activated
    source ~/.bashrc

    ### See what snakemake version are available
    conda search -c bioconda snakemake

    ### Let's choose the 7.16.0
    conda install -c bioconda -c conda-forge -y snakemake=7.16.0

    ### verify the installation
    snakemake --version

    ### Exported conda environment
    conda env export > myenv.yml

    ### Cloned git repository
    git clone https://github.com/<user>/<repository>.git
    ```

    - Add, commit and push your changes

    ```
    git add .
    git commit -m "adding initial documentation"
    git push
    ```
    
    - Github will ask for you username and password; When asked about the password, input a GitHub token. To create a token go to **Account > Settings > Developer settings > Personal access tokens > Generate new token**, add a note, select all the necessary permissions and select Generate token; **Copy the token and use it as password!**
