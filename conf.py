#!/usr/bin/env python3
# Version 2.0, May 2020
# -*- coding: utf-8 -*-
#
# General information about the project.

import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from misc.cyverse_sphinx_conf import *  # noqa

project = 'FOSS Fall 2021'
copyright = '2021, CyVerse'
author = 'Michael Culshaw-Maurer'
version = '2.0'
release = '2.0'

epub_title = project
epub_author = author
epub_publisher = author
epub_copyright = copyright


html_theme_options = {
    "collapse_navigation" : False
}
