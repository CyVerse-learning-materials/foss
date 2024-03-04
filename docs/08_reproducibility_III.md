`docker run` starts a container and executes the default "entrypoint", or any other "command" that follows `run` and any optional flags. These commands are specified within a Dockerfile. 

??? Tip "What is a Dockerfile?"
    A Dockerfile is a text file that contains a list of commands used by Docker to automatically build an image. These commands can include specifying the base image to use, copying files into the image, setting environment variables, running commands, and defining entry points and default commands to run when a container is started from the image. The Dockerfile is processed by the docker build command, which creates a Docker image that can be used to run containers.
    
    ```
    FROM pdal/pdal:latest

    WORKDIR /app

    COPY pdal_copc.sh /app/pdal_copc.sh

    COPY copc.json /app/copc.json

    RUN chmod +x pdal_copc.sh

    ENTRYPOINT ["/app/pdal_copc.sh"]
    ```

??? Tip "What is an *entrypoint*?"

    An entrypoint is the initial command(s) executed upon starting the Docker container. It is listed in the `Dockerfile` as `ENTRYPOINT` and can take 2 forms: as commands followed by parameters (`ENTRYPOINT command param1 param2`)  or as an executable (`ENTRYPOINT [“executable”, “param1”, “param2”]`)


### :material-docker: push

By default `docker push` will upload your local container image to the [Docker Hub](){target=_blank}

We will cover `push` in more detail at the end of Day 2, but the essential functionality is the same as pull.

Also, make sure that your container has the appropriate [tag](./intro.md#tag)

First, make sure to log into the Docker Hub, this will allow you to download private limages, to upload private/public images:

```
docker login
```

Alternately, you can [link GitHub / GitLab accounts](https://hub.docker.com/settings/linked-accounts){target=_blank} to the Docker Hub.

To push the image to the Docker Hub:

```
docker push username/imagename:tag 
```

or

```
docker push docker.io/username/imagename:tag
```
or, to a private registry, here we push to CyVerse private `harbor.cyverse.org` registry which uses "project" sub folders:

```
docker push harbor.cyverse.org/project/imagename:newtag 
```
