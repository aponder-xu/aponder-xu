---
title: install mongodb on centos 7
date: 2017-03-20 12:51:41
categories:
- Linux
    - CentOS
        - CentOS 7
tags:
- CentOS
---

## Step 1: [download the package](https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-3.4.2.tgz)

```bash
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-3.4.2.tgz
```

## Step 2: extract it

```bash
tar xzf mongodb-linux-x86_64-rhel70-3.4.2.gz
```

## Step 3: create mongoDB database diretory

```bash
mkdir -p /data/db
```

## Step 4: start mongodb without auth

```bash
/root/mongodb-linux-x86_64-rhel70-3.4.2/bin/mongod --port 27017 --dbpath /data/db
```

## Step 5: connect to mongodb

```bash
/root/mongodb-linux-x86_64-rhel70-3.4.2/bin/mongo --port 27017
```

## Step 6: add admin to mongoDB

```mongodb
use admin
db.createUser({user:"admin",pwd:"password",roles:["root"]})
db.auth("admin", "password");
```

## Step 7: restart mongodb with auth

```bash
/root/mongodb-linux-x86_64-rhel70-3.4.2/bin/mongod --port 27017 --dbpath /data/db --auth
```