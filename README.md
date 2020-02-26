# Piral Next.js Example

This example shows how an existing application using Next.js could be changed to be a pilet.

The application is still capable of running as a Next.js app, while also being buildable as a pilet.

**Remark**: This approach is valid for a single Next.js pilet. If you have multiple Next.js applications that you want to run in the same Piral instance then sharing the `next/head` etc. components from the app shell would be recommended.

## Required Changes

We've installed the `piral-cli` and the respective app shell (in this case `sample-piral`). We've added the necessary fields to the `package.json`.

### `package.json`

Most notably we did add:

```json
  "piral": {
    "name": "sample-piral",
    "externals": [
      "sample-piral",
      "react",
      "react-router-dom"
    ]
  },
```

To improve the experience even more we've also declared peer dependencies.

```json
  "peerDependencies": {
    "react": "*",
    "react-router-dom": "*",
    "sample-piral": "*"
  },
```

Finally, it makes sense to also add scripts for building the pilet.

```json
  "scripts": {
    "dev": "next",
    "build": "next build",
    "build-pilet": "pilet build",
    "debug-pilet": "pilet debug",
    "start": "next start"
  },
```

### `src/index.js`

A new `src/index.js` file was added. This one performs all the registrations.

We've also added a tile to link to `/sample` for demonstration purposes.

### Reference React

Every source file did not reference `React` explicitly. This is, however, usually necessary. Potentially, a `.babelrc` could be used for this. In this example we've just added

```js
import * as React from 'react';
```

on top of each file.

### React Router

Since the next router is not compatible with the React router I've also made a slight change here. I've added an `alias` field to the `package.json`. This tells Parcel to resolve some package differently. In our case `next/link` will be resolved to `./components/Link.js`. This element will also prefix all used links with "/sample" such that `/contact` would be `/sample/contact`.

```json
  "alias": {
    "next/link": "./components/Link.js"
  },
```
