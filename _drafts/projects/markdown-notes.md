# Markdown Notes

## What does it do?

### 🏆 1st Phase - MVP

-   🏆 Must be able to login with a user account
-   🏆 Must be able to logout
-   🏆 Can see a list of previous notes they have made
-   🏆 Create a new note
-   🏆 Read a note
-   🏆 Update a note
-   🏆 Delete a note

### 💚 2nd Phase

-   💚 Users must be able to use markdown to create a note
-   💚 When a user views a note they should see the notes rendered correctly
-   💚 Split screen preview
-   💚 Live update to split screen preview

### 😎 3rd Phase

-   😎
-   😎 Syntax highlighting for markdown editor
-   😎 Can place notes in a group / folder
-   😎 Can reorder notes in a group / folder
-   😎 Can create and assign tags to notes
-   😎 Upload images as part of the markdown

### ✨ 4th Phase - Magic features

-   ✨ Auto suggest tags
-   ✨ Can place a folder in a folder
-   ✨ Can use separators to organise
-   ✨ Can use icons / colours / emojis for a folder
-   ✨ Full text search

### 💡 Other Ideas

-   💡 Create templates to use
-   💡 Assign a template type per folder
-   💡 Share documents and folders with other people
-   💡 Create a website based on contents
-   💡 Can use markdown notes to create and link to tasks
-   💡 Ability to give an URL and the app can convert the webpage to markdown

## Technology

-   Must use Auth0 as authentication provider
-   Must use a .net core API backend
-   Must use a React front end
-   Must have tests
-   Must use a CI/CD pipeline
-   Must use Docker
-   Must use Postgresql
-   Must use Rider
-   Must use Dapper as SQL access
-   Must have database migrations

The idea is to test out securing a .net core API with Auth0 and have the application running in a container.

The application can be rewritten later to test out serverless computing on AWS.
With this in mind we need to write the application so that file storage and processes can be replaced.

## General

-   Must support multiple languages?
-   Must support emojis

Syntax Highlighting:
[Prism.js](https://prismjs.com/)

Classless CSS:
[Water](https://watercss.kognise.dev/)
[Marx](https://github.com/mblode/marx)
[new.css](https://newcss.net/)
