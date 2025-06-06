---
title: Structuring a complex Supabase query
date: '2023-08-08'
categories:
  - 'supabase'
  - 'typescript'
excerpt: 'How to form a complex query in Supabase'
---

Given that we want to get an object like:

```json

const data = {
  id: 'ABCD1234...',
  username: 'JohnSmith',
  location: 'Somwhere, USA',
  profilePicture: 'http://...',
  wishlist: [
     {
         id: 'POIU9876..',
         name: 'Product Name',
         price: 99.99,
         description ' ... ',
         tags: [
            { id: 1, name: 'Tag1' },
            { id: 2, name: 'Tag2' },
            ...
         ]
     }
  ],
  wishlistCount; 50,
  follows: [
    {
       id: 'ABCD1234...',
       username: 'JaneSmith',
        profilePicture: 'http://...',
    },
    ...
  ],
  followCount: 10
}

```

We should be able to use the following:

```ts
const { data, error } = await supabase.from('users').select(`
    id,
    username,
    location,
    profilePicture,
    wishlistProducts:products(
      id,
      name,
      price,
      description,
      tags(
        id,
        name
      )
    ),
    wishlistCount:wishlist(count),
    follows(
      id,
      username,
      profilePicture
    ),
    followCount:follows(count)
  `);
```

This is assuming all the foreign keys between the tables are setup correctly.

Original post:
https://github.com/orgs/supabase/discussions/1393
