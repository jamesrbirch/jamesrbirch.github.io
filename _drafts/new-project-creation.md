# New Project Creation

## Create the solution

### `<project name>`.api

_Contains the api code for the project - in this case c# .net core API_

### `<project name>`.web

_Contains the front end client application for the project - in this case React_

### `<project name>`.models

_Contains the models for the database and view models. This is where we can automatically create the view models for the client from the backend view models_

### `<project name>`.repository

_Contains the methods to access the datastore_

Reading:

[Dapper with .net core](https://www.learmoreseekmore.com/2020/09/dotnetcore-using-dapper.html)

### `<project name>`.tests

_Contains the tests for the project_

# Development work flow

-   Create database container on docker
-   Have web apps development appsettings pointing to the docker database
    -   _Is there a way to share all these variables? environment variables?_
-   How to run the app?
    -   Have the web app run on local?
    -   Have the web app run in docker?
    -   _Run a test API with React front end and see how it ties together_

# Database setup

## Create a database on docker

## Starts when the project is run

### Optional: Reset the database

### Database initialisation scripts

### Optional: Create test data

### Database migrations

Todo:

-   Https
    Questions: - Should we expose port 443 directly from the API? - Where does the certificate sit when an app is hosted on docker? - Do we need a reverse proxy in front of the application

    -   Expose port 443 from the container
    -   Get the API listening to port 443

-   API

    -   Should the response be standarised so that we get a structure like:
        RequestResult
        Status
        ErrorMessage
        Result

-   Technology

    -   Use a third party OAuth provider
    -   Use JSON data to create form templates with expected responses
        -   Great functionality
        -   After initial design should keep maintenance down, easy changes
        -   Keeps user interface using a standard pattern

-   Database Migration API

    -   Check if the connection exists
    -   Check if the database exists
    -   Optional: Drop if created
    -   Run database creation scripts
    -   Run migration scripts

-   Docker

    -   [Rider with Docker](https://blog.jetbrains.com/dotnet/2019/05/24/better-look-dockerfiles-creating-container-rider/)

-   Rider

    -   Save settings centrally
    -   Increase project tree size
    -   Change font in editor
    -   Is rider better than VS?

        -   Up to 5 of your individual users can use the software concurrently to develop and test your applications where it is not classed as enterprise

            **An “enterprise”** is any organization and its affiliates who collectively have either (a) more than 250 PCs or users or (b) one million U.S. dollars (or the equivalent in other currencies) in annual revenues, and “affiliates” means those entities that control (via majority ownership), are controlled by, or are under common control with an organization.

        -   Downsides:
            -   Not cross platform. Could be good to run linux / mac?
            -   Test coverage tools are not great.
            -   Docker support doesn't seem complete?

    -   Is rider better than VS Code?
        -   Prefer the launch setting in VSCode

-   Hosting

    -   Option #1: Serverless:

        -   Azure -> Function App v2 (nice with Eventgrid and Logic Apps)
        -   Amazon -> AWS Lambda

    -   Option #2: PaaS

        -   Azure -> Azure Web Apps
        -   Amazon -> AWS Elastic Beanstalk

    -   Option #3: Docker
        -   Azure -> Azure Kubernetes Service
        -   Amazon -> Amazon Elastic Container Service / Amazon Elastic Kubernetes Service / AWS Fargate

References:

[How to set the hosting environment in ASP.NET Core](https://andrewlock.net/how-to-set-the-hosting-environment-in-asp-net-core/)
