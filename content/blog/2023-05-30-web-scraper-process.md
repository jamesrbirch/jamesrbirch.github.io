---
title: Web Scraper Process
date: '2023-05-29'
categories:
  - 'c#'
  - 'dotnet'
  - 'web scraping'
excerpt: Planning for web scraping service
---

## Overview

1. Add item to processing queue based on a timer
2. Processor picks up the queue item

- Based on the url and type will choose processor
- Gets HTML
- Parses data from selector list
- Saves the data to an ingest queue

3. Process picks up the queue item

- Try to match the url and product
- If no product found add it and add the url to it
- Add price data

- Create HTML processor with test for wayland games
- Refactor HTML processor code to allow other websites
- Create HTML processor with test for mighty lancer

- Create a store to store the urls to check
- Create a background job to check the store and add items to a process queue
- Create a background job to check the process queue to get the webpage and run the HTML processor on it
- Extend the method to save the results to the database

- Web front end
  - Log in to website
  - Add admin section
  - Manage url list page
  - Manage url API
  


## 3 / 6 Stage Build

1. Build it in C# as a standard monolith
2. Build it in C# serverless functions
3. Build it in Go
4. Build it in Go serverless
5. Build it in Typescript
6. Build it in Typescript serverless

Citadel Paints Test:
https://www.waylandgames.co.uk/painting-modelling/paints-sprays-primers/citadel-paints
https://www.mightylancergames.co.uk/collections/paints
https://elementgames.co.uk/paints-hobby-and-scenery/paints-washes-etc/citadel-games-workshop-paints
https://www.firestormgames.co.uk/paints-hobby-scenery/citadel-colour
https://magicmadhouse.co.uk/games-workshop/painting-modelling
https://www.chaoscards.co.uk/shop/miniature-games/hobby-accessories-paints/sort/newly-listed/show/64-products

## Old

1. Add URL to a queue

- Use the queue id as a unique identifier

2. HTML Download Service

- Monitors the URL queue
- Downloads the data
- Saves it to a store
- Adds the details to a HTML process queue
- On failure it will retry
- If x failures it will store the download in a failed location and send a notification

3. HTML Process Service

- Monitors the HTML queue
- Downloads the data from the store
- Parses the HTML into a JSON object
- The JSON object would be added to an ingestion queue
- On failure it will retry
- If x failures it will store the download in a failed location and send a notification

4. Ingestion Queue Service

- Monitors the Ingestion queue
- Checks the unique parsed slug against the product cache layer
- If not found it will add a new product (should it go into a new queue? only create if manually asked to?)
  - Add a queue item to download the product image to cdn
  - Add new product into the product table
- Add new price data into the database
