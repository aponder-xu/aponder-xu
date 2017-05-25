---
title: license for StarUML
date: 2017-03-21 21:02:11
tags:
- Lisence
- StarUML
---

## Override `function validate(PK, name, product, licenseKey)`

find where your StarUML install and the `LicenseManagerDomain.js` file locating in  {INSTALL_PATH}/www/license/node/

let `function validate(PK, name, product, licenseKey)` return something like this:

```js
return {
    name: "xiyusullos",
    product: "StarUML",
    licenseType: "vip",
    quantity: "blog.xy-jit.cc",
    licenseKey: "later equals never!"
};
```

