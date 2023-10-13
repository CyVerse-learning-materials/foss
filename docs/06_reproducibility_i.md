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

## Software Dependency Hell

Think for a moment about all the branching possibilities for how a computer could be set up:

- hardware: CPUs, GPUs, RAM
- Operating system: many flavors of Linux, MacOS, Windows
- Software versions: R, Python, etc.
- Package versions: specific R or Python packages, etc.

Simply trying to get the same setup as anyone else is difficult enough, but you can also run into all sorts of dependencies. Let's say you try to update a package to match the version someone else used for a project. However, after updating it, you realize you need to update 3 other packages. After that, you realize you need a newer version of R. You finally manage to get everything set up, but when you go back to a different project the next week, nothing works! All those updates made your code for your other project break. You spend a week fixing your code to work with the newer software, and you're finally done... but now your advisor gives you a dataset 10x the size and says you'll need to run it on the cloud. You throw your laptop out the window and move to the woods to live the life of a hermit.

All jokes aside, dealing with software dependencies can be extremely frustrating, and so can setting stuff up on a remote location. It can be even more frustrating if you're trying to reproduce results but you don't actually know the entire software stack used to generate them.


## Defining Reproducibility

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

## Stratgies for Improving Repeatability

### Automation

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

### Get off your own machine

More and more work is being done somewhere other than a personal computer. This could be an HPC cluster at a university or a cloud computing provider. "Cloud" just means somebody else is handling the computers, and you get to use them when you need to, typically for a price. Some 'cloud' options include: Binder, Colab, and Cyverse VICE and Github Codespace. 

The take home message on Cloud is that it is a great way to make your work more reproducible, as you can share a link to your work, and anyone can run it without having to install anything.

### Software Management

Have you ever tried to run a script, only to realize you had updated a package without knowing, and now the script doesn't work? 

**Package managers** that create and manage **custom environments** can be extremely helpful in keeping software versions aligned with projects.

In Python, it is common to use `pip` and a `requirements.txt` file, and in R, the `renv` package can be used to keep package versions stable within individual projects.

---
## Conda

