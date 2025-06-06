# Birch.dev site

This is a personal site for me, James Birch, to showcase my work, projects, and interests in software engineering and product management.

This is a static site built with [Hugo](https://gohugo.io/) and hosted on [GitHub Pages](https://pages.github.com/).

## How to run this site locally
This repo has been set up to run in a devcontainter using [Devcontainers](https://code.visualstudio.com/docs/devcontainers/containers).
To run this site locally, you will need to have [Docker](https://www.docker.com/) installed on your machine.
1. Clone this repository to your local machine.
2. Open the repository in Visual Studio Code.
3. If prompted, reopen the repository in a devcontainer.
4. Open a terminal in Visual Studio Code.
5. Run the following command to start the Hugo server:
   ```bash
   hugo server -D
   ```
   (The `-D` flag includes draft content in the build, which is useful for local development.)
6. Open your web browser and navigate to `http://localhost:1313` to view the site.

## How to build this site
To build this site, you can use the following command in the terminal:
```bash
hugo
```
This will generate the static files in the `public` directory, which can then be deployed to a web server or hosting service.

## How to deploy this site
To deploy this site, you can use GitHub Actions to automatically build and deploy the site to GitHub Pages. The workflow is defined in the `.github/workflows/deploy.yml` file.
You can trigger the deployment by pushing changes to the `main` branch of this repository. The workflow will build the site and deploy it to the `gh-pages` branch, which is used by GitHub Pages to serve the site.
