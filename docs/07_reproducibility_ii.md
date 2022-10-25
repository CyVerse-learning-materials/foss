# Reproducibility II: Containers

!!! Success "Learning Objectives"

    After this lesson, you should be able to:

    * Explain what containers are used for in reproducible research contexts
    * Search for and run a Docker contaienr locally or on a remote system
    * Understand how Version Controlled Software and public data can be used in a container

## A Carpenty introduction to Containers

??? Tip "The Carpentries"

    [Containers in Research Workflows](https://carpentries-incubator.github.io/docker-introduction/reproduciblity/index.html)

## The CyVerse Container Camp

??? Tip "Container Camp: an introdution to Docker containers"

    [Introduction to Docker](https://cyverse-learning-materials.github.io/container-camp/docker/intro/)

## Self Assessment

??? Question "A Docker container with the tagname `latest` ensures old code and data will work on a new computer setup?"

    !!! Failure 

        Never use the `latest` tag for a publication or archival. 

        The `latest` version is always being updated and should be considered "cutting edge".

        `latest` is the default tag name of all Docker images

        `latest` versions MAY have backward compatibility with older code and data, but this is not always a given

??? Question "When are containers the right solution?"

    !!! Success

        Containers are valuable when you need to run an analyses on a remote platform, and you need it to work every time.

    !!! Failure

        You need to do some simple text file editing 

        You need to run a web service
        
---

## Reproducibility tutorial II: Using snakemake and containers for your workflow

This is a continuation of the reproducibility tutorial started on [week 6](06_reproducibility_i.md/#reproducibility-tutorial-i-setting-up-your-project).

We restart today by reconnecting to your VMs (remember, you can do this on your own machine!). The google sheets with IDs and Passwords is shared in the HackMD.

```
ssh <user>@<IP>
```

Reactivate your environment (if necessary)

```
conda activate myenv
```

It will show it being activated when your shell prompt is

```
(myenv) user@machine
```

### Using Docker 

In this specific tutorial, Docker is already installed in the VM. You can test its installation by doing

```
docker --version
```

If you're using your computer, you could use conda to install docker:

```
conda install -c conda-forge docker
```

However visiting the [official docker installation documentation](https://docs.docker.com/get-docker/) is suggested.

For this tutorial, we are going to use specific docker containers. Containers are "in-use" docker images; to make things quicker, we can pull these images and make them available.

```
# Docker pull command, downloading the image to your machine 
docker pull quay.io/biocontainers/sra-tools:2.10.0--pl526he1b5a44_0

# Checking the docker on the machine
docker images
```

### Using snakemake

Snakemake uses metaphors like rules and recipes to describe how a workflow is organized. A rule states what output should be created and defines what steps (the recipe) needs to be follow to create that output. Let’s work on the first step of our workflow.

Import a sequence from SRA

We will import a SRA file, so the first thing we do is create a rule that states what output we should end up with. In our tutorial, we will be working from a single set of reads from the Plasmodium data.

We have to build on this by specifying some shell command that will create this. We will use the docker container from the docker image we previously pulled:

```
rule import_from_sra:
    output:
       "learn-snake/sra_files/SRR8245081/SRR8245081.sra"
    shell:
  # Use a docker run command and mount a director
       "docker run -v /home/$USER/learn-snake/:/experiment/ "
  # set a working directory - this will be created if needed
       "--workdir /experiment/sra_files "
  # set the docker container
       "ncbi/sra-tools:latest"
  # use the prefetch tool
       "prefetch "
  # show progress
       "-p 1 "
  # get our desired accession
       "SRR8245081 "
  # output to our desired directory
       "--output-directory /experiment/sra_files/ || true"
```

!!! tip
        Use a text editor like `nano` or `vim` to create the snakemake file (Snakefile).

### Running the pipeline

This is what a full pipeline would look like

```
#SRA definitions
ACCESSION=["SRR8245081",]
READS=["_1","_2"]
REFERENCE_URLS=["ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/002/765/GCF_000002765.4_ASM276v2/GCF_000002765.4_ASM276v2_genomic.fna.gz",
                "ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/002/765/GCF_000002765.4_ASM276v2/GCF_000002765.4_ASM276v2_genomic.gff.gz"]
REFERENCES_BASE=["GCF_000002765.4_ASM276v2_genomic",]

#containers
SRA_TOOLS_CONTAINER="ncbi/sra-tools:latest"
FASTP_CONTAINER="biocontainers/fastp:v0.19.6dfsg-1-deb_cv1"
SPADES_CONTAINER="biocontainers/spades:v3.13.0dfsg2-2-deb_cv1"
QUAST_CONTAINER="quay.io/biocontainers/quast:5.0.2--py27pl526ha92aebf_0"

rule all:
    input:
        sra=expand("/home/$USER/reproducibility-tutorial/experiment/sra_files/{accession}/{accession}.sra",
                accession=ACCESSION),
        fastq=expand("/home/$USER/reproducibility-tutorial/experiment/fastq_files/{accession}.sra{reads}.fastq",
                accession=ACCESSION,
                reads=READS),
        fastq_trimmed=expand("/home/$USER/reproducibility-tutorial/experiment/fastq_files/{accession}.sra{reads}_trimmed.fastq",
                accession=ACCESSION,
                reads=READS),
        fastp_report=expand("/home/$USER/reproducibility-tutorial/experiment/fastq_files/{accession}_fastp_report.html",
                accession=ACCESSION),
        assembly_contigs=expand("/home/$USER/reproducibility-tutorial/experiment/{accession}_assembly/contigs.fasta",
                accession=ACCESSION),
        reference_genome=expand("/home/$USER/reproducibility-tutorial/experiment/reference_genome/{reference_genome_fna}.fna",
                reference_genome_fna=REFERENCES_BASE),
        reference_annotation=expand("/home/$USER/reproducibility-tutorial/experiment/reference_genome/{reference_genome_gff}.gff",
                reference_genome_gff=REFERENCES_BASE),
        quast_assembly_report=expand("/home/$USER/reproducibility-tutorial/experiment/{accession}_assembly_stats/report.html",
                accession=ACCESSION)

rule SRA_Import:
    output:
        "reproducibility-tutorial/experiment/sra_files/{accession}/{accession}.sra"
    params:
        container={SRA_TOOLS_CONTAINER},
        command="prefetch",
        user="root",
        progress=1,
        outputdirectory="/experiment/sra_files"
    shell:
        "docker run --user {params.user} "
        " -v /home/$USER/reproducibility-tutorial/experiment:/experiment "
        "--workdir /experiment "
        "{params.container} {params.command} "
        "-p {params.progress} "
        "--output-directory {params.outputdirectory} "
        "{ACCESSION}"

rule SRA_to_fastq:
    input:
        sra=expand("reproducibility-tutorial/experiment/sra_files/{accession}/{accession}.sra",
                accession=ACCESSION)
    output:
        "~/reproducibility-tutorial/experiment/fastq_files/{accession}.sra_1.fastq",
        "~/reproducibility-tutorial/experiment/fastq_files/{accession}.sra_2.fastq"
    params:
        container={SRA_TOOLS_CONTAINER},
        command="fasterq-dump",
        user="root",
        outputdirectory="/experiment/fastq_files"
    threads:
        8
    shell:
        "docker run --user {params.user} "
        " -v /home/$USER/reproducibility-tutorial/experiment:/experiment "
        "--workdir /experiment/sra_files/{ACCESSION}/ "
        "{params.container} {params.command} "
        "{ACCESSION}.sra "
        "-O {params.outputdirectory} "

rule fastq_qc:
    input:
        fastq=expand("reproducibility-tutorial/experiment/fastq_files/{accession}.sra{reads}.fastq",
            accession=ACCESSION,
            reads=READS)
    output:
        "~/reproducibility-tutorial/experiment/fastq_files/{accession}.sra_1_trimmed.fastq",
        "~/reproducibility-tutorial/experiment/fastq_files/{accession}.sra_2_trimmed.fastq",
        "~/reproducibility-tutorial/experiment/fastq_files/{accession}_fastp_report.html"
    params:
        container={FASTP_CONTAINER},
        command="fastp",
        user="root",
        outputdirectory="/experiment/fastq_files"
    threads:
        8
    shell:
        "docker run --user {params.user} "
        " -v /home/$USER/reproducibility-tutorial/experiment:/experiment "
        "--workdir /experiment/fastq_files/ "
        "{params.container} {params.command} "
        "-V "
        "--cut_front "
        "--cut_front_mean_quality 30 "
        "- R '{ACCESSION} fastp report' "
        "--html {ACCESSION}_fastp_report.html "
        "-i /experiment/fastq_files/{ACCESSION}.sra_1.fastq "
        "-o /experiment/fastq_files/{ACCESSION}.sra_1_trimmed.fastq "
        "-I /experiment/fastq_files/{ACCESSION}.sra_2.fastq "
        "-O /experiment/fastq_files/{ACCESSION}.sra_2_trimmed.fastq"

rule SPAdes_assembly:
    input:
        fastq_trimmed=expand("reproducibility-tutorial/experiment/fastq_files/{accession}.sra{reads}_trimmed.fastq",
            accession=ACCESSION,
            reads=READS)
    output:
        "~/reproducibility-tutorial/experiment/{accession}_assembly/contigs.fasta"
    params:
        container={SPADES_CONTAINER},
        command="spades.py",
        user="root",
        outputdirectory="/experiment/{accession}_assembly"
    threads:
        8
    shell:
        "docker run --user {params.user} "
        " -v /home/$USER/reproducibility-tutorial/experiment:/experiment "
        "--workdir /experiment/fastq_files/ "
        "{params.container} {params.command} "
        "-1 /experiment/fastq_files/{ACCESSION}.sra_1_trimmed.fastq "
        "-2 /experiment/fastq_files/{ACCESSION}.sra_2_trimmed.fastq "
        "-o {params.outputdirectory}"

rule import_reference_genome:
    output:
        reference_genome="~/reproducibility-tutorial/experiment/reference_genome/{REFERENCES_BASE}.fna",
        reference_annotation="~/reproducibility-tutorial/experiment/reference_genome/{REFERENCES_BASE}.gff"
    shell:
        "mkdir -p reproducibility-tutorial/experiment/reference_genome &&  "
        "cd reproducibility-tutorial/experiment/reference_genome && "
        "wget {REFERENCE_URLS} && "
        "gzip -d {REFERENCES_BASE}*.gz"

rule assembly_stats:
    input:
        assembly_contigs=expand("reproducibility-tutorial/experiment/{accession}_assembly/contigs.fasta",
            accession=ACCESSION),
        reference_genome=expand("reproducibility-tutorial/experiment/reference_genome/{reference_genome_fna}.fna",
            reference_genome_fna=REFERENCES_BASE),
        reference_annotation=expand("reproducibility-tutorial/experiment/reference_genome/{reference_genome_gff}.gff",
            reference_genome_gff=REFERENCES_BASE)
    output:
        "~/reproducibility-tutorial/experiment/{accession}_assembly_stats/report.html"
    params:
        container={QUAST_CONTAINER},
        command="quast.py",
        user="root",
        outputdirectory="/experiment/{accession}_assembly_stats",
        container_input=expand("/experiment/{accession}_assembly/contigs.fasta",
            accession=ACCESSION)
    threads:
        8
    shell:
        "docker run --user {params.user} "
        " -v /home/$USER/reproducibility-tutorial/experiment:/experiment "
        "--workdir reproducibility-tutorial/experiment/reference_genome/ "
        "{params.container} {params.command} "
        "-o {params.outputdirectory} "
        "--features gene:/experiment/reference_genome/{REFERENCES_BASE}.gff "
        "-r /experiment/reference_genome/{REFERENCES_BASE}.fna "
        "-t 8 "
        "--eukaryote "
        "--circos "
        "{params.container_input}"
```

### Document your work

As previously, you should copy your results to Github and commit!
