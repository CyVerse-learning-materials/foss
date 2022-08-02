# The Unix Shell, Git and Github: an Introduction

### Requirements

Command Line Interfaces (CLI) are found throughout all Operating Systems, however we recommend the use of the Unix CLI. If you have a Unix based machine such as Linux/Ubuntu (or other Linux distributions), macOS, you are ready for the next step. If you use a Windows machine, please install the [Windows Subsistem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install) as seen in the [Before FOSS Starts](installation.md#Software) section.

---

## The Unix Shell

The computer is a tool. It evolved over the years from being an intricated calculator into an interactive machine with thousands of moving parts that keep us all connected through the Internet. It is now the norm to use a mouse, keyboard, and seeing flashing images on our screens through the Graphical User Interface (GUI). GUIs are central to the way we interact with computers, however, to best take advantage of the computer's many systems, one needs to learn of the **Command Line Interface (CLI)**. The CLI sees the computer stripped down to only a [Terminal](https://en.wikipedia.org/wiki/Terminal_emulator) from where one can run powerful commands executed through the [Shell](https://en.wikipedia.org/wiki/Shell_(computing)).

Whilst the GUI allows for *better accessbility* to a computer, the CLI allows for *advanced usage* of one's computer. 

### CLI vs Terminal vs Shell

- [CLI (Command Line Interface)](https://en.wikipedia.org/wiki/Command-line_interface): an interface that receives commands (and gives output) from a user in the form of lines of text.
- [Terminal](https://en.wikipedia.org/wiki/Terminal_emulator): **the** text based interface window.
- [Shell](https://en.wikipedia.org/wiki/Shell_(computing)): a computer program and scripting language that presents a CLI which allows you to control your computer using commands.

The **Shell** sends commands to the computer through the **CLI** accessible through a **Terminal** window

### Things-to-Know About Commands

- Shell commands are used to **navigate**, **visualize**, **modify** (files/folders) and **automate** (processes), and can only be executed through the shell's terminal window.
- For every command, typing `man` (manual) before the command, will open the manual for said command.
```
man ls
```
    - Doing the above command will result in opening the *manual* for the `ls` command. You can exist the man page by pressing `q`.
- Each command has **flags**, or options, which are summoned with a `-`, such as `<command> -<flag>`.
```
ls -a -l -h
```
    - Doing the above command calls for the `-a` (all), `-l` (long), `-h` (human readable) flags. This causes `ls` to output a list of *all* files (inculding hidden files/folders) with human readable file size (e.g., it will list 3MB instead of 3000000), permissions, creator, and date of creation.
    - If you do not know what flags are available, you can refer to the `man` command (or for many tools, use the `-h` (help) flag).
- `.` refers to *current* directory; `..` refers to *above* directory; `/` is the directory separator; `~` indicates the home directory
```
ls .            # lists files and folders in the current directory
ls ..           # lists files and folders in the above directory
ls ~            # lists files and folders in the home directory
ls ~/Documents  # lists files and folders in Documents (a folder present in the home directory)
```

### Introductory Shell Commands

!!! info "A short tutorial introducing the Shell"
        Here below are quick explanations of a few elementary commands that will help you orient and navigate your files and folders through the Shell. If you would like to follow along the explanations for each command, feel free to download and unzip the [shell-lesson-data.zip](https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip) file from the [Shell's Carpentry module](https://swcarpentry.github.io/shell-novice/setup.html).

        ??? question "Don't have access to a GUI?"
                Following along on a machine with no access to a GUI? Execute the following commands:
                ```
                sudo apt install unzip
                wget https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip
                unzip shell-lesson-data.zip
                ``` 

#### Navigation

| Command | Explanation |
|---|---|
|`pwd`| print working directory |
|`ls`| list content of folder |
|`cd`| change directory |

```
pwd
```

#### Working with Files and Directories

| Command | Explanation |
|---|---|
|`mkdir`| make a directory |
|`touch`| creat empty file |
|`nano` or `vim`| text editors |
|`mv`| move command |
|`cp`| copy command | 
|`rm`| remove command |

---

## Git and Github