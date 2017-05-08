---
title: 'How to install docker, docker-compose and laradock offline'
keywords:
  - xiyusullos
  - 'How to install docker, docker-compose and laradock offline'
date: 2017-05-08 19:39:30
tags:
---

## Step 0: prerequisites

- download [docker binary](https://get.docker.com/builds/Linux/x86_64/docker-17.05.0-ce.tgz)
- download [docker-compose binary](https://github.com/docker/compose/releases/download/1.13.0/docker-compose-Linux-x86_64)
- download [laradock](https://github.com/laradock/laradock/archive/master.zip)
- download [laradock images](https://pan.baidu.com/s/1bptNEk3)
- your application code, for example, **dgiot.xy-jit.cc.zip**

## Step 1: install docker

```bash
tar xzf docker-17.05.0-ce.tgz 
sudo cp docker/* /usr/bin/
```

## Step 2: start the docker daemon

```bash
sudo dockerd &
```

## Step 3: install docker-compose

```bash
sudo cp docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Step 4: load docker images

```bash
sudo docker load -i images/tianon-true-latest.tar
sudo docker load -i images/laradock_nginx-latest.tar
sudo docker load -i images/laradock_php-fpm-latest.tar
sudo docker load -i images/laradock_workspace-latest.tar
```

## Step 5: prepare your application code

```bash
unzip dgiot.xy-jit.cc.zip
cd dgiot.xy-jit.cc
sudo chmod 777 -R storage bootstrap/cache
unzip ../laradock-master.zip
mv laradock-master/ laradock
cd laradock
cp env-example .env
```

## Step 6: start your application

```bash
sudo docker-compose up -d nginx
```
