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

**Basics of Linux** ==================

Modern web, cloud, high performance computing, and most data science
applications are run on operating systems (OS) other than Microsoft
Windows. To do data intensive science, you need a familiarity with
[Linux](https://www.linux.org/). We\'ve scheduled several sections
during FOSS for working on Linux Systems, including on the [Command Line
Interface (CLI) and Unix
Shell](https://cyverse-foundational-open-science-skills-2020.readthedocs-hosted.com/en/latest/software_essentials/commandline.html),
and using [CyVerse\' Atmosphere
Cloud](https://cyverse-foundational-open-science-skills-2020.readthedocs-hosted.com/en/latest/CyVerse/atmo.html),
which runs Linux OS virtual machines.

The good news comes in two parts. First, whether you know it or not, you
**probably** already use Linux or a platform based on Linux, on a daily
basis. *Do you have an Android or iOS phone?* If you own a [Mac OS
X](https://itsfoss.com/mac-linux-difference/) device, you already enjoy
many of the benefits of a Linux-like OS, including access to a terminal.
Second, the Linux experience has generally been described as
[satisfying](https://www.wired.com/2016/01/i-moved-to-linux-and-its-even-better-than-i-expected/),
and many users report moving on from Windows OS to Linux comes [without
regret](https://www.freecodecamp.org/news/i-switched-from-windows-to-linux-here-are-the-lessons-i-learned-along-the-way-434da84ab63f/).

Over
[87%](https://en.wikipedia.org/wiki/Usage_share_of_operating_systems) of
the personal computer market still relies on the popular Microsoft OS.
However, the landscape changes completely for mobile apps (99% Linux or
Linux-like \[Android, iOS\], \<0.1% Windows), web (66% Linux, 32%
Windows), and cloud or HPC (100% Linux). Microsoft is acutely aware of
this disparity, and is actively working to integrate Linux into their
OS, including their [acquisition of
GitHub](https://www.theverge.com/2018/6/18/17474284/microsoft-github-acquisition-developer-reaction)
(and [how it has
changed](https://www.infoworld.com/article/3335256/github-after-microsoft-how-it-has-changed.html)),
and the release of [Windows Subsystem for Linux (WSL)
2](https://docs.microsoft.com/en-us/windows/wsl/wsl2-install).

*Common Linux Operating Systems*
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

The most common operating systems you\'ll see used for data science are:

-   [Alpine](https://alpinelinux.org/) - small and lightweight, useful
    in container applications
-   [CentOS](https://www.centos.org/) - stable, reliable, most commonly
    used on web and cloud servers
-   [Debian](https://www.debian.org/) - lightweight, utilitarian, stable
-   [Ubuntu](https://www.ubuntu.com/) - utilitarian, user friendly, most
    popular distribution, based on Debian

Enterprise Distributions:

-   [Red Hat](https://www.redhat.com/en) - based on open source
    software, you pay for customer support

*Installing Linux* \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

*Desktop-based Distributions* \~\~\~\~\~\~

-   [Ubuntu](https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop)
-   [Debian](https://www.debian.org/releases/stable/installmanual)
-   [Mint](https://linuxmint-installation-guide.readthedocs.io/en/latest/) -
    \"modern, elegant and comfortable operating system which is both
    powerful and easy to use.\"
-   [OpenSUSE](https://www.opensuse.org/) - \"The makers\' choice for
    sysadmins, developers and desktop users.\"

*Windows Subsystem for Linux*
\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

The so-called \"WSL\" is a complete linux subsystem that runs under
Windows 10. Microsoft recently announced [WSL
2.0](https://devblogs.microsoft.com/commandline/announcing-wsl-2/).

*Windows Linux Dual boot*
\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

Not ready to take the Linux plunge yet? Why not set up a Windows-Linux
dual boot?

-   [Ubuntu](https://www.lifewire.com/ultimate-windows-8-1-ubuntu-dual-boot-guide-2200654)
-   [Mint](https://itsfoss.com/guide-install-linux-mint-16-dual-boot-windows/)

*Package Managers* \~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

Linux uses [package
management](https://en.wikipedia.org/wiki/Package_manager) services to
install programs. If you\'re a R user, this should seem familiar.

Packages can be installed on the command line, or in graphic UI.

*Self Paced* \-\-\-\-\-\-\-\-\--

[Best Linux Distributions for
Beginners](https://itsfoss.com/best-linux-beginners/)

[Beginners Guide to
Linux](https://www.lifewire.com/beginners-guide-to-linux-4090233)

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
> href=\"<https://github.com/CyVerse-learning-materials/foss-2020/tree/master/software_essentials/websites.rst>\"
> target=\"blank\"\>Github Repo Link\</a\>
