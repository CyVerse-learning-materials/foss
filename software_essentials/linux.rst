.. include:: ../cyverse_rst_defined_substitutions.txt

|CyVerse_logo|_

|Home_Icon2|_
`Learning Center Home <http://learning.cyverse.org/>`_

**Basics of Linux**
==================

Modern web, cloud, high performance computing, and most data science applications are run on operating systems (OS) other than Microsoft Windows. To do data intensive science, you need a familiarity with `Linux <https://www.linux.org/>`_. We've scheduled several sections during FOSS for working on Linux Systems, including on the `Command Line Interface (CLI) and Unix Shell <https://cyverse-foundational-open-science-skills-2020.readthedocs-hosted.com/en/latest/software_essentials/commandline.html>`_, and using `CyVerse' Atmosphere Cloud <https://cyverse-foundational-open-science-skills-2020.readthedocs-hosted.com/en/latest/CyVerse/atmo.html>`_, which runs Linux OS virtual machines.

The good news comes in two parts. First, whether you know it or not, you **probably** already use Linux or a platform based on Linux, on a daily basis. *Do you have an Android or iOS phone?* If you own a `Mac OS X <https://itsfoss.com/mac-linux-difference/>`_ device, you already enjoy many of the benefits of a Linux-like OS, including access to a terminal. Second, the Linux experience has generally been described as `satisfying <https://www.wired.com/2016/01/i-moved-to-linux-and-its-even-better-than-i-expected/>`_, and many users report moving on from Windows OS to Linux comes `without regret <https://www.freecodecamp.org/news/i-switched-from-windows-to-linux-here-are-the-lessons-i-learned-along-the-way-434da84ab63f/>`_.

Over `87% <https://en.wikipedia.org/wiki/Usage_share_of_operating_systems>`_ of the personal computer market still relies on the popular Microsoft OS. However, the landscape changes completely for mobile apps (99% Linux or Linux-like [Android, iOS], <0.1% Windows), web (66% Linux, 32%  Windows), and cloud or HPC (100% Linux). Microsoft is acutely aware of this disparity, and is actively working to integrate Linux into their OS, including their `acquisition of GitHub <https://www.theverge.com/2018/6/18/17474284/microsoft-github-acquisition-developer-reaction>`_ (and `how it has changed <https://www.infoworld.com/article/3335256/github-after-microsoft-how-it-has-changed.html>`_), and the release of `Windows Subsystem for Linux (WSL) 2 <https://docs.microsoft.com/en-us/windows/wsl/wsl2-install>`_.

*Common Linux Operating Systems*
--------------------------

The most common operating systems you'll see used for data science are:

- `Alpine <https://alpinelinux.org/>`_ - small and lightweight, useful in container applications
- `CentOS <https://www.centos.org/>`_ - stable, reliable, most commonly used on web and cloud servers
- `Debian <https://www.debian.org/>`_ - lightweight, utilitarian, stable
- `Ubuntu <https://www.ubuntu.com/>`_ - utilitarian, user friendly, most popular distribution, based on Debian

Enterprise Distributions:

- `Red Hat <https://www.redhat.com/en>`_ - based on open source software, you pay for customer support

*Installing Linux*
-----------------

*Desktop-based Distributions*
~~~~~~

- `Ubuntu <https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop>`_
- `Debian <https://www.debian.org/releases/stable/installmanual>`_
- `Mint <https://linuxmint-installation-guide.readthedocs.io/en/latest/>`_ - "modern, elegant and comfortable operating system which is both powerful and easy to use."
- `OpenSUSE <https://www.opensuse.org/>`_ - "The makers' choice for sysadmins, developers and desktop users."

*Windows Subsystem for Linux*
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The so-called "WSL" is a complete linux subsystem that runs under Windows 10. Microsoft recently announced `WSL 2.0 <https://devblogs.microsoft.com/commandline/announcing-wsl-2/>`_.

*Windows Linux Dual boot*
~~~~~~~~~~~~~~~~~~~~~~~~

Not ready to take the Linux plunge yet? Why not set up a Windows-Linux dual boot?

- `Ubuntu <https://www.lifewire.com/ultimate-windows-8-1-ubuntu-dual-boot-guide-2200654>`_
- `Mint <https://itsfoss.com/guide-install-linux-mint-16-dual-boot-windows/>`_

*Package Managers*
~~~~~~~~~~~~~~~~

Linux uses `package management <https://en.wikipedia.org/wiki/Package_manager>`_ services to install programs. If you're a R user, this should seem familiar.

Packages can be installed on the command line, or in graphic UI.

*Self Paced*
----------

`Best Linux Distributions for Beginners <https://itsfoss.com/best-linux-beginners/>`_

`Beginners Guide to Linux <https://www.lifewire.com/beginners-guide-to-linux-4090233>`_

**Fix or improve this documentation:**

- On Github: |Github Repo Link|
- Send feedback: `Tutorials@CyVerse.org <Tutorials@CyVerse.org>`_

----

.. Comment: Place URLS Below This Line

   # Use this example to ensure that links open in new tabs, avoiding
   # forcing users to leave the document, and making it easy to update links
   # In a single place in this document

   .. |Substitution| raw:: html # Place this anywhere in the text you want a hyperlink

      <a href="REPLACE_THIS_WITH_URL" target="blank">Replace_with_text</a>


.. |Github Repo Link|  raw:: html

   <a href="https://github.com/CyVerse-learning-materials/foss-2020/tree/master/software_essentials/websites.rst" target="blank">Github Repo Link</a>
