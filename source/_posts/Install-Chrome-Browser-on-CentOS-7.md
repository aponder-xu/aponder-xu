---
title: Install Chrome Browser on CentOS 7
date: 2017-03-05 21:56:26
categories:
- Linux
    - CentOS
        - CentOS 7
tags:
- CentOS
---

## Step 1: add a new repo named `google-chrome.repo` in /etc/yum.repos.d/

``` bash
cd /ect/yum.repos.d/ && vim google-chrome.repo
```

<!-- more -->

## Step 2: the file centent of `google-chrome.repo` is like following:

```
[google-chrome]
name=google-chrome
baseurl=http://dl.google.com/linux/chrome/rpm/stable/$basearch
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
```
## Step 3: now install it

``` bash
yum -y install google-chrome-stable --nogpgcheck    # for some reason in some country
```

## Step 4: let's start it

``` bash
google-chrome &
```