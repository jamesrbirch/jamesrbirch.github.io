# Learning Svelte

For a simple Svelte project we can clone the template repo from github.

```zsh
npx degit sveltejs/template my-svelte-app

npm install

npm run dev
```

## Components
Each component is made up of:
- Script block
- HTML
- CSS

## Syntax

### Loops

```svelte
{#each myArray as myLocalVarName}
    Show stuff from {myLocalVarName.stuff}
{/each}
```

### If

```svelte
{#if booleanExpression}
    Show markup conditionally
{/if}
```

## Getting data to a component

In the script tag we can hook into the Svelte lifecycle onMount which is run once per component

```svelte
let books = [];

onMount(async function(){
    const {data} = await httpGet("/?_sort=id&_order=desc");
    books = data;
})
```