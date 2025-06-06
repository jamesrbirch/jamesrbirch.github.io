---
title: Typescript Dev Container gives ETXTBSY error
date: '2023-07-15'
categories:
  - 'dev container'
  - 'npm'
  - 'yarn'
excerpt: 'A frustrating error when trying to npm install in a dev container...'
---

RAWRRRRRRRRR.. that's the sound of a dev who spent 3 hours down a rabbit hole googling and pleading with bing chat to help.

I wanted to spend a bit of time learning more Svelte so I pulled a starter template of [.net minimal API and Svelte starter kit by Rob Conery](https://github.com/robconery/Svelte.Starter)

I thought it's the ideal place to use a dev container for the JS/TS frontend side (the C# dev kit is getting there but it's still a bit of a janky preview at the moment)

When trying to do an `npm install` I had the following error:

```shell
npm ERR! code 1
npm ERR! path /app/node_modules/esbuild
npm ERR! command failed
npm ERR! command sh -c node install.js
npm ERR! node:internal/errors:496
npm ERR!     ErrorCaptureStackTrace(err);
npm ERR!     ^
npm ERR! 
npm ERR! <ref *1> Error: spawnSync /app/node_modules/esbuild/bin/esbuild ETXTBSY
npm ERR!     at Object.spawnSync (node:internal/child_process:1117:20)
npm ERR!     at spawnSync (node:child_process:871:24)
npm ERR!     at Object.execFileSync (node:child_process:914:15)
npm ERR!     at validateBinaryVersion (/app/node_modules/esbuild/install.js:98:28)
npm ERR!     at /app/node_modules/esbuild/install.js:285:5 {
npm ERR!   errno: -26,
npm ERR!   code: 'ETXTBSY',
npm ERR!   syscall: 'spawnSync /app/node_modules/esbuild/bin/esbuild',
npm ERR!   path: '/app/node_modules/esbuild/bin/esbuild',
npm ERR!   spawnargs: [ '--version' ],
npm ERR!   error: [Circular *1],
npm ERR!   status: null,
npm ERR!   signal: null,
npm ERR!   output: null,
npm ERR!   pid: 0,
npm ERR!   stdout: null,
npm ERR!   stderr: null
npm ERR! }
npm ERR! 
npm ERR! Node.js v20.3.0
```

Oh boy, what a great opportunity to learn. I'm not exactly sure of the underlying error and whether it's an npm version change or something to do with the version of Node.js but something about the esbuild install locks a file and aborts the `npm install` operation.

The 3 fixes I found were:
1. Clear the npm cache `npm cache clean --force` and remove the esbuild dependancies
2. Use a previous version of the container - I did drop down to version 18 of node instead of 20 and `npm install` worked no problem
3. Use Yarn `sudo npm install -g yarn` then `yarn install`

I opted for option 3 and it worked like a charm.

You're welcome future me ❤️