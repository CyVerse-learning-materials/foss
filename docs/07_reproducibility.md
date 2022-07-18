# Reproducibility

The so-called reproducibility crisis (see [1](https://www.nature.com/articles/533452a) , [2](https://www.nature.com/collections/prbfkwmwvz) , [3](https://blogs.scientificamerican.com/observations/to-fix-the-reproducibility-crisis-rethink-how-we-do-experiments/)) is something you have
probably heard about (and maybe one of the reasons you have come to FOSS).
Headlines in the media (such as [Most scientists can't replicate studies by their peers](https://www.bbc.com/news/science-environment-39054778))
definitely give pause to researchers and ordinary citizens who hope
that the science used to recommend a course of medical treatment or design
self-driving cars is sound.

## What is Reproducibility?

Before we go further, it's actually important to ask what is reproducibility?

!!! Question

        How do you define reproducible science?
        
    ??? success "Answer"
        In [Reproducibility vs. Replicability](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5778115/), Hans Plesser gives the following
        useful definitions:

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
(see for example [Ross-Ibarra Lab code of conduct](http://www.rilab.org/expectations.html) or [Bahlai Lab Policies](https://github.com/BahlaiLab/Policies/blob/master/Project_completion.md)).
Reproducibility comes from our obligations and desires to work ethically,
honestly, and with confidence that the data and knowledge we produce is done
has integrity. Reproducibility is also a "spectrum of practices", not a
single step. (See figure below from [Peng 2011](ttps://science.sciencemag.org/content/334/6060/1226)).

![spectrum](assets/reproducibility-spectrum.png)

Assuming you have taken in the potentially anxiety inducing information above,
the most important thing to know is that there is a lot of help to make
reproducibility a foundation of all of your research.

## Necessary components

## Containers
