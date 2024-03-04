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
