# Introduction to Open Science

!!! Success "Learning Objectives"

        After this lesson, you should be able to:
        
        * Explain what Open Science is
        * Explain the components of Open Science
        * Describe the behaviors of Open Science
        * Explain why Open Science matters in education, research, and society
        * Understand the advantages and the challenges to Open Science
        * Identify who the practitioners of Open Science are
        * Understand the underlying Ethos of Open Science

## What is Open Science?

If you ask a dozen researchers this question, you will probably get just as many answers.

This means that Open Science isn't necessarily a set of checkboxes you need to tick, but rather a holistic approach to doing science.

??? Quote "Definitions"

    "Open Science is defined as an inclusive construct that combines various movements and practices aiming to make multilingual scientific knowledge openly  available,  accessible  and  reusable  for  everyone,  to  increase  scientific  collaborations  and  sharing of information for the benefits of science and society, and to open the processes of scientific knowledge creation, evaluation and communication to societal actors beyond the traditional scientific community." - [UNESCO Definition](https://www.unesco.org/en/natural-sciences/open-science){target=_blank}

    - [UNESCO's Recommendation on Open Science](https://unesdoc.unesco.org/ark:/48223/pf0000379949.locale=en){target=_blank}
    
    "Open Science is the movement to make scientific research (including publications, data, physical samples, and software) and its dissemination accessible to all levels of society, amateur or professional..." [ :material-wikipedia: Wikipedia definition](https://en.wikipedia.org/wiki/Open_science){target=_blank}

    Open and Collaborative Science Network's [Open Science Manifesto](https://ocsdnet.org/manifesto/open-science-manifesto/){target=_blank}

    ??? Example "Six Pillars :material-pillar: of Open Science"

        **:material-pillar: Open Access Publications**

        **:material-pillar: Open Data**

        **:material-pillar: Open Educational Resources**

        **:material-pillar: Open Methodology**
      
        **:material-pillar: Open Peer Review**

        **:material-pillar: Open Source Software**

        ??? Question "Wait, how many pillars :material-pillar: of Open Science Really Are There?"

            The number can be from [4 :material-pillar:](https://narratives.insidehighered.com/four-pillars-of-open-science/){target=_blank} to [8 :material-pillar:](https://www.ucl.ac.uk/library/research-support/open-science/8-pillars-open-science){target=_blank}

[![foster](https://www.fosteropenscience.eu/themes/fosterstrap/images/taxonomies/os_taxonomy.png)](https://www.fosteropenscience.eu/resources){target=_blank} 

Graphic by [Foster Open Science](https://www.fosteropenscience.eu/){target=_blank}


``` mermaid
flowchart LR

id1([open science]) --> id3([publishing]) & id4([data]) & id5([open source software])

id3([publishing]) -->  id41([access]) & id42([reviews]) & id43([methods]) & id44([educational resources]) 

id5([open source software]) --> id13([container registries]) & id10([services]) & id101([workflows]) & id12([version control systems])

id12([version control systems]) --> id101([workflows])

id13([container registries]) --> id101([workflows])

id14([public data registry]) --> id101([workflows])

id10([services]) --> id101([workflows]) 

id44([educational resources]) --> id21([university libraries])

id21([university libraries]) --> id101([workflows])

id22([federal data archives]) --> id101([workflows]) 

id4([data]) --> id21([university libraries]) & id22([federal data archives]) & id14([public data registries]) 

id101([workflows]) --> id15([on-premises]) & id16([commercial cloud]) & id17([public cloud])

```

Mermaid Diagram: Conceptual relationships of Open Science and cyberinfrastructure

!!! Tip ":dark_sunglasses: Awesome Lists of Open Science"

    Awesome lists were started on GitHub by [Sindre Sorhus](https://sindresorhus.com/){target=_blank} and typically have a badge associated with them [![[Awesome]([https://github.com/sindresorhus/awesome])](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome){target=_blank} 
    
    (There is even a [Searchable Index](https://awesome-indexed.mathew-davies.co.uk/){target=_blank} of Awesome Lists)

    We have created our own [Awesome Open Science List here](https://tyson-swetnam.github.io/awesome-open-science/){target=_blank} which may be valuable to you.

### **:material-pillar: Open Access Publications**

[![open access](https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_Access_PLoS.svg){width=300}](https://en.wikipedia.org/wiki/Open_access){target=_blank}

??? Quote "Definitions"

    "Open access is a publishing model for scholarly communication that makes research information available to readers at no cost, as opposed to the traditional subscription model in which readers have access to scholarly information by paying a subscription (usually via libraries)." -- [OpenAccess.nl](https://www.openaccess.nl/en/what-is-open-access){target=_blank}

??? Example "Pre-print Services"

    [ASAPbio Pre-Print Server List](https://asapbio.org/preprint-servers){target=_blank} - ASAPbio is a scientist-driven non-profit promoting transparency and innovation comprehensive list of pre-print servers inthe field of life science communication.

    [ESSOar](https://www.essoar.org/){target=_blank} - Earth and Space Science Open Archive hosted by the American Geophysical Union.

    [Peer Community In (PCI)](https://peercommunityin.org/) a free recommendation process of scientific preprints based on peer reviews

    [OSF.io Preprints](https://osf.io/preprints/){target=_blank} are partnered with numerous projects under the "-rXivs"

    ??? Tip "The rXivs"

        [AfricArXiv](https://osf.io/preprints/africarxiv/){target=_blank}

        [AgrirXiv](https://cabidigitallibrary.org/journal/agrirxiv){target=_blank}

        [Arabixiv](https://arabixiv.org/discover){target=_blank}

        [arXiv](https://arxiv.org/){target=_blank} - is a free distribution service and an open-access archive for 2,086,431 scholarly articles in the fields of physics, mathematics, computer science, quantitative biology, quantitative finance, statistics, electrical engineering and systems science, and economics.

        [BioHackrXiv](https://biohackrxiv.org/){target=_blank}

        [BioRxiv](https://www.biorxiv.org/){target=_blank} -  is an open access preprint repository for the biological sciences.

        [BodorXiv](https://bodoarxiv.wordpress.com/){target=_blank}

        [EarthArXiv](https://eartharxiv.org/){target=_blank} - is an open access preprint repository for the Earth sciences.

        [EcsArXiv](https://ecsarxiv.org/){target=_blank} - a free preprint service for electrochemistry and solid state science and technology

        [EdArXiv](https://edarxiv.org/){target=_blank} - for the education research community

        [EngrXiv](https://engrxiv.org/){target=_blank} for the engineering community

        [EvoEcoRxiv](https://www.ecoevorxiv.com/){target=_blank} - is an open acccess preprint repository for Evolutionary and Ecological sciences.

        [MediArXiv](https://mediarxiv.com/){target=_blank} for Media, Film, & Communication Studies

        [MedRxiv](https://www.medrxiv.org/){target=_blank} - is an open access preprint repository for Medical sciences.

        [PaleorXiv](https://paleorxiv.org/){target=_blank} - is an open access preprint repository for Paleo Sciences

        [PsyrXiv](https://psyarxiv.com/){target=_blank} - is an open access preprint repository for Psychological sciences.

        [SocArXiv](https://socopen.org/){target=_blank} - is an open access preprint repository for Social sciences.

        [SportrXiv](https://sportrxiv.org/){target=_blank} - is an open access preprint for Sports sciences.

        [ThesisCommons](https://thesiscommons.org/) - open Theses

??? Example "Financial Support for Open Access Publishing Fees"

    There are mechanisms for helping to pay for the additional costs of publishing research as open access:

    [SciDevNet](https://www.scidev.net/global/){target=_blank}

    [Health InterNetwork Access to Research Initiative (HINARI)](http://www.emro.who.int/information-resources/hinari/){target=_blank}

    Some institutions offer support for managing publishing costs (check to see if your institution has such support):
    
    [University of Arizona Open Access Investment Fund](https://new.library.arizona.edu/about/awards/oa-fund){target=_blank}
    
    [Colorado University at Boulder Open Access Fund](https://www.colorado.edu/libraries/research/open-access/open-access-fund){target=_blank}

    [Max Planck Digital Library](https://group.springernature.com/gb/group/media/press-releases/landmark-agreement-between-springer-nature-and-mpdl/18498782){target=_blank} - German authors can have OA fees in Springer Nature research journals paid for.

    [Bibsam Consortium](https://www.springernature.com/gp/open-research/institutional-agreements/oaforsweden){target=_blank} - Swedish authors can have OA fees in Springer Nature research journals paid for.

??? Example "Open Access Publishing"

    Major publishers have provided access points for publishing your work 

    [AAAS](https://www.science.org/content/page/open-access-aaas){target=_blank}

    [Nature](https://www.nature.com/nature-portfolio/open-access){target=_blank}

    [American Geophysical Union](https://www.agu.org/Publish-with-AGU/Publish/Open-Access){target=_blank}

    [Commonwealth Scientific and Industrial Research Organisation (CSIRO)](https://acsopenscience.org/australia-csiro/){target=_blank}

    [Open Research Europe](https://open-research-europe.ec.europa.eu/){target=_blank}

### **:material-pillar: Open Data**

Open Data are a critical aspect of open science. There are three key attributes of Open Data:

* Availability and accessibility
* Reusability
* Inclusivity

??? Quote "Definitions"

    “Open data and content can be freely used, modified, and shared by anyone for any purpose” - [The Open Definition](https://opendefinition.org/){target=_blank}

    "Open data is data that can be freely used, re-used and redistributed by anyone - subject only, at most, to the requirement to attribute and sharealike." - [Open Data Handbook](https://opendatahandbook.org/guide/en/what-is-open-data/){target=_blank}

    [:material-wikipedia: Wikipedia definition](https://en.wikipedia.org/wiki/Open_data){target=_blank}

??? Tip "DIKW Pyramid"
    
    Data are the basis of our understanding the natural world. The Data-Information-Knowledge-Wisdom (DIKW) pyramid describes for us how data are refined into information and knowledge.

    [![dikw](https://upload.wikimedia.org/wikipedia/commons/0/06/DIKW_Pyramid.svg)](https://en.wikipedia.org/wiki/DIKW_pyramid){target=_blank}

??? Tip "FAIR & CARE Principles"

    [Wilkinson et al. (2016)](https://doi.org/10.1038/sdata.2016.18){target=_blank} established the guidelines to improve the Findability, Accessibility, Interoperability, and Reuse (FAIR) of digital assets for research. 

    [Go-FAIR website](https://www.go-fair.org/fair-principles/){target=_blank}

    [Carroll et al. (2020)](http://doi.org/10.5334/dsj-2020-043){target=_blank} established the CARE Principles for Indigenous Data Governance. [full document :fontawesome-solid-file-pdf:](https://static1.squarespace.com/static/5d3799de845604000199cd24/t/5da9f4479ecab221ce848fb2/1571419335217/CARE+Principles_One+Pagers+FINAL_Oct_17_2019.pdf){target=_blank}
    
    [Indigenous Data Sovereignty Networks](https://indigenousdatalab.org/networks/){target=_blank}

??? Tip "LOD Cloud"
    
    [The Linked Open Data Cloud](https://lod-cloud.net/){target=_blank} shows how data are [linked to one another](https://www.w3.org/standards/semanticweb/data){target=_blank} forming the basis of the [semantic web :material-wikipedia:](https://en.wikipedia.org/wiki/Semantic_Web){target=_blank}.

    [![linked open data](https://lod-cloud.net/clouds/lod-cloud.svg)](https://lod-cloud.net/clouds/lod-cloud.svg){target=_blank}

### **:material-pillar: Open Educational Resources**

[![open educational resources](https://upload.wikimedia.org/wikipedia/commons/2/20/Global_Open_Educational_Resources_Logo.svg){width=240}](https://www.unesco.org/en/communication-information/open-solutions/open-educational-resources)

??? Quote "Definitions"

    "Open Educational Resources (OER) are learning, teaching and research materials in any format and medium that reside in the public domain or are under copyright that have been released under an open license, that permit no-cost access, re-use, re-purpose, adaptation and redistribution by others." - [UNESCO](https://www.unesco.org/en/communication-information/open-solutions/open-educational-resources){target=_blank}

    [:material-wikipedia: Wikipedia definition](https://en.wikipedia.org/wiki/Open_educational_resources){target=_blank}

??? Example "Digital Literacy Organizations"

    [The Carpentries](https://carpentries.org/){target=_blank} - teaches foundational coding and data science skills to researchers worldwide  

    [EdX](https://www.edx.org/){target=_blank} - Massively Online Online Courses (not all open) hosted through University of California Berkeley

    [EveryoneOn](https://www.everyoneon.org/ ){target=_blank} - mission is to unlock opportunity by connecting families in underserved communities to affordable internet service and computers, and delivering digital skills trainings 

    [ConnectHomeUSA](https://connecthomeusa.org/){target=_blank} - is a movement to bridge the digital divide for HUD-assisted housing residents in the United States under the leadership of national nonprofit EveryoneOn

    [Global Digital Literacy Council](https://www.gdlcouncil.org/){target=_blank} -  has dedicated more than 15 years of hard work to the creation and maintenance of worldwide standards in digital literacy

    [IndigiData](https://indigidata.nativebio.org/){target=_blank} - training and engaging tribal undergraduate and graduate students in informatics

    [National Digital Equity Center](https://digitalequitycenter.org/about-us/){target=_blank} a 501c3 non-profit, is a nationally recognized organization with a mission to close the digital divide across the United States

    [National Digital Inclusion Allaince](https://www.digitalinclusion.org/){target=_blank} - advances digital equity by supporting community programs and equipping policymakers to act

    [Net Literacy](https://www.netliteracy.org/){target=_blank}

    [Open Educational Resources Commons](https://www.oercommons.org/){target=_blank}

    [Project Pythia](https://projectpythia.org/){target=_blank} is the education working group for Pangeo and is an educational resource for the entire geoscience community

    [Research Bazaar](https://resbaz.github.io/resbaz2021/){target=_blank} - is a worldwide festival promoting the digital literacy emerging at the centre of modern research

    [TechBoomers](https://techboomers.com/){target=_blank} - is an education and discovery website that provides free tutorials of popular websites and Internet-based services in a manner that is accessible to older adults and other digital technology newcomers

??? Example "Educational Materials"

    [Teach Together](https://teachtogether.tech/en/index.html#){target=_blank} by Greg Wilson

    [DigitalLearn](https://www.digitallearn.org/){target=_blank}


### **:material-pillar: Open Methodology**

[![plos open methods](https://plos.org/wp-content/uploads/2021/08/Methods-infographic-option-c-2-edit.png)](https://plos.org/open-science/open-methods/){target=_blank}

The use of version control systems like [GitHub](https://github.com/search?q=open+science){target=_blank} and [GitLab](https://gitlab.com/explore/projects/topics/Open%20Science) present one of the foremost platforms for sharing open methods for digital research.

??? Quote "Definitions"

    "An open methodology is simply one which has been described in sufficient detail to allow other researchers to repeat the work and apply it elsewhere." - [Watson (2015)](https://doi.org/10.1186/s13059-015-0669-2){target=_blank}

    "Open Methodology refers to opening up methods that are used by researchers to achieve scientific results and making them publicly available." - [Open Science Network Austria](https://www.oana.at/en/about-open-science){target=_blank}

??? Example "Protocols and Bench Techniques"

    [BioProtocol](https://bio-protocol.org/Default.aspx){target=_blank}

    [Current Protocols](https://currentprotocols.onlinelibrary.wiley.com/){target=_blank}

    [Gold Biotechnology Protocol list](https://www.goldbio.com/search?q=&type=documentation&documentation_type=protocol){target=_blank}

    [JoVE](https://www.jove.com/){target=_blank} - Journal of Visualized Experiments

    [Nature Protocols](https://www.nature.com/nprot/){target=_blank}

    [OpenWetWare](https://openwetware.org/wiki/Main_Page){target=_blank}

    [Protocol Exchange](https://protocolexchange.researchsquare.com/){target=_blank}

    [Protocols Online](http://www.protocol-online.org/prot/){target=_blank}

    [:material-microscope: Protocols](https://www.protocols.io/){target=_blank}

    [SciGene](http://scigine.com/blog/){target=_blank}

    [Springer Nature Experiments](https://experiments.springernature.com/){target=_blank}
      
### **:material-pillar: Open Peer Review**

[![plos open peer review](https://theplosblog.plos.org/wp-content/uploads/sites/6/2020/05/TPR_chart-final-edited-003-scaled.jpg)](https://theplosblog.plos.org/2019/05/plos-journals-now-open-for-published-peer-review/){target=_blank}

[Pros and Cons of Open Peer Review](https://doi.org/10.1038/6295){target=_blank}

??? Quote "Definitions"

    Ross-Hellauer et al. (2017) ask [What is Open Peer Review?](https://doi.org/10.12688%2Ff1000research.11369.2){target=_blank} and state that there is no single agreed upon definition

    [:material-wikipedia: Wikipedia's definition](https://en.wikipedia.org/wiki/Open_peer_review){target=_blank}

??? Tips "Open Peer Review Resources"

    [F1000Research](https://f1000research.com/){target=_blank} the first open research publishing platform. Offering open peer review rapid publication

    [PREreview](https://prereview.org/){target=_blank} provides a space for open peer reviews, targeted toward early career researchers.

    [ASAPbio](https://asapbio.org/){target=_blank} Accelerating Science and Publication in Biology, an open peer review source for biologists and life scientists.

    [PubPeer](https://pubpeer.com/){target=_blank} platform for post-publication of peer reviews.

    [Sciety](https://sciety.org/){target=_blank} platform for evaluating preprints.



### **:material-pillar: Open Source Software**

[![](https://upload.wikimedia.org/wikipedia/commons/4/42/Opensource.svg){width=240}](https://opensource.org/){target=_blank}

??? Quote "Definitions"

    "Open source software is code that is designed to be publicly accessible—anyone can see, modify, and distribute the code as they see fit. Open source software is developed in a decentralized and collaborative way, relying on peer review and community production." - [:material-redhat: Red Hat](https://www.redhat.com/en/topics/open-source/what-is-open-source){target=_blank}

    [:material-open-source-initiative: Open Source Initiative definition](https://opensource.org/osd){target=_blank}

    [:material-wikipedia: Wikipedia definition](https://en.wikipedia.org/wiki/Open-source_software){target=_blank}

[Awesome list](https://tyson-swetnam.github.io/awesome-open-science/software/){target=_blank}

## Breakout Discussion

As you already know, being a scientist requires you to wear many hats, and trying to do Open Science is no different.

<figure markdown>
  <a href="https://doi.org/10.7554/eLife.81075" target="blank" rel="venn">![venn](https://iiif.elifesciences.org/lax/81075%2Felife-81075-fig2-v1.tif/full/,1500/0/default.jpg){ width="700" } </a>
    <figcaption> [Bernery et al. (2022)](https://doi.org/10.7554/eLife.81075){target=_blank} Figure 2: The positive aspects of doing a PhD. </figcaption>
</figure>


As we mentioned, Open Science is not a set of boxes you need to check off to be "Certified Open", but an intersecting set of philosophies and approaches, all of which occur on some type of spectrum. 

To get a feel for how Open Science can be multifaceted and different for each researcher, we will do a short breakout group session to discuss what Open Science means to you.

??? Question "What does Open Science mean to you?"

    ??? Example "Which of the :material-pillar: pillars of Open Science is nearest to your own heart?"

        **:material-pillar: Open Access Publications**

        **:material-pillar: Open Data**

        **:material-pillar: Open Educational Resources**

        **:material-pillar: Open Methodology**
      
        **:material-pillar: Open Peer Review**

        **:material-pillar: Open Source Software**

    ??? Example "Are any of the :material-pillar: pillars more important than the others?"

    ??? Example "Are there any :material-pillar: pillars not identified that you think should be considered?"

### Components of Open Science

One of the most fundamental, and certainly the most publicized component of Open Science is the accessibility of data. 

This makes sense - without access to your data, nothing else about your science can be all that open. 

While we will devote an entire 10 weeks of this course to data, opening up your data is only one piece of the puzzle.

<figure markdown>
  <a href="https://doi.org/10.1038/s41559-020-1109-6" target="blank" rel="gallagher">![gallagher](https://media.springernature.com/relative-r300-703_m1050/springer-static/image/art%3A10.1038%2Fs41559-020-1109-6/MediaObjects/41559_2020_1109_Figa_HTML.png){ width="700" } </a>
    <figcaption> [Gallagher et al (2020)](https://doi.org/10.7554/eLife.81075){target=_blank} Box 2: six core principles of Open Science. </figcaption>
</figure>

This figure demonstrates the multiple intersecting pieces of Open Science, which go beyond simply making data accessible. 

While we focus primarily on Open Data, Open Source, and Open Methodology in FOSS, it's worth considering how other parts of the scientific process might be opened up more broadly.

Another component which sort of covers all of the pictured components, or at least links a lot of them together, might be referred to as Open Process. 

In response to the Reproducibility Crisis, many researchers, particularly in fields like psychology, have begun to advocate for **preregistration** of studies. 

This involves writing out and publishing your entire research plan, from data collection to analysis and publication, for the sake of avoiding practices like [p-hacking](https://en.wikipedia.org/wiki/Data_dredging) or [HARKing](https://en.wikipedia.org/wiki/HARKing). 

What preregistration also does is make the process of your work more open, including many of the small decisions and tweaks you make to a project that probably wouldn't make it into a manuscript. 

To learn more about preregistration, you can check out the [Open Science Foundation](https://osf.io/), a project that provides a preregistration platform and other Open Science tools.

As mentioned above, it is worthwhile to think about Open Science not as a set of checkboxes, but rather a holistic approach to doing science. 

In that spirit, it can also be useful to think about Open Science as a spectrum, from less to more open. 

While you might not achieve some platonic ideal of openness for a variety of reasons, you can still make great progress in moving your science towards the Open end of the spectrum. 

In reality, a large scientific project probably consists of multiple spectra; you can move your data towards the open end of the spectrum while your software remains less open, and vice versa. 

All this is to say that doing Open Science is not a static set of goals you must achieve, it is a process that grows and changes with your science itself.

One of the biggest challenges of doing science is that you might have to wear many different hats: domain expert, lab manager, statistician, teacher, mentor, grant writer, manuscript author, public speaker... the list goes on. 

Doing Open Science is no different, but the list of skills may be even greater, since the goal is now to openly communicate each step of the process to a broader audience. 

This also makes teaching Open Science quite challenging- we will cover topics ranging from "soft skills" like project management and internal communications to more technical skills like software management and containers. 

We could probably teach this whole workshop on each single topic, but we clearly don't have the time to do that. 

Instead, we will focus on a higher-level look at the landscape of Open Science and introduce you to a wide variety of skills and concepts with the idea that you can go on to find ways to implement them in your own work.

??? Question "What characteristics might a paper, project, lab group require to qualify as doing *Open Science*"

??? Question "What are some limitations to you, your lab group, or your domain?"

---

## *WHY* do Open Science?

There are many reasons to do Open Science, and presumably one or more of them brought you to this workshop. 

Whether you feel an ethical obligation, want to improve the quality of your work, or want to look better to funding agencies, many of the same approaches to Open Science apply.

A paper from [Bartling & Friesike (2014)](https://doi.org/10.1007/978-3-319-00026-8){target=_blank} posits that there are 5 main schools of thought in Open Science, which represent 5 underlying motivations:

1.  **Democratic school**: primarily concerned with making scholarly work freely available to everyone

2.  **Pragmatic school**: primarily concerned with improving the quality of scholarly work by fostering collaboration and improving critiques

3.  **Infrastructure school**: primarily focused on the platforms, tools, and services necessary to conduct efficient research, collaboration, and communication

4.  **Public school**: primarily concerned with societal impact of scholarly work, focusing on engagement with broader public via citizen science, understandable scientific communication, and less formal communication

5.  **Measurement school**: primarily concerned with the existing focus on journal publications as a means of measuring scholarly output, and focused on developing alternative measurements of scientific impact


<figure markdown>
  <a href="https://library.oapen.org/bitstream/handle/20.500.12657/28008/1001989.pdf" target="blank" rel="fecher_friesike">![fecher_friesike](assets/five_schools.png){ width="700" } </a>
    <figcaption> In [Bartling & Friesike (2014)](https://doi.org/10.1007/978-3-319-00026-8){target=_blank} Open Science: One Term, Five Schools of Thought </figcaption>
</figure>

While many researchers may be motivated by one or more of these aspects, we will not necessarily focus on any of them in particular. If anything, FOSS may be slightly more in the Infrastructure school, because we aim to give you the tools to do Open Science based on your own underlying motivations.

Let's break out into groups again to discuss some of our motivations for doing Open Science.

??? Question "What motivates you to do Open Science?"

??? Question "Do you feel that you fall into a particular "school"? If so, which one, and why?"

??? Question "Are there any motivating factors for doing Open Science that don't fit into this framework?"

## Ethos of Open Science

Doing Open Science requires us to understand the ethics of why working with data which do not belong to us is privileged.

We must also anticipate how these could be re-used [in ways contrary to the interests of humanity](https://www.theverge.com/2022/3/17/22983197/ai-new-possible-chemical-weapons-generative-models-vx){target=_blank}. 

Ensure the use of [Institutional Review Boards (IRB)](https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/institutional-review-boards-irbs-and-protection-human-subjects-clinical-trials){target=_blank} or your local ethical committee. 
 
Areas to consider: 

[![ethics assessment](https://uksa.statisticsauthority.gov.uk/wp-content/uploads/2019/05/Self-Assessment-Map-2.0-1024x888.png)](https://uksa.statisticsauthority.gov.uk/the-authority-board/committees/national-statisticians-advisory-committees-and-panels/national-statisticians-data-ethics-advisory-committee/ethics-self-assessment-tool/){target=_blank} 

Source: [UK Statistics Authority](https://uksa.statisticsauthority.gov.uk/the-authority-board/committees/national-statisticians-advisory-committees-and-panels/national-statisticians-data-ethics-advisory-committee/ethics-self-assessment-tool/){target=_blank} 

* Geolocation (survey, land ownership, parcel data), see [UK Statistics Authority Ethical Considerations](https://uksa.statisticsauthority.gov.uk/publication/ethical-considerations-in-the-use-of-geospatial-data-for-research-and-statistics/pages/1/){target=_blank} 
* Personal identification information  [US Personal Identifiable Information (PII)](https://www.dol.gov/general/ppii){target=_blank}, [General Data Protection Regulation (GDPR)](https://gdpr.eu/what-is-gdpr){target=_blank}
* Health information [US HIPAA](https://www.hhs.gov/hipaa/index.html){target=_blank} , EU GDPR
* Protected and Endangered Species ([US Endangered Species Act](https://www.epa.gov/laws-regulations/summary-endangered-species-act){target=_blank})
* Indigenous data sovereignty: [CARE Principles for Indigenous Data Governance](http://doi.org/10.5334/dsj-2020-043){target=_blank} , [Global Indigenous Data Alliance (GIDA)](https://www.gida-global.org/care){target=_blank}, [First Nations OCAP® (Ownership Control Access and Possession)](https://fnigc.ca/ocap-training/){target=_blank}, [Circumpolar Inuit Protocols for Equitable and Ethical Engagement](https://www.arcus.org/arctic-info/archive/33236){target=_blank}   
* Artificial intelligence/machine learning [Assessment List Trustworthy AI (ALTAI)](https://futurium.ec.europa.eu/en/european-ai-alliance/pages/welcome-altai-portal){target=_blank} from the European AI Alliance

[:material-wikipedia: "Nothing about us, without us"](https://en.wikipedia.org/wiki/Nothing_About_Us_Without_Us){target=_blank}

- [Funnel et al. (2019)](http://dx.doi.org/10.1017/S0714980819000291){target=_blank}

For more information (training):

Ethics and Data Access (General Information with BioMedical and Life Sciences Data) includes [a legal and ethical checklist lesson for researchers](https://ilias.fraunhofer.de/goto.php?target=fold_15177&client_id=fraunhofer){target=_blank} around "FAIR Plus".


## Recommended Open Science Communities

[![The Turing Way](https://the-turing-way.netlify.app/_static/logo.jpg){width=150}](https://the-turing-way.netlify.app/welcome.html)
[![NASA Transform to Open Science](https://raw.githubusercontent.com/nasa/Transform-to-Open-Science/main/assets/logos/Tops_logo%404x.png){width=150}](https://github.com/nasa/Transform-to-Open-Science)
[![Foster Open Science](https://www.fosteropenscience.eu/images/logos/FOSTER-hires.png){width=300}](https://www.fosteropenscience.eu/)
[![The Carpentries](https://carpentries.org/assets/img/TheCarpentries.svg)](https://carpentries.org/)
[![COS](https://www.cos.io/hubfs/Cos_2020/Images/cos_logo.png){width=200}](https://www.cos.io/)

[:material-school: Open Scholarship Grassroots Community Networks](https://docs.google.com/spreadsheets/d/1LNF5_bOkRV-RLIF4HYmu-gOemIa4IdfXEer89fM-Vy8/edit#gid=847887324){target=_blank}

??? Info ":fontawesome-solid-earth-europe: International Open Science Networks"

    [Center for Scientific Collaboration and Community Engagement (CSCCE)](https://www.cscce.org/){target=_blank}

    [Center for Open Science (COS)](https://www.cos.io/){target=_blank}

    [Eclipse Science Working Group](https://science.eclipse.org/){target=_blank}

    [eLife](https://elifesciences.org/){target=_blank}

    [NumFocus](https://numfocus.org/){target=_blank}

    [Open Access Working Group](https://sparcopen.org/people/open-access-working-group/){target=_blank}

    [Open Research Funders Group](https://www.orfg.org/)

    [Open Science Foundation](https://osf.io/){target=_blank}

    [Open Science Network](https://www.opensciencenetwork.org/){target=_blank}

    [pyOpenSci](https://www.pyopensci.org/){target=_blank}

    [R OpenSci](https://ropensci.org/){target=_blank}

    [Research Data Alliance (RDA)](https://www.rd-alliance.org/){target=_blank}

    [The Turing Way](https://the-turing-way.netlify.app/welcome){target=_blank}

    [UNESCO Global Open Science Partnership](https://en.unesco.org/science-sustainable-future/open-science/partnership){target=_blank}

    [World Wide Web Consortium (W3C)](https://www.w3.org/){target=_blank}

??? Info ":fontawesome-solid-earth-americas: US-based Open Science Networks"

    [CI Compass](https://ci-compass.org/){target=_blank} - provides expertise and active support to cyberinfrastructure practitioners at USA NSF Major Facilities in order to accelerate the data lifecycle and ensure the integrity and effectiveness of the cyberinfrastructure upon which research and discovery depend.

    [Earth Science Information Partners (ESIP) Federation](https://www.esipfed.org/){target=_blank} -  is a 501(c)(3) nonprofit supported by NASA, NOAA, USGS and 130+ member organizations.

    [Internet2](https://internet2.edu/){target=_blank} - is a community providing cloud solutions, research support, and services tailored for Research and Education. 

    [Minority Serving Cyberinfrastructure Consortium (MS-CC)](https://www.ms-cc.org/){target=_blank} envisions a transformational partnership to promote advanced cyberinfrastructure (CI) capabilities on the campuses of Historically Black Colleges and Universities (HBCUs), Hispanic-Serving Institutions (HSIs), Tribal Colleges and Universities (TCUs), and other Minority Serving Institutions (MSIs). 

    [NASA Transform to Open Science (TOPS)](https://github.com/nasa/Transform-to-Open-Science){target=_blank} - coordinates efforts designed to rapidly transform agencies, organizations, and communities for Earth Science

    [OpenScapes](https://www.openscapes.org/){target=_blank} - is an approach for doing better science for future us

    [The Quilt](https://www.thequilt.net/){target=_blank} - non-profit regional research and education networks collaborate to develop, deploy and operate advanced cyberinfrastructure that enables innovation in research and education.

??? Info ":fontawesome-solid-earth-oceania: Oceania Open Science Networks"

    [New Zealand Open Research Network](https://nzorn.netlify.app/) - New Zealand Open Research Network (NZORN) is a collection of researchers and research-associated workers in New Zealand.

    [Australia & New Zealand Open Research Network](https://www.anzopenresearch.org/) - ANZORN is a network of local networks distributed without Australia and New Zealand.

---

## Self Assessment

??? Question "True or False: All research papers published in the top journals, like Science and Nature, are always Open Access?"

    ??? Failure

        False

        Major Research journals like [Science](https://www.science.org/content/page/open-access-aaas){target=_blank} and [Nature](https://www.nature.com/nature-portfolio/open-access){target=_blank} have an "Open Access" option when a manuscript is accepted, but they charge an extra fee to the authors to make those papers Open Access.

        These [high page costs](https://www.science.org/content/article/9500-nature-journals-will-now-make-your-paper-free-read){target=_blank} are exclusionary to the majority of global scientists who cannot afford to front these costs out of pocket.

        This will soon change, at least in the United States. The [Executive Branch of the federal government recently mandated](https://www.nature.com/articles/d41586-022-02351-1){target=_blank} that future federally funded research be made Open Access after 2026.


??? Question "True or False: an article states all of the research data used in the experiments "are available upon request from the corresponding author(s)," meaning the data are "Open""

    ??? Failure

        False

        In order for research to be open, the data need to be freely available from a digital repository, like [Data Dryad](https://datadryad.org){target=_blank}, [Zenodo.org](https://zenodo.org){target=_blank}, or [CyVerse](https://cyverse.org/data-commons){target=_blank}.

        Data that are 'available upon request' do not meet the FAIR data principles. 

??? Question "True or False: Online Universities and Data Science Boot Camps like UArizona Online, Coursera, Udemy, etc. promote digital literacy and are Open Educational Resources?"

    ??? Failure

        False

        These examples are for-profit programs which teach data science and computer programming online. Some may be official through public or private universities and offer credits toward a degree or a certificate. Some of these programs are [known to be predatory](https://www.highereddive.com/news/court-fines-ashford-university-and-zovio-224m-for-misleading-students/620058/){target=_blank}.

        The organizations we have [listed above](#material-pillar-open-educational-resources) are Open Educational Resources - they are free and available to anyone who wants to work with them asynchronously, virtually, or in person.

??? Question "Using a version control system to host the analysis code and computational notebooks, and including these in your Methods section or Supplementary Materials, is an example of an Open Methodology?"

    ??? Success

        Yes!

        Using a VCS like GitHub or GitLab is a great step towards making your research more reproducible. 

        Ways to improve your open methology can include documentation of your physical bench work, and even video recordings and step-by-step guides for every part of your project.

??? Question "You are asked to review a paper for an important journal in your field. The editor asks if you're willing to release your identity to the authors, thereby "signing" your review. Is this an example of "Open Peer Review"?"

    ??? Failure

        No

        Just because you've given your name to the author(s) of the manuscript, this does not make your review open.

        If the journal later publishes your review alongside the final manuscript, than you will have participated in an Open Review. 

??? Question "You read a paper where the author(s) wrote their own code and licensed as "Open Source" software for a specific set of scientific tasks which you want to replicate. When you visit their personal website, you find the GitHub repository does not exist (because its now private). You contact the authors asking for access, but they refuse to share it 'due to competing researchers who are seeking to steal their intellectual property". Is the software open source?"

    ??? Failure

        No

        Just because an author states they have given their software a permissive software license, does not make the software open source. 

        Always make certain there is a [LICENSE](https://choosealicense.com/licenses/){target=_blank} associated with any software you find on the internet. 

        In order for the software to be open, it must follow the [Open Source Initiative definition](https://opensource.org/osd){target=_blank}