[Conda](https://docs.conda.io/en/latest/){target=_blank} is an open-source package management system and also an environment management system. This means that it helps manage libraries and dependencies within different projects and can isolate different versions of packages and even Python itself into different environments to maintain project consistency and avoid conflicts between package versions.

Here's a breakdown of what Conda offers:

* **Environment Management:**

    Conda allows users to create isolated environments for their projects. Each environment can have its own set of packages, dependencies, and even its own version of Python. This ensures that different projects can have their own specific requirements without interfering with each other. It allows for consistent and reproducible results across different systems and setups

* **Package Management:**

    Beyond managing environments, Conda is also a package manager. It can install specific versions of software packages and ensure that all dependencies are met. While it's commonly associated with Python, Conda can also manage packages from other languages. You can search for packges at https://anaconda.org/.

* **Cross-Platform:**

    Conda is platform-agnostic. This means you can use it across various operating systems like Windows, macOS, and Linux.

* **Repository Channels:**

    Conda packages are retrieved from repositories known as channels. The default channel has a wide array of commonly used packages. However, users can add third-party channels, such as "conda-forge", to access even more packages or specific versions of packages. You can specify the channel by using the `-c` flag when installing packages.

* **Integration with Anaconda:**

    Conda is the package and environment manager for the Anaconda distribution, which is a distribution of Python and R for scientific computing and data science. However, Conda can be used independently of Anaconda.



## Reproducibility tutorial

This section is going to cover a short tutorial on reproducibility using software, tools and practices discussed today and throughout FOSS.

!!! Note "OS of choice"

    This tutorial will be performed using the [CyVerse CLI (Command Line Interface)](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621). However, if you'd like to use your own computer feel free to! If you're on Mac or Linux, open your terminal; If you're on Windows, use the Windows Subsystem for Linux (WSL)

    ??? Tip "How to Scroll in Cyverse(Tmux) Cloud Shell"
        
        If you're using the Cyverse Cloud Shell, you can scroll up and down by pressing `Ctrl + b` and then `[` to enter scroll mode. You can then use the arrow keys to scroll up and down. Press `q` to exit scroll mode.

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

    Conda should now be installed and can be used to install other necessary packages! 

When you start a Cyverse Cloud shell, it will start you in the directory: 
```
/home/user/work 
```
Let's change to the Data-Store directory, where we will be working for the rest of the tutorial. This is the Cyverse cloud-storage directory where you can put all your data and files. 

```
cd home
cd <username>
```
Create our own environment (select `y` when prompted).

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

We are going to to use conda to install Mamba, NextFlow, Salmon and FastQC.

```
# Activate Conda using 
conda activate

# Install Mamba
conda install -c conda-forge mamba
```

You can either use the anaconda website to search for packager, or use the [conda search feature](https://docs.conda.io/projects/conda/en/latest/commands/search.html) (but also, Google is your best friend.)

!!! Note "Makes things faster with Mamba"

    Mamba is a reimplemetation of Conda using the C++ language, allowing for much quicker Conda experience. The tutorial is going to use **Mamba** instead of **Conda**, but you can always replace `mamba` with `conda`!

!!! Info "Conda channels"

    Conda operates through **channels**, specififc repositories where packages are stored. Specific packages sometimes may appear in multiple channels, however it is always helpful to specify a channel with the `-c` flag.

Install Nextflow and verify its installation with the following commands: 

```
# Install NextFlow
mamba install -c bioconda nextflow=22.10.6     # Press y when prompted with [Y/n]!

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

Tutorial files avaiable [here](https://github.com/CyVerse-learning-materials/foss/blob/mkdocs/docs/assets/tutorials/nf_foss_tut.tar.gz?raw=true). Use `wget` to download appropriate files and decompress files with `tar -xvf`.
```
wget -O nf_foss_tut.tar.gz https://github.com/CyVerse-learning-materials/foss/blob/mkdocs/docs/assets/tutorials/nf_foss_tut.tar.gz?raw=true
tar -xvf nf_foss_tut.tar.gz
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
    
- When trying to `commit` git will ask who you are:
```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

- When trying to `push`, Github will ask for you username and password; When asked about the password, input a GitHub token. To create a token go to **Account > Settings > Developer settings > Personal access tokens > Generate new token**, add a note, select all the necessary permissions and select Generate token; **Copy the token and use it as password!** [FOSS has covered how to create a Token in Week 0: The Shell and Git, necessary in order to modify code locally](https://foss.cyverse.org/00_basics/#adding-code-locally).

### Workflow Tutorial using Nextflow

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
wget -O nf_foss_tut.tar.gz https://github.com/CyVerse-learning-materials/foss/blob/mkdocs/docs/assets/tutorials/nf_foss_tut.tar.gz?raw=true
tar -xvf nf_foss_tut.tar.gz
```

We can now look at the decompressed directory structure by using `tree nf_foss_tut` (if you don not have `tree` installed, you can install it with `sudo apt-get tree` or `mamba install -c conda-forge tree`).

```
.
├── nf_foss_tut
│   ├── data
│   │   └── ggal
│   │       ├── gut_1.fq
│   │       ├── gut_2.fq
│   │       ├── liver_1.fq
│   │       ├── liver_2.fq
│   │       ├── lung_1.fq
│   │       ├── lung_2.fq
│   │       └── transcriptome.fa
│   ├── example_script.nf
│   ├── script1.nf
│   ├── script2.nf
│   └── script3.nf

2 directories, 11 files
```
!!! Info "Files information"

    - Scripts 1 through 3 (`script<number>.nf`) and `example_script.nf` are the NextFlow files
    - `<file>.fq` are fastq files, containing DNA sequences and quality scores
    - `transcriptome.fa` is all of the RNA data from the organism (*G.gallus*)

Let's look at one of the NextFlow files (`.nf`)

!!! Info "Understanding the Nextflow synthax"

    Nextflow is powerful workflow manager as it can be deployed on HPCs and Clouds. However, it does require a little effort in order to understand its synthax. 
        
    The synthax is broken down into:
        
    - Defining parameters early
    - Defining Processes to be executed
    - Defining Channels (blocks that work asynchronously that encapsulate other processes)

    More complex scripts include [operators](https://www.nextflow.io/docs/latest/operator.html) (channel manipulation) and [executors](https://www.nextflow.io/docs/latest/executor.html) (to run things on the cloud and HPC); Nextflow can also be used to run and orchestrate [containers](https://www.nextflow.io/docs/latest/container.html).
        
    As a good example, let's look at `example_script.nf`:
    ```
    /*                                                                                      
        * pipeline input parameters                                                            
        */                                                                                      
        params.reads = "$baseDir/data/ggal/gut_{1,2}.fq"                                        #
        params.transcriptome = "$baseDir/data/ggal/transcriptome.fa"                            # The parameters are set early in the script
        params.multiqc = "$baseDir/multiqc"                                                     #
        params.outdir = "results"                                                               #

        println """\                                                                            #
                R N A S E Q - N F   P I P E L I N E                                             #
                ===================================                                             #
                transcriptome: ${params.transcriptome}                                          # Print statement that will show once the script
                reads        : ${params.reads}                                                  # is executed
                outdir       : ${params.outdir}                                                 #
                """                                                                             #
                .stripIndent()                                                                  #

        /* 
         * create a transcriptome file object given then transcriptome string parameter
         */
        transcriptome_file = file(params.transcriptome)                                         # Convert input file to string
        
        /* 
         * define the `index` process that create a binary index 
         * given the transcriptome file
         */
        process index {                                                                         # First process, named "index"
        conda "bioconda::salmon"                                                                # Defines what package is necessary
                                                                                                #
        input:                                                                                  ## 
        file transcriptome from transcriptome_file                                              ##
                                                                                                ## Defines the input and output of the process
        output:                                                                                 ##
        file 'index' into index_ch                                                              ##
                                                                                                #
        script:                                                                                 #
        """                                                                                     #
        salmon index --threads $task.cpus -t $transcriptome -i index                            # Command to execute
        """                                                                                     #
        }                                                                                       #


        Channel                                                                                 # Channels allows for scripts to work asynchronously, without waiting for received process.
        .fromFilePairs( params.reads )                                                          # .fromFilePairs method creates a channel emitting the file pairs matching a "glob" pattern provided by the user. 
        .ifEmpty { error "Cannot find any reads matching: ${params.reads}"  }                   # .ifEmpty emits a value specified if no input is found.
        .set { read_pairs_ch }                                                                  # .set operator assigns the channel to a variable whose name is specified as a closure parameter.
                                                                                                #                
        process quantification {                                                                # Second process, named "quantification"
        conda "bioconda::salmon"                                                                # Defines what package is necessary
        input:                                                                                  #
        file index from index_ch                                                                ##
        set pair_id, file(reads) from read_pairs_ch                                             ##
                                                                                                ## Defines the input and output of the process
        output:                                                                                 ##
        file(pair_id) into quant_ch                                                             ##
                                                                                                #
        script:                                                                                 #
        """                                                                                                     #
        salmon quant --threads $task.cpus --libType=U -i index -1 ${reads[0]} -2 ${reads[1]} -o $pair_id        # Command to execute
        """                                                                                                     #
        }        
    ```

    Nextflow has in-depth documentation that can be found [here](https://www.nextflow.io/docs/latest/).

The 3 scripts' tasks are:

- Script 1 creates the transcriptome index file, necessary for downstream processes.
- Script 2 collects read files by pairs (fastq files come in pairs) and performs quantification.
- Script 3 performs quality control and summarizes all findings in a single report.

#### Script 1: Indexing transcriptome

Execute script 1
```
nextflow run script1.nf
```

The output will be something similar to
```
N E X T F L O W  ~  version 22.10.6
Launching `script1.nf` [admiring_banach] DSL1 - revision: 66baaf0091
R N A S E Q - N F   P I P E L I N E    
===================================
transcriptome: /home/user/work/folder/nf_foss_tut/data/ggal/transcriptome.fa
reads        : /home/user/work/folder/nf_foss_tut/data/ggal/*_{1,2}.fq
outdir       : results

executor >  local (1)
[f0/0a72bc] process > index [100%] 1 of 1 ✔
```
This is Nextflow's way of telling you that the process has been executed and completed. You should now have a new folder called `work`. Execute `tree work` to see what is inside the folder.
```
work
└── f0
    └── 0a72bc4d10dba1df2899b0449519e9
        ├── index
        │   ├── duplicate_clusters.tsv
        │   ├── hash.bin
        │   ├── header.json
        │   ├── indexing.log
        │   ├── quasi_index.log
        │   ├── refInfo.json
        │   ├── rsd.bin
        │   ├── sa.bin
        │   ├── txpInfo.bin
        │   └── versionInfo.json
        └── transcriptome.fa -> /home/user/work/folder/nf_foss_tut/data/ggal/transcriptome.fa

3 directories, 11 files
```
These are new index files from the transcriptome provided.

#### Script 2: collecting pairs and performing quantification

Execute with
```
nextflow run script2.nf -resume --reads 'data/ggal/*_{1,2}.fq'
```

The output should look like
```
N E X T F L O W  ~  version 22.10.6
Launching `script2.nf` [stupefied_swirles] DSL2 - revision: d3b0d0121c
R N A S E Q - N F   P I P E L I N E    
===================================
transcriptome: /home/user/work/folder/nf_foss_tut/data/ggal/transcriptome.fa
reads        : data/ggal/*_{1,2}.fq
outdir       : results

executor >  local(3)                                                                                
[c1/6ece54] process > index [100%] 1 of 1, cached: 1 ✔                          
[1b/10b8d5] process > quantification (1) [100%] 3 of 3 ✔
```

#### Script 3: QC and report

Execute with
```
nextflow run script3.nf -resume --reads 'data/ggal/*_{1,2}.fq'
```

The output should look like 
```
N E X T F L O W  ~  version 22.10.6
Launching `script3.nf` [voluminous_goodall] DSL1 - revision: d118356290
R N A S E Q - N F   P I P E L I N E    
===================================
transcriptome: /home/user/work/folder/nf_foss_tut/data/ggal/transcriptome.fa
reads        : data/ggal/*_{1,2}.fq
outdir       : results

executor >  local (4)
[c1/6ece54] process > index                   [100%] 1 of 1, cached: 1 ✔
[7a/4e9ce4] process > quantification (lung)   [100%] 3 of 3, cached: 3 ✔
[34/d60dbb] process > fastqc (FASTQC on lung) [100%] 3 of 3 ✔
[e9/e7c392] process > multiqc                 [100%] 1 of 1 ✔

Done! Open the following report in your browser --> results/multiqc_report.html
```

As you can notice, the report is an `html` file that can be opened with a browser. Navigate to this file in the Cyverse Data Store and open it. 

### Document your work

**Document your work.** You should still be in your GitHub folder. Summarize your steps and work on your README file, and push your changes! This will ensure that your work and files are saved and have a valid version that you can come back to in the future if you ever require to.

??? Question "What if my files are too big?"
        
    You can always use a `.gitignore`, a file that within itself has defined what should be saved in GitHub when pushing a commit, and what shouldn't be saved. An alternative is to move your files outside of the respository that you're pushing ("stashing").

---

