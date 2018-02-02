---
title: License for StarUML
date: 2017-03-21 21:02:11
tags:
- Lisence
- StarUML
---

## Override `function validate(PK, name, product, licenseKey)`

Find where is your StarUML installed and edit the `LicenseManagerDomain.js` file whicd locates in  `{INSTALL_PATH}/www/license/node/`. For instance, `C:\Program Files (x86)\StarUML\www\license\node\LicenseManagerDomain.js`

Then let `function validate(PK, name, product, licenseKey)` return something like this:

```js
return {
    name: "xiyusullos",
    product: "StarUML",
    licenseType: "vip",
    quantity: "1",
    licenseKey: "hello"
};
```

