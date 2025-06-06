---
title: Go Rails Getting Started
date: "2023-02-05"
categories: 
  - "ruby"
  - "rails"
  - "getting started"
  - "tutorial"
  - "cheat sheet"
excerpt: Notes and concepts from gorails.com getting started.
---

## Setup
I've opted to go with VSCode Dev Containers.  To install you need 
- Docker desktop
- The VSCode extension [Dev Containers by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)


For the extensions in the Dev Container to improve the Ruby and Rails experience in VSCode:
- [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [Rails](https://marketplace.visualstudio.com/items?itemName=bung87.rails)
- [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
- [VSCode Ruby](https://marketplace.visualstudio.com/items?itemName=wingrunr21.vscode-ruby)
- [VSCode Gemfile](https://marketplace.visualstudio.com/items?itemName=bung87.vscode-gemfile)

## Ruby 

```shell
rails new <project_name>
```

To run the webserver
```shell
rails s
```

## Links in the project

Use the helper
```ruby
<%= link_to "About", about_path, class: "nav-link" %>
```