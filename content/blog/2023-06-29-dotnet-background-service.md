---
title: .net Background Worker Service
date: "2023-06-29"
categories: 
  - "c#"
  - "dotnet"
  - "background worker"
excerpt: A look into background workers for .net
---

# .net Background Worker Service

This is the base for creating a background worker service in a .net hosted environment.

This code will create a service that keeps looping while the application is active.

`Program.cs`
```csharp
using System.ComponentModel;
using api;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHostedService<BackgroundWorkerService>();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
```

`BackgroundWorkerServer.cs`
```csharp
namespace api
{
    public class BackgroundWorkerService : BackgroundService
    {
        readonly ILogger<BackgroundWorkerService> _logger;

        public BackgroundWorkerService(ILogger<BackgroundWorkerService> logger)
        {
            _logger = logger;
        }

        protected async override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("Background worker is running at: {time}", DateTimeOffset.Now);
                await Task.Delay(1000, stoppingToken);
            }
        }
    }
}
```

The next section will build on this example to support multiple methods running concurrently up to a maximum amount.