# Introduction to Project Management

!!! Success "Learning Objectives"
        
        After this lesson, you should be able to:

        *  Discuss different levels of project management
        *  Describe tools and approaches to managing collaborative projects
        *  Describe best practices for computational project organization
        *  Understand benefits of establishing project management practices from the start of a project until after it ends

"**Project Management**" itself sounds a bit vague and broad. 

Here we use the term in two different contexts.

First, we'll go over the management of scientific labs, groups, and projects, talking about things like how to develop operations manuals, laying out roles and responsibilities, and plan out general project steps and the workflow connecting them. 

Next, we'll go over the management of cyberinfrastructure projects as [research objects](https://en.wikipedia.org/wiki/Research_Object) and how to organize them. 

Making sure your data, code, and documents are well-organized is crucial for future topics like version control and reproducibility.

## The Organization of Research Labs

This type of overall project management may be required for some grants, and while it may be tempting to put in the minimal effort on one of the many pieces of paperwork you're required to complete, this type of overall project planning can be very useful. 

### Project Governance 

??? Quote "Definitions"

    Project Governance is the set of rules, procedures and policies that determine how projects are managed and overseen.

    "The set of policies, regulations, functions, processes, and procedures and responsibilities that define the establishment, management and control of projects, programmes or portfolios." - [APM (2012)](https://www.academia.edu/44132624/APM_BODY_OF_KNOWLEDGE), [open.edu](https://www.open.edu/openlearn/mod/oucontent/view.php?id=27294&printable=1)

    [:simple-wikipedia: Wikipedia Definition](https://en.wikipedia.org/wiki/Project_governance)

No matter how small, i.e., even single person-run projects, a good Project Governance structure can help keep work on track and headed toward a timely finish.

Establishing a project governance document at the onset of a project is a good way of setting boundaries, roles and responsibilities, pre-registration about what deliverables are expected, and what the consequences will be for breaking trust.

??? Tip "Example Governance Documents"

    [Munoz-Torres et al. 2020](https://zenodo.org/record/3839120#.YyUJA-zMLzd)

### Project Design

The Turing Way offer a [lesson on Project Design](https://the-turing-way.netlify.app/project-design/project-design.html)

### Roles and Responsibilities

It can be easy for certain tasks to slip through the cracks. Established roles and responsibilities of teams can help ensure nobody gets saddled with too much work, and reduces chances of disputes among collaborators.

### Collaboration

[Sahneh & Balk et al. (2020)](https://doi.org/10.1371/journal.pcbi.1008879){target=_blank} Ten simple rules to cultivate transdisciplinary collaboration in data science, discuss the interactions amongst teams of diverse researchers.

<figure markdown>
  <a href="https://doi.org/10.1371/journal.pcbi.1008879" target="blank" rel="10 simple rules">![10 simple rules](https://journals.plos.org/ploscompbiol/article/figure/image?size=large&id=10.1371/journal.pcbi.1008879.g001){ width="600" } </a>
    <figcaption> [Sahneh & Balk et al. (2020)](https://doi.org/10.1371/journal.pcbi.1008879){target=_blank} Fig 1. How the rules work together and intersect. There are multiple components in collaborations: person–person interactions, person–technology interactions, person–data interactions, and data–technology interactions. Synergy between these components results in a successful collaboration. </figcaption>
</figure>


### Breakout Discussion

Now we will do a breakout discussion section to talk about overall project management.

??? Question "What are some project management strategies that you have found to work well?"

??? Question "What is an example of a poorly managed project you were involved in? What contributed to this feeling?"

??? Question "Why do you think effective project management is important to Open Science?"

??? Question "What are some limitations to you, your lab/group, or your domain?"

---

## Open Source Research Software Maintainer

Becoming an open source software maintainer is not to be taken likely.

<figure markdown>
  <a href="https://m.xkcd.com/2347/" target="blank" rel="xkcd">![xkcd](https://imgs.xkcd.com/comics/dependency.png){ width="400" } </a>
    <figcaption> [XKCD Dependency](https://m.xkcd.com/2347/){target=_blank} </figcaption>
</figure>

## Research Infrastructure Roles

??? List "Team roles and titles"

    Again, The Turing Way provide an excellent set of examples of [infrastructure job titles and roles](https://the-turing-way.netlify.app/collaboration/research-infrastructure-roles.html){target=_blank} on software driven projects:

    **Community Manager** - "responsibilities include establishing engagement, organising community spaces and events, supporting people through inclusive practices, developing and maintaining resources, growing and evaluating use cases and collaborating with people involved in research and scientific communities." ([1](https://the-turing-way.netlify.app/collaboration/research-infrastructure-roles/community-manager.html#community-managers-overview){target=_blank}, [2](https://www.turing.ac.uk/research/research-programmes/tools-practices-and-systems/community-management-and-open-research))

    ![community manager](https://www.turing.ac.uk/sites/default/files/inline-images/tps%20graphic_0.jpg){width=400}

    **[Data Science Educator](){target=_blank}** - 

    **[Data Scientist](){target=_blank}** - 

    **[Data Steward](){target=_blank}** - 

    **[Developer Advocate](){target=_blank}** - 

    **[DevOps Engineer](){target=_blank}** - 

    **[Research Application Manager (RAM)](){target=_blank}** - 

    **[Research Software Engineer](){target=_blank}** - 



When we talk about project management in this section, we mean the way you organize data, code, images, documents, and documentation within a project. 

If you've ever had to navigate someone else's computer or repository, you probably know that a poorly organized project can greatly reduce its openness. On the other hand, a well-organized project can:

-   make your work more accessible to others
-   help collaborators effectively contribute to your project
-   ease the growing pains of a rapidly scaling project
-   make life much easier for your future self

It can be easy to overlook sound project management, opting for a "just get it done ASAP" approach to your work, but in our experience, this almost always costs you more time in the end. The best time to introduce good project management is at the start of a project, and the second best time is right now. 

An hour spent reorganizing a project today may save you days of headaches later on.

There is no single "right way" to organize and manage a project, and your specific needs may vary, but we will introduce a basic framework that can get you headed in the right direction. It will also help us introduce more advanced topics later on, as many of the skills and approaches we teach will be far more effective if the basic project organization is sound.

For the duration of the workshop, we will be working with a basic example project pipeline, going from raw data to a simple report. While this example project is vastly simplified from a real research project, the basic steps are still found in most projects. The skills you learn to improve this example project will translate to larger and more complex research projects.


