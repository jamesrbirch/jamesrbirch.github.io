---
title: Dotnet Refresher
date: "2023-05-29"
categories: 
  - "c#"
  - "dotnet"
excerpt: Notes and thoughts running through the Microsoft Build Challenge - Build apps for web, mobile, desktop, and more using .NET and C#
---

I've dipped in and out of donet for years but through work haven't really had a chance to fully get a grip on the advances in the dotnet landscape.  I've had a few side projects to test things out but as Microsoft Build is taking place and the exciting features of .net 8 with the use of razor components being used across the piece I want to get up to speed.

This is a collection of notes and tid bits as I run through the basics again.

## CSS Variables

You can nest declared css variables.  `:root` is used to reference the root of the tree '<html>' and allows any child element to use the variables declared on it.

```css

:root {
  --green: #00FF00;
  --white: #FFFFFF;
  --black: #000000;
}

.light-theme {
  --bg: var(--green);
  --fontColor: var(--black);
}
.dark-theme {
  --bg: var(--black);
  --fontColor: var(--green);
}

body {
  background: var(--bg);
  color: var(--fontColor);
  font-family: helvetica;
}

```

In this example applying `class='dark-theme'` to the `body` element will set the values for `--bg` and `--fontColor`.

## Razor Pages
In the example we use a `models` folder to store models (well obviously!) but there is also a `services` folder which takes over the role of a data access layer.  This is registered for dependency injection in the program.cs

```csharp
using ContosoPizza.Data;
using ContosoPizza.Models;

namespace ContosoPizza.Services
{
    public class PizzaService
    {
        private readonly PizzaContext _context = default!;

        public PizzaService(PizzaContext context) 
        {
            _context = context;
        }
        
        public IList<Pizza> GetPizzas()
        {
            if(_context.Pizzas != null)
            {
                return _context.Pizzas.ToList();
            }
            return new List<Pizza>();
        }

        public void AddPizza(Pizza pizza)
        {
            if (_context.Pizzas != null)
            {
                _context.Pizzas.Add(pizza);
                _context.SaveChanges();
            }
        }

        public void DeletePizza(int id)
        {
            if (_context.Pizzas != null)
            {
                var pizza = _context.Pizzas.Find(id);
                if (pizza != null)
                {
                    _context.Pizzas.Remove(pizza);
                    _context.SaveChanges();
                }
            }            
        } 
    }
}

```
## Developer Certificate

```shell
dotnet dev-certs https --trust
```

## dotnet repl
1. Install the .NET HTTP REPL command-line tool that you'll use to make HTTP requests to the web API

```shell
dotnet tool install -g Microsoft.dotnet-httprepl
```

2. Connect to the web API
```shell
httprepl https://localhost:{PORT}
```

3. Explore API endpoints
```shell
ls
```
The preceding command detects all APIs available on the connected endpoint. It should display the following:

Output
```shell
https://localhost:{PORT}/ > ls
.                 []
WeatherForecast   [GET]
```

4. You can navigate like a folder structure
```shell
cd WeatherForecast
```

5. Make a GET request in `HttpRepl`
```shell
get
```

5. End the current `HttpRepl` 
```shell
exit
```

## Package Management

To see installed dependencies
```shell
dotnet list package
```

To see what dependencies are outdated
```shell
dotnet list package --outdated
```

Upgrade to the latest version
```shell
dotnet add package Humanizer
```

Upgrade to a specific version
```shell
dotnet add package Humanizer --version 2.11.10
```

## Logging

The key differences are:

- System.Console
  - Always enabled and always writes to the console.
  - Useful for information that your customer might need to see in the release.
  - Because it's the simplest approach, it's often used for ad-hoc temporary debugging. This debug code is often never checked in to source control.
- System.Diagnostics.Trace
  - Only enabled when TRACE is defined.
  - Writes to attached Listeners, by default, the DefaultTraceListener.
  - Use this API when you create logs that will be enabled in most builds.
- System.Diagnostics.Debug
  - Only enabled when DEBUG is defined (when in debug mode).
  - Writes to an attached debugger.
  - Use this API when you create logs that will be enabled only in debug builds.

```csharp
Console.WriteLine("This message is readable by the end user.");
Trace.WriteLine("This is a trace message when tracing the app.");
Debug.WriteLine("This is a debug message just for developers.");
```

### Define TRACE and DEBUG constants

By default, when an application is running under debug, the `DEBUG` constant is defined. This can be controlled by adding a DefineConstants entry in the project file in a property group. Here's an example of turning on `TRACE` for both Debug and Release configurations in addition to `DEBUG` for Debug configurations.

```xml
<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|AnyCPU'">
    <DefineConstants>DEBUG;TRACE</DefineConstants>
</PropertyGroup>
<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|AnyCPU'">
    <DefineConstants>TRACE</DefineConstants>
</PropertyGroup>
```

## Working with files and folders

### Special path characters

Different operating systems use different characters to separate directory levels.

For example, Windows uses the backslash (`stores\\201`) and macOS uses the forward slash (`stores/201`).

To help you use the correct character, the `Path` class contains the `DirectorySeparatorChar` field.

.NET automatically interprets that field into the separator character that's applicable to the operating system when you need to build a path manually.

```csharp
Console.WriteLine($"stores{Path.DirectorySeparatorChar}201");

// returns:
// stores\\201 on Windows
//
// stores/201 on macOS
```
### Get everything you need to know about a file or path

The Path class contains many different methods that do various things. You can get the most information about a directory or a file by using the `DirectoryInfo` or `FileInfo` classes, respectively.


```csharp
string fileName = $"stores{Path.DirectorySeparatorChar}201{Path.DirectorySeparatorChar}sales{Path.DirectorySeparatorChar}sales.json";

FileInfo info = new FileInfo(fileName);

Console.WriteLine($"Full Name: {info.FullName}{Environment.NewLine}Directory: {info.Directory}{Environment.NewLine}Extension: {info.Extension}{Environment.NewLine}Create Date: {info.CreationTime}"); // And many more
```


## Biggest changes

### It's just a console
One of the things that's caught me out espiecially reading around background jobs is that the web server is running executable and can have long running processes as well as serving requests.  
Making the assumption of .net Framework where the advice was to not have long running processes in the IIS hosted web layer and instead farm them out to other applications did leave me confused reading the documentation.

I really like the change, it makes things a lot simpler.  It's interesting that background jobs remain specific for a task and it takes a third party app like hangfire to wrap background jobs to something that resembles Sidekiq for Ruby on Rails.

## Things to look at next:
- API - Expected HTTP code based on the request type
- How to use a github action to create pull requests for version updates
- Humaniser nuget package