# Reproducibility I: Software Environments

!!! Success "Learning Objectives"
        
    After this lesson, you should be able to:

    *  Describe what reproducibility is
    *  Discriminate between reproducibility, replicability, and repeatability
    *  Explain why reproducible research is valuable 
    *  Set up a software project with an environment



<br>
<br>
<br>


## Reproducible Scientific Computing

<br>

!!! Quote "Defining Reproducibility"

    "Reproducing the result of a computation means running the same software on the same input data and obtaining the same results." Rougier et al. 2016



<br>
<br>
<br>



<figure markdown>
  <a target="blank" rel="open science">![open science](../assets/reproducibility-spectrum.png){ width="600" } </a>
    <figcaption> [Peng 2011](https://science.sciencemag.org/content/334/6060/1226)</figcaption>
</figure>




<br>
<br>

!!! question "Discussion Question"
	**Have you ever had any hurdles to reproducing your work?**

	- Have you ever run into a problem that prevented you from generating the same results, figures, analyses as before?
	- Have you ever lost time trying to figure out how you (or a collaborator) got a particular result?
	- What were the issues you ran into, and how might you have solved them?
<br>
<br>
<br>


<br>

### Interactive (ie, point-and-click) Computing

<figure markdown>
  <a target="blank" rel="open science">![open science](assets/pointer.png){ width="150" } </a>
    <figcaption></figcaption>
</figure>

Definition: Manually navigating a mouse across a graphical user interface (GUI) and running commands by selecting from menu options. 

<br>






#### Advantages 

* Inuitive and easy to navigate a GUI and click buttons


#### Limitations

* It can be slow to sequence through hundreds of clicks to accomplish an analysis. 
* Less reproducible - Cumbersome to write and follow a click-by-click tutorial 

<br>
<br>
<br>
<br>

### Scripted Computing

<figure markdown>
  <a target="blank" rel="open science">![open science](assets/code.jpg){ width="400" } </a>
    <figcaption></figcaption>
</figure>


Definition: Removing the GUI, and instead instructing the computer to run a series of custom commands using a scripting/coding language. 

We are **automating** what used to take many manual clicks. 


We can write scripts to install software, clean data, run analyses, and generate figures.

<br>

#### Advantages 
* Much faster to run through commands
* The script runs identically every time, reducing the human element 
* Easy for someone else to quickly reproduce the exact analysis and result
* Enables analysis tasks to scale up 

<br>

#### Challenges 
* Requires deeper computer knowledge
* More upfront effort to produce the script




<br>
<br>





!!! question "Discussion Question"
	**What are some tasks you have automated or want to automate?**

	- Have you ever successfully automated a task?
	- Found a way to make something scale or take less time? 
	- What was the task, and how did you do it? 
	- Are there any things you wish you could automate?
	- What are some barriers to automating them?


<br>
<br>
<br>
<br>


## Scripting Languages

Python, R, Javascript, Matlab

base libaries and additional packages

Python Standard Library

R Base Package

<br>
<br>
<br>
<br>

## Install Scripting Languages and Packages

When you download and install software onto your computer, it will typically install it in a set of specific directories that we call the **System Path**.

### System Path

The 'system path' often referred to simply as **PATH** in the context of computing refers to the set of directories in which the operating system looks for executable files when a command is issued. 

When you go to launch an application by clicking on a desktop icon or with a CLI command, the computer will search for the application within the PATH directories. If it finds the executable, it will launch. 

!!! Tip "Find the PATH on your computer"

    In Linux and Mac Terminal

    `echo $PATH`

    <br>

    In Windows Terminal

    `echo %PATH%`

<br>
<br>

!!! Warning 

    The PATH prefers one version of software




<br>
<br>
<br>
<br>

## Computing Environment


- **Hardware**: CPUs, GPUs, RAM
- **Operating system & version**: many flavors of Linux, MacOS, Windows
- **Software versions:** R, Python, etc.
- **Package versions:** specific R or Python packages, which often depend on other packages

<br>
<br>

#### The scripts you create:

* Were designed to work in _your_ specific computing environment 
* May not work on your computer in the future, because your computing enviroment will probably change (eg., updated software versions)
* May not work on someone else's computer because their computing environment is different

<br>
<br>
<br>
<br>

### Software Dependency Hell

Sometimes, it can be _nearly impossible_ to get your computing environment correct enough to run someone else's code.

This can caused by incorrect software versions of the packages you are using or their dependencies.

Updating software installed in the **system path** - to make new code work - can break old code!





<br>
<br>
<br>

## Environment Managers 

One solution to software dependency hell is to use an Environment Manager

An environment manager allows you to create **multiple** and **isoloted** system paths. You can create unique environments that have the specific software version to run specific scripts.

<br>

### :simple-anaconda: Conda - Open Source Environment Manager



[Conda](https://docs.conda.io/en/latest/) is a popular and open source environment manager tool that can be installed on any operating system (Windows, MacOS, Linux).

* Users can create environments that have their own set of packages, dependencies, and even their own version of Python.
* Projects can have their own specific requirements without interfering with each other
* It allows for consistent and reproducible results across different systems and setups


<br>
<br>

### Renv - Environment Manager for R
<br>

## Package Managers

A software tool to find, download, and install software packages onto your computer. 

### :simple-anaconda: Conda 
Conda is also a package manager. It downloads and installs software packages from the repository [Conda-Forge](https://conda-forge.org/). While it's commonly associated with Python, Conda can also manage packages from other languages including R, Django, Celery, PostgreSQL, nginx, Node.js, Java programs, C and C++, Perl, and more.


### :simple-python: Pip
[Pip](https://pypi.org/project/pip/) is the package management tool for python. It downloads and installs python libraries from the python repository [PyPi](https://pypi.org/). It can be used together with Conda environment manager. 


  



<br>
<br>

### Sharing your Environment with Colleagues

In Python, it is common to use `pip` and a `requirements.txt` file, and in R, the `renv` package can be used to keep package versions stable within individual projects.

```
pip install -r requirements.txt
```


With `renv`, you need to share the `renv.lock'  which allows other people to duplicate the environment on their computer

`renv::restore()`



<br>
<br>


### Package/Library Repositories

[PyPI - Python Package Index](https://pypi.org/)

[Conda-Forge](https://conda-forge.org/) 

[R Comprehensive R Archive Network (CRAN)](https://cran.r-project.org/)



---

<br>
<br>
<br>
<br>
<br>
<br>

---

## Reproducibility Tutorial



!!! Note "OS of choice"

    This tutorial will be performed using the [CyVerse CLI (Command Line Interface)](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621). However, if you'd like to use your own computer feel free to! If you're on Mac or Linux, open your terminal; If you're on Windows, use the Windows Subsystem for Linux (WSL)

    ??? Tip "How to Scroll in Cyverse(Tmux) Cloud Shell"
        
        If you're using the Cyverse Cloud Shell, you can scroll up and down by pressing `Ctrl + b` and then `[` to enter scroll mode. You can then use the arrow keys to scroll up and down. Press `q` to exit scroll mode.



<br>
<br>


### Installing Conda

When you download and install Conda it comes in two different flavors: 



[Miniconda](https://docs.anaconda.com/free/miniconda/) - lightweight (500 mb) program that includes _Conda_, the environment and package manager, as well as a recent version of the Standard Python Library. 

[Anaconda](https://anaconda.org/) - a larger (2.5GB) program that includes _Conda_ and many more python libraries pre-installed (in Conda base environment), as well as graphical user interface, acccess to jupyter notebooks, and support for easily integrating the R language.



<figure markdown>
  <a href="https://medium.com/hydroinformatics/getting-started-with-conda-environment-332182d1e937" target="blank" rel="conda">![conda](https://miro.medium.com/v2/resize:fit:720/format:webp/0*ElVyaAsDHkIpNgxk.png) </a>
    <figcaption> Conda, Miniconda, and Anaconda. <br> [Taken from *Getting Started with Conda, Medium*](https://medium.com/hydroinformatics/getting-started-with-conda-environment-332182d1e937). </figcaption>
</figure>







??? Tip "Installing Conda"

    
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

<br>
<br>

??? tip "Tip: slow Conda? Try Mamba."

    Conda is known to take time processing some software installation. A solution is to use [Mamba](https://github.com/mamba-org/mamba), a reimplementation of Conda in C++ for quicker queries and installations. Mamba is then invoked by using `mamba` instead of `conda` (whilst keeping options and the rest of the command synthax the same). 

    The quickest way to install mamba is with `conda install -c conda-forge mamba`, or follow the official installation documentation [here](https://mamba.readthedocs.io/en/latest/installation/mamba-installation.html). 

<br>
<br>
<br>
<br>
<br>
<br>
### Environment Management with Conda

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
<br>
<br>
<br>
<br>

### Package management with Conda

We are going to to use conda to install Mamba, NextFlow, Salmon and FastQC.

```
# Activate Conda using 
conda activate

```




!!! Info "Conda channels"

    Conda operates through **channels**, specififc repositories where packages are stored. Specific packages sometimes may appear in multiple channels, however it is always helpful to specify a channel with the `-c` flag.



??? Question "Installing Packages"
    As an exercise, install Salmon and FastQC using Conda/Mamba.

    ??? Tip "Need a hand?"
        ```
        conda install -c bioconda salmon
        conda install -c bioconda fastqc
        ```

        Or you can do it with a single line (doable if packages are from the *same* channel)!
        ```
        conda install -c bioconda salmon fastqc
        ```


You can view the installed conda packages by doing 

```
conda list
```

In order to make your environment reproducible, conda allows you to export your environment.

```
conda env export > my_conda_env.yml
```
<br>
<br>
<br>
<br>

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


<br>
<br>
<br>
<br>

## Upload code and environment documents to Github

So someone can get your code and environment specifications to reproduce it on their computer

