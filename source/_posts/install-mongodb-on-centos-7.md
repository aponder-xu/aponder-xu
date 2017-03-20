---
title: install mongodb on centos 7
date: 2017-03-20 12:51:41
tags:
---

## Step 1: [download the package](https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-3.4.2.tgz)

`wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-3.4.2.tgz`

## Step 2: extract it

`tar xzf mongodb-linux-x86_64-rhel70-3.4.2.gz`

## Step 3: create mongoDB database diretory

`mkdir -p /data/db`

## Step 4: start mongodb without auth

`/root/mongodb-linux-x86_64-rhel70-3.4.2/bin/mongod --port 27017 --dbpath /data/db`

## Step 5: connect to mongodb

`/root/mongodb-linux-x86_64-rhel70-3.4.2/bin/mongo --port 27017`

## Step 6: add admin to mongoDB

```mongodb
use admin
db.createUser({user:"admin",pwd:"password",roles:["root"]})
db.auth("admin", "password");
```

## Step 7: restart mongodb with auth

`/root/mongodb-linux-x86_64-rhel70-3.4.2/bin/mongod --port 27017 --dbpath /data/db --auth`