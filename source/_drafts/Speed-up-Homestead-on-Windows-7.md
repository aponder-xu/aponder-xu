title: Speed up Homestead on Windows 7
author: xiyusullos
date: 2018-05-30 10:56:39
tags:
---
## Install vagrant-winnfsd plugin

See [detail](https://github.com/winnfsd/vagrant-winnfsd) about vagrant-winnfsd

```bash
vagrant plugin install vagrant-winnfsd
```

## Enable 'nfs' in the `Homestead.yaml`

For example, 
```yaml
folders:
  - map: D:/codes
    to: /home/vagrant/code
    type: "nfs"
```

From http://tech.osteel.me/posts/2016/01/19/how-to-enable-nfs-on-laravel-homestead.html