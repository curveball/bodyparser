Curveball Body Parser
=====================

This package is a middleware for [Curveball][1]. It helps parsing JSON and
Text request bodies.

When this middleware is added, it will automatically read all bodies from
requests that have the following values as their `Content-Type` header:

* `application/json`
* `application/*+json`
* `application/x-www-form-urlencoded`
* `text/*`

It sets the result of this parsing process to the `context.request.body`
property. In the case of text bodies, it will result in a string.

In the case of JSON bodies, it will be the result of `JSON.parse` on the
body.

Installation
------------

    npm install @curveball/bodyparser


Getting started
---------------

```typescript
import { Application } from '@curveball/core';
import bodyParser from '@curveball/bodyparser';

const app = new Application();
app.use(bodyParser());


app.use( ctx => {
  // Log request bodies
  console.log(ctx.request.body);
});
```

API
---

### bodyParser

The default export for this package is the `bodyParser` function. When called,
this function returns a middleware.

[1]: https://github.com/curveball/core
