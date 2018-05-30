title: Mostly Used Linux Commands
author: xiyusullos
tags:
  - Linux
categories:
  - Linux
date: 2018-05-30 22:09:00
---
# Mostly Used Linux Commands

## cd

cd命令用来切换工作目录至dirname。 其中dirName表示法可为绝对路径或相对路径。若目录名称省略，则变换至使用者的home directory(也就是刚login时所在的目录)。另外，~也表示为home directory的意思，.则是表示目前所在的目录，..则表示目前目录位置的上一层目录。

### 语法

```bash
cd (选项) (参数)
```

### 选项

```bash
-p 如果要切换到的目标目录是一个符号连接，直接切换到符号连接指向的目标目录
-L 如果要切换的目标目录是一个符号的连接，直接切换到字符连接名代表的目录，而非符号连接所指向的目标目录。
- 当仅实用"-"一个选项时，当前工作目录将被切换到环境变量"OLDPWD"所表示的目录。
```

### 实例

```bash
cd    进入用户主目录；
cd ~  进入用户主目录；
cd -  返回进入此目录之前所在的目录；
cd ..  返回上级目录（若当前目录为“/“，则执行完后还在“/"；".."为上级目录的意思）；
cd ../..  返回上两级目录；
cd !$  把上个命令的参数作为cd参数使用。
```


## ls

ls命令用来显示目标列表，在Linux中是使用率较高的命令。ls命令的输出信息可以进行彩色加亮显示，以分区不同类型的文件。

### 语法

```bash
ls（选项）（参数）
```

### 选项

```bash
-a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；
-A：显示除影藏文件“.”和“..”以外的所有文件列表；
-C：多列显示输出结果。这是默认选项；
-l：与“-C”选项功能相反，所有输出信息用单列格式输出，不输出为多列；
-F：在每个输出项后追加文件的类型标识符，具体含义：“*”表示具有可执行权限的普通文件，“/”表示目录，“@”表示符号链接，“|”表示命令管道FIFO，“=”表示sockets套接字。当文件为普通文件时，不输出任何标识符；
-b：将文件中的不可输出的字符以反斜线“”加字符编码的方式输出；
-c：与“-lt”选项连用时，按照文件状态时间排序输出目录内容，排序的依据是文件的索引节点中的ctime字段。与“-l”选项连用时，则排序的一句是文件的状态改变时间；
-d：仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录列表；
-f：此参数的效果和同时指定“aU”参数相同，并关闭“lst”参数的效果；
-i：显示文件索引节点号（inode）。一个索引节点代表一个文件；
--file-type：与“-F”选项的功能相同，但是不显示“*”；
-k：以KB（千字节）为单位显示文件大小；
-l：以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等；
-m：用“,”号区隔每个文件和目录的名称；
-n：以用户识别码和群组识别码替代其名称；
-r：以文件名反序排列并输出目录内容列表；
-s：显示文件和目录的大小，以区块为单位；
-t：用文件和目录的更改时间排序；
-L：如果遇到性质为符号链接的文件或目录，直接列出该链接所指向的原始文件或目录；
-R：递归处理，将指定目录下的所有文件及子目录一并处理；
--full-time：列出完整的日期与时间；
--color[=WHEN]：使用不同的颜色高亮显示不同类型的。
```

### 参数

目录：指定要显示列表的目录，也可以是具体的文件。

### 实例

显示当前目录下非影藏文件与目录

```bash
[root@localhost ~]# ls
anaconda-ks.cfg  install.log  install.log.syslog  satools
```

显示当前目录下包括影藏文件在内的所有文件列表

```bash
[root@localhost ~]# ls -a
.   anaconda-ks.cfg  .bash_logout   .bashrc  install.log         .mysql_history  satools  .tcshrc   .vimrc
..  .bash_history    .bash_profile  .cshrc   install.log.syslog  .rnd            .ssh     .viminfo
```

输出长格式列表

```bash
[root@localhost ~]# ls -1

anaconda-ks.cfg
install.log
install.log.syslog
satools
```

显示文件的inode信息

索引节点（index inode简称为“inode”）是Linux中一个特殊的概念，具有相同的索引节点号的两个文本本质上是同一个文件（除文件名不同外）。

```bash
[root@localhost ~]# ls -i -l anaconda-ks.cfg install.log
2345481 -rw------- 1 root root   859 Jun 11 22:49 anaconda-ks.cfg
2345474 -rw-r--r-- 1 root root 13837 Jun 11 22:49 install.log
```

水平输出文件列表

```bash
[root@localhost /]# ls -m

bin, boot, data, dev, etc, home, lib, lost+found, media, misc, mnt, opt, proc, root, sbin, selinux, srv, sys, tmp, usr, var
```

修改最后一次编辑的文件

最近修改的文件显示在最上面。

```bash
[root@localhost /]# ls -t

tmp  root  etc  dev  lib  boot  sys  proc  data  home  bin  sbin  usr  var  lost+found  media  mnt  opt  selinux  srv  misc
```

显示递归文件

```bash
[root@localhost ~]# ls -R
.:
anaconda-ks.cfg  install.log  install.log.syslog  satools

./satools:
black.txt  freemem.sh  iptables.sh  lnmp.sh  mysql  php502_check.sh  ssh_safe.sh
```

打印文件的UID和GID

```bash
[root@localhost /]# ls -n

total 254
drwxr-xr-x   2 0 0  4096 Jun 12 04:03 bin
drwxr-xr-x   4 0 0  1024 Jun 15 14:45 boot
drwxr-xr-x   6 0 0  4096 Jun 12 10:26 data
drwxr-xr-x  10 0 0  3520 Sep 26 15:38 dev
drwxr-xr-x  75 0 0  4096 Oct 16 04:02 etc
drwxr-xr-x   4 0 0  4096 Jun 12 10:26 home
drwxr-xr-x  14 0 0 12288 Jun 16 04:02 lib
drwx------   2 0 0 16384 Jun 11 22:46 lost+found
drwxr-xr-x   2 0 0  4096 May 11  2011 media
drwxr-xr-x   2 0 0  4096 Nov  8  2010 misc
drwxr-xr-x   2 0 0  4096 May 11  2011 mnt
drwxr-xr-x   2 0 0  4096 May 11  2011 opt
dr-xr-xr-x 232 0 0     0 Jun 15 11:04 proc
drwxr-x---   4 0 0  4096 Oct 15 14:43 root
drwxr-xr-x   2 0 0 12288 Jun 12 04:03 sbin
drwxr-xr-x   2 0 0  4096 May 11  2011 selinux
drwxr-xr-x   2 0 0  4096 May 11  2011 srv
drwxr-xr-x  11 0 0     0 Jun 15 11:04 sys
drwxrwxrwt   3 0 0 98304 Oct 16 08:45 tmp
drwxr-xr-x  13 0 0  4096 Jun 11 23:38 usr
drwxr-xr-x  19 0 0  4096 Jun 11 23:38 var
```

列出文件和文件夹的详细信息

```bash
[root@localhost /]# ls -l

total 254
drwxr-xr-x   2 root root  4096 Jun 12 04:03 bin
drwxr-xr-x   4 root root  1024 Jun 15 14:45 boot
drwxr-xr-x   6 root root  4096 Jun 12 10:26 data
drwxr-xr-x  10 root root  3520 Sep 26 15:38 dev
drwxr-xr-x  75 root root  4096 Oct 16 04:02 etc
drwxr-xr-x   4 root root  4096 Jun 12 10:26 home
drwxr-xr-x  14 root root 12288 Jun 16 04:02 lib
drwx------   2 root root 16384 Jun 11 22:46 lost+found
drwxr-xr-x   2 root root  4096 May 11  2011 media
drwxr-xr-x   2 root root  4096 Nov  8  2010 misc
drwxr-xr-x   2 root root  4096 May 11  2011 mnt
drwxr-xr-x   2 root root  4096 May 11  2011 opt
dr-xr-xr-x 232 root root     0 Jun 15 11:04 proc
drwxr-x---   4 root root  4096 Oct 15 14:43 root
drwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin
drwxr-xr-x   2 root root  4096 May 11  2011 selinux
drwxr-xr-x   2 root root  4096 May 11  2011 srv
drwxr-xr-x  11 root root     0 Jun 15 11:04 sys
drwxrwxrwt   3 root root 98304 Oct 16 08:48 tmp
drwxr-xr-x  13 root root  4096 Jun 11 23:38 usr
drwxr-xr-x  19 root root  4096 Jun 11 23:38 var
```

列出可读文件和文件夹详细信息

```bash
[root@localhost /]# ls -lh

total 254K
drwxr-xr-x   2 root root 4.0K Jun 12 04:03 bin
drwxr-xr-x   4 root root 1.0K Jun 15 14:45 boot
drwxr-xr-x   6 root root 4.0K Jun 12 10:26 data
drwxr-xr-x  10 root root 3.5K Sep 26 15:38 dev
drwxr-xr-x  75 root root 4.0K Oct 16 04:02 etc
drwxr-xr-x   4 root root 4.0K Jun 12 10:26 home
drwxr-xr-x  14 root root  12K Jun 16 04:02 lib
drwx------   2 root root  16K Jun 11 22:46 lost+found
drwxr-xr-x   2 root root 4.0K May 11  2011 media
drwxr-xr-x   2 root root 4.0K Nov  8  2010 misc
drwxr-xr-x   2 root root 4.0K May 11  2011 mnt
drwxr-xr-x   2 root root 4.0K May 11  2011 opt
dr-xr-xr-x 235 root root    0 Jun 15 11:04 proc
drwxr-x---   4 root root 4.0K Oct 15 14:43 root
drwxr-xr-x   2 root root  12K Jun 12 04:03 sbin
drwxr-xr-x   2 root root 4.0K May 11  2011 selinux
drwxr-xr-x   2 root root 4.0K May 11  2011 srv
drwxr-xr-x  11 root root    0 Jun 15 11:04 sys
drwxrwxrwt   3 root root  96K Oct 16 08:49 tmp
drwxr-xr-x  13 root root 4.0K Jun 11 23:38 usr
drwxr-xr-x  19 root root 4.0K Jun 11 23:38 var
```

显示文件夹信息

```bash
[root@localhost /]# ls -ld /etc/

drwxr-xr-x 75 root root 4096 Oct 16 04:02 /etc/
```

按时间列出文件和文件夹详细信息

```bash
[root@localhost /]# ls -lt

total 254
drwxrwxrwt   3 root root 98304 Oct 16 08:53 tmp
drwxr-xr-x  75 root root  4096 Oct 16 04:02 etc
drwxr-x---   4 root root  4096 Oct 15 14:43 root
drwxr-xr-x  10 root root  3520 Sep 26 15:38 dev
drwxr-xr-x  14 root root 12288 Jun 16 04:02 lib
drwxr-xr-x   4 root root  1024 Jun 15 14:45 boot
drwxr-xr-x  11 root root     0 Jun 15 11:04 sys
dr-xr-xr-x 232 root root     0 Jun 15 11:04 proc
drwxr-xr-x   6 root root  4096 Jun 12 10:26 data
drwxr-xr-x   4 root root  4096 Jun 12 10:26 home
drwxr-xr-x   2 root root  4096 Jun 12 04:03 bin
drwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin
drwxr-xr-x  13 root root  4096 Jun 11 23:38 usr
drwxr-xr-x  19 root root  4096 Jun 11 23:38 var
drwx------   2 root root 16384 Jun 11 22:46 lost+found
drwxr-xr-x   2 root root  4096 May 11  2011 media
drwxr-xr-x   2 root root  4096 May 11  2011 mnt
drwxr-xr-x   2 root root  4096 May 11  2011 opt
drwxr-xr-x   2 root root  4096 May 11  2011 selinux
drwxr-xr-x   2 root root  4096 May 11  2011 srv
drwxr-xr-x   2 root root  4096 Nov  8  2010 misc
```

按修改时间列出文件和文件夹详细信息

```bash
[root@localhost /]# ls -ltr

total 254
drwxr-xr-x   2 root root  4096 Nov  8  2010 misc
drwxr-xr-x   2 root root  4096 May 11  2011 srv
drwxr-xr-x   2 root root  4096 May 11  2011 selinux
drwxr-xr-x   2 root root  4096 May 11  2011 opt
drwxr-xr-x   2 root root  4096 May 11  2011 mnt
drwxr-xr-x   2 root root  4096 May 11  2011 media
drwx------   2 root root 16384 Jun 11 22:46 lost+found
drwxr-xr-x  19 root root  4096 Jun 11 23:38 var
drwxr-xr-x  13 root root  4096 Jun 11 23:38 usr
drwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin
drwxr-xr-x   2 root root  4096 Jun 12 04:03 bin
drwxr-xr-x   4 root root  4096 Jun 12 10:26 home
drwxr-xr-x   6 root root  4096 Jun 12 10:26 data
dr-xr-xr-x 232 root root     0 Jun 15 11:04 proc
drwxr-xr-x  11 root root     0 Jun 15 11:04 sys
drwxr-xr-x   4 root root  1024 Jun 15 14:45 boot
drwxr-xr-x  14 root root 12288 Jun 16 04:02 lib
drwxr-xr-x  10 root root  3520 Sep 26 15:38 dev
drwxr-x---   4 root root  4096 Oct 15 14:43 root
drwxr-xr-x  75 root root  4096 Oct 16 04:02 etc
drwxrwxrwt   3 root root 98304 Oct 16 08:54 tmp
```

按照特殊字符对文件进行分类

```bash
[root@localhost nginx-1.2.1]# ls -F

auto/  CHANGES  CHANGES.ru  conf/  configure*  contrib/  html/  LICENSE  Makefile  man/  objs/  README  src/
```

列出文件并标记颜色分类

```bash
[root@localhost nginx-1.2.1]# ls --color=auto

auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  Makefile  man  objs  README  src
```


## mkdir

mkdir命令用来创建目录。该命令创建由dirname命名的目录。如果在目录名的前面没有加任何路径名，则在当前目录下创建由dirname指定的目录；如果给出了一个已经存在的路径，将会在该目录下创建一个指定的目录。在创建目录时，应保证新建的目录与它所在目录下的文件没有重名。

注意：在创建文件时，不要把所有的文件都存放在主目录中，可以创建子目录，通过它们来更有效地组织文件。最好采用前后一致的命名方式来区分文件和目录。例如，目录名可以以大写字母开头，这样，在目录列表中目录名就出现在前面。

在一个子目录中应包含类型相似或用途相近的文件。例如，应建立一个子目录，它包含所有的数据库文件，另有一个子目录应包含电子表格文件，还有一个子目录应包含文字处理文档，等等。目录也是文件，它们和普通文件一样遵循相同的命名规则，并且利用全路径可以唯一地指定一个目录。

### 语法

```bash
mkdir (选项)(参数)
```

### 选项

```bash
-Z：设置安全上下文，当使用SELinux时有效；
-m<目标属性>或--mode<目标属性>建立目录的同时设置目录的权限；
-p或--parents 若所要建立目录的上层目录目前尚未建立，则会一并建立上层目录；
--version 显示版本信息。
```

### 参数

目录：指定要创建的目录列表，多个目录之间用空格隔开。

### 实例

在目录/usr/meng下建立子目录test，并且只有文件主有读、写和执行权限，其他人无权访问

```bash
mkdir -m 700 /usr/meng/test
```

在当前目录中建立bin和bin下的os_1目录，权限设置为文件主可读、写、执行，同组用户可读和执行，其他用户无权访问

```bash
mkdir -p-m 750 bin/os_1
```


## rmdir

rmdir命令用来删除空目录。当目录不再被使用时，或者磁盘空间已到达使用限定值，就需要删除失去使用价值的目录。利用rmdir命令可以从一个目录中删除一个或多个空的子目录。该命令从一个目录中删除一个或多个子目录，其中dirname佬表示目录名。如果dirname中没有指定路径，则删除当前目录下由dirname指定的目录；如dirname中包含路径，则删除指定位置的目录。删除目录时，必须具有对其父目录的写权限。

注意：子目录被删除之前应该是空目录。就是说，该目录中的所有文件必须用rm命令全部，另外，当前工作目录必须在被删除目录之上，不能是被删除目录本身，也不能是被删除目录的子目录。

虽然还可以用带有-r选项的rm命令递归删除一个目录中的所有文件和该目录本身，但是这样做存在很大的危险性。

### 语法

```bash
rmdir(选项)(参数)
```

### 选项

```bash
-p或--parents：删除指定目录后，若该目录的上层目录已变成空目录，则将其一并删除；
--ignore-fail-on-non-empty：此选项使rmdir命令忽略由于删除非空目录时导致的错误信息；
-v或-verboes：显示命令的详细执行过程；
--help：显示命令的帮助信息；
--version：显示命令的版本信息。
```

### 参数

目录列表：要删除的空目录列表。当删除多个空目录时，目录名之间使用空格隔开。

### 实例

删除子目录os_1和其父目录bin

```bash
cd /usr/meng/test
rmdir -p bin/os_1
```


## pwd

pwd命令以绝对路径的方式显示用户当前工作目录。命令将当前目录的全路径名称（从根目录）写入标准输出。全部目录使用/分隔。第一个/表示根目录，最后一个目录是当前目录。执行pwd命令可立刻得知您目前所在的工作目录的绝对路径名称。

### 语法

```bash
pwd（选项）
```

### 选项

```bash
--help：显示帮助信息；
--version：显示版本信息。
```

### 实例

```bash
[root@localhost ~]# pwd
/root
```


## cp

cp命令用来将一个或多个源文件或者目录复制到指定的目的文件或目录。它可以将单个源文件复制成一个指定文件名的具体的文件或一个已经存在的目录下。cp命令还支持同时复制多个文件，当一次复制多个文件时，目标文件参数必须是一个已经存在的目录，否则将出现错误。

### 语法

```bash
cp(选项)(参数)
```

### 选项

```bash
-a：此参数的效果和同时指定"-dpR"参数相同；
-d：当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录；
-f：强行复制文件或目录，不论目标文件或目录是否已存在；
-i：覆盖既有文件之前先询问用户；
-l：对源文件建立硬连接，而非复制文件；
-p：保留源文件或目录的属性；
-R/r：递归处理，将指定目录下的所有文件与子目录一并处理；
-s：对源文件建立符号连接，而非复制文件；
-u：使用这项参数后只会在源文件的更改时间较目标文件更新时或是名称相互对应的目标文件并不存在时，才复制文件；
-S：在备份文件时，用指定的后缀“SUFFIX”代替文件的默认后缀；
-b：覆盖已存在的文件目标前将目标文件备份；
-v：详细显示命令执行的操作。
```

### 参数

 - 源文件：制定源文件列表。默认情况下，cp命令不能复制目录，如果要复制目录，则必须使用-R选项；

 - 目标文件：指定目标文件。当“源文件”为多个文件时，要求“目标文件”为指定的目录。

### 实例

如果把一个文件复制到一个目标文件中，而目标文件已经存在，那么，该目标文件的内容将被破坏。此命令中所有参数既可以是绝对路径名，也可以是相对路径名。通常会用到点.或点点..的形式。例如，下面的命令将指定文件复制到当前目录下：

```bash
cp ../mary/homework/assign .
```

所有目标文件指定的目录必须是己经存在的，cp命令不能创建目录。如果没有文件复制的权限，则系统会显示出错信息。

将文件file复制到目录/usr/men/tmp下，并改名为file1

```bash
cp file /usr/men/tmp/file1
```

将目录/usr/men下的所有文件及其子目录复制到目录/usr/zh中

```bash
cp -r /usr/men /usr/zh
```

交互式地将目录/usr/men中的以m打头的所有.c文件复制到目录/usr/zh中

```bash
cp -i /usr/men m*.c /usr/zh
```

我们在Linux下使用cp命令复制文件时候，有时候会需要覆盖一些同名文件，覆盖文件的时候都会有提示：需要不停的按Y来确定执行覆盖。文件数量不多还好，但是要是几百个估计按Y都要吐血了，于是折腾来半天总结了一个方法：

```bash
cp aaa/* /bbb
复制目录aaa下所有到/bbb目录下，这时如果/bbb目录下有和aaa同名的文件，需要按Y来确认并且会略过aaa目录下的子目录。

cp -r aaa/* /bbb
这次依然需要按Y来确认操作，但是没有忽略子目录。

cp -r -a aaa/* /bbb
依然需要按Y来确认操作，并且把aaa目录以及子目录和文件属性也传递到了/bbb。

\cp -r -a aaa/* /bbb
成功，没有提示按Y、传递了目录属性、没有略过目录。
```


## mv

mv命令用来对文件或目录重新命名，或者将文件从一个目录移到另一个目录中。source表示源文件或目录，target表示目标文件或目录。如果将一个文件移到一个已经存在的目标文件中，则目标文件的内容将被覆盖。

mv命令可以用来将源文件移至一个目标文件中，或将一组文件移至一个目标目录中。源文件被移至目标文件有两种不同的结果：

 - 如果目标文件是到某一目录文件的路径，源文件会被移到此目录下，且文件名不变。

 - 如果目标文件不是目录文件，则源文件名（只能有一个）会变为此目标文件名，并覆盖己存在的同名文件。如果源文件和目标文件在同一个目录下，mv的作用就是改文件名。当目标文件是目录文件时，源文件或目录参数可以有多个，则所有的源文件都会被移至目标文件中。所有移到该目录下的文件都将保留以前的文件名。

注意事项：mv与cp的结果不同，mv好像文件“搬家”，文件个数并未增加。而cp对文件进行复制，文件个数增加了。

### 语法

```bash
mv(选项)(参数)
```

### 选项

```bash
--backup=<备份模式>：若需覆盖文件，则覆盖前先行备份；
-b：当文件存在时，覆盖前，为其创建一个备份；
-f：若目标文件或目录与现有的文件或目录重复，则直接覆盖现有的文件或目录；
-i：交互式操作，覆盖前先行询问用户，如果源文件与目标文件或目标目录中的文件同名，则询问用户是否覆盖目标文件。用户输入”y”，表示将覆盖目标文件；输入”n”，表示取消对源文件的移动。这样可以避免误将文件覆盖。
--strip-trailing-slashes：删除源文件中的斜杠“/”；
-S<后缀>：为备份文件指定后缀，而不使用默认的后缀；
--target-directory=<目录>：指定源文件要移动到目标目录；
-u：当源文件比目标文件新或者目标文件不存在时，才执行移动操作。
```

### 参数

 - 源文件：源文件列表。

 - 目标文件：如果“目标文件”是文件名则在移动文件的同时，将其改名为“目标文件”；如果“目标文件”是目录名则将源文件移动到“目标文件”下。

### 实例

将文件ex3改名为new1

```bash
mv ex3 new1
```

将目录/usr/men中的所有文件移到当前目录（用.表示）中：

```bash
mv /usr/men/* .
```


## rm

rm命令可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。

注意：使用rm命令要格外小心。因为一旦删除了一个文件，就无法再恢复它。所以，在删除文件之前，最好再看一下文件的内容，确定是否真要删除。rm命令可以用-i选项，这个选项在使用文件扩展名字符删除多个文件时特别有用。使用这个选项，系统会要求你逐一确定是否要删除。这时，必须输入y并按Enter键，才能删除文件。如果仅按Enter键或其他字符，文件不会被删除。

### 语法

```bash
rm (选项)(参数)
```

### 选项

```bash
-d：直接把欲删除的目录的硬连接数据删除成0，删除该目录；
-f：强制删除文件或目录；
-i：删除已有文件或目录之前先询问用户；
-r或-R：递归处理，将指定目录下的所有文件与子目录一并处理；
--preserve-root：不对根目录进行递归操作；
-v：显示指令的详细执行过程。
```

### 参数

文件：指定被删除的文件列表，如果参数中含有目录，则必须加上-r或者-R选项。

### 实例

交互式删除当前目录下的文件test和example

```bash
rm -i test example
Remove test ?n（不删除文件test)
Remove example ?y（删除文件example)
```

删除当前目录下除隐含文件外的所有文件和子目录

```bash
# rm -r *
```

应注意，这样做是非常危险的!


## sudo

sudo命令用来以其他身份来执行命令，预设的身份为root。在/etc/sudoers中设置了可执行sudo指令的用户。若其未经授权的用户企图使用sudo，则会发出警告的邮件给管理员。用户使用sudo时，必须先输入密码，之后有5分钟的有效期限，超过期限则必须重新输入密码。

### 语法

```bash
sudo(选项)(参数)
```

### 选项

```bash
-b：在后台执行指令；
-h：显示帮助；
-H：将HOME环境变量设为新身份的HOME环境变量；
-k：结束密码的有效期限，也就是下次再执行sudo时便需要输入密码；。
-l：列出目前用户可执行与无法执行的指令；
-p：改变询问密码的提示符号；
-s<shell>：执行指定的shell；
-u<用户>：以指定的用户作为新的身份。若不加上此参数，则预设以root作为新的身份；
-v：延长密码有效期限5分钟；
-V ：显示版本信息。
```

### 参数

指令：需要运行的指令和对应的参数。

### 实例

配置sudo必须通过编辑/etc/sudoers文件，而且只有超级用户才可以修改它，还必须使用visudo编辑。之所以使用visudo有两个原因，一是它能够防止两个用户同时修改它；二是它也能进行有限的语法检查。所以，即使只有你一个超级用户，你也最好用visudo来检查一下语法。

visudo默认的是在vi里打开配置文件，用vi来修改文件。我们可以在编译时修改这个默认项。visudo不会擅自保存带有语法错误的配置文件，它会提示你出现的问题，并询问该如何处理，就像：

```bash
>>> sudoers file: syntax error, line 22 <<
```

此时我们有三种选择：键入“e”是重新编辑，键入“x”是不保存退出，键入“Q”是退出并保存。如果真选择Q，那么sudo将不会再运行，直到错误被纠正。

现在，我们一起来看一下神秘的配置文件，学一下如何编写它。让我们从一个简单的例子开始：让用户Foobar可以通过sudo执行所有root可执行的命令。以root身份用visudo打开配置文件，可以看到类似下面几行：

```bash
# Runas alias specification
# User privilege specificationroot    ALL=(ALL)ALL
```

我们一看就明白个差不多了，root有所有权限，只要仿照现有root的例子就行，我们在下面加一行（最好用tab作为空白）：

```bash
foobar ALL=(ALL)    ALL
```

保存退出后，切换到foobar用户，我们用它的身份执行命令：

```bash
[foobar@localhost ~]$ ls /root
ls: /root: 权限不够

[foobar@localhost ~]$ sudo ls /root
PassWord:
anaconda-ks.cfg Desktop install.log install.log.syslog
```

好了，我们限制一下foobar的权利，不让他为所欲为。比如我们只想让他像root那样使用ls和ifconfig，把那一行改为：

```bash
foobar localhost=    /sbin/ifconfig,   /bin/ls
```

再来执行命令：

```bash
[foobar@localhost ~]$ sudo head -5 /etc/shadow
Password:
Sorry, user foobar is not allowed to execute '/usr/bin/head -5 /etc/shadow' as root on localhost.localdomain.

[foobar@localhost ~]$ sudo /sbin/ifconfigeth0      Linkencap:Ethernet HWaddr 00:14:85:EC:E9:9B...
```

现在让我们来看一下那三个ALL到底是什么意思。第一个ALL是指网络中的主机，我们后面把它改成了主机名，它指明foobar可以在此主机上执行后面的命令。第二个括号里的ALL是指目标用户，也就是以谁的身份去执行命令。最后一个ALL当然就是指命令名了。例如，我们想让foobar用户在linux主机上以jimmy或rene的身份执行kill命令，这样编写配置文件：

```bash
foobar    linux=(jimmy,rene)    /bin/kill
```

但这还有个问题，foobar到底以jimmy还是rene的身份执行？这时我们应该想到了sudo -u了，它正是用在这种时候。 foobar可以使用sudo -u jimmy kill PID或者sudo -u rene kill PID，但这样挺麻烦，其实我们可以不必每次加-u，把rene或jimmy设为默认的目标用户即可。再在上面加一行：

```bash
Defaults:foobar    runas_default=rene
```

Defaults后面如果有冒号，是对后面用户的默认，如果没有，则是对所有用户的默认。就像配置文件中自带的一行：

```bash
Defaults    env_reset
```

另一个问题是，很多时候，我们本来就登录了，每次使用sudo还要输入密码就显得烦琐了。我们可不可以不再输入密码呢？当然可以，我们这样修改配置文件：

```bash
foobar localhost=NOPASSWD:     /bin/cat, /bin/ls
```

再来sudo一下：

```bash
[foobar@localhost ~]$ sudo ls /rootanaconda-ks.cfg Desktop install.log
install.log.syslog
```

当然，你也可以说“某些命令用户foobar不可以运行”，通过使用!操作符，但这不是一个好主意。因为，用!操作符来从ALL中“剔出”一些命令一般是没什么效果的，一个用户完全可以把那个命令拷贝到别的地方，换一个名字后再来运行。

日志与安全

sudo为安全考虑得很周到，不仅可以记录日志，还能在有必要时向系统管理员报告。但是，sudo的日志功能不是自动的，必须由管理员开启。这样来做：

```bash
touch /var/log/sudo
vi /etc/syslog.conf
```

在syslog.conf最后面加一行（必须用tab分割开）并保存：

```bash
local2.debug                    /var/log/sudo
```

重启日志守候进程，

```bash
ps aux grep syslogd
```

把得到的syslogd进程的PID（输出的第二列是PID）填入下面：

```bash
kill –HUP PID
```

这样，sudo就可以写日志了：

```bash
[foobar@localhost ~]$ sudo ls /rootanaconda-ks.cfg
Desktop install.log
install.log.syslog
$cat /var/log/sudoJul 28 22:52:54 localhost sudo:   foobar :
TTY=pts/1 ; pwd=/home/foobar ; USER=root ; command=/bin/ls /root
```

不过，有一个小小的“缺陷”，sudo记录日志并不是很忠实：

```bash
[foobar@localhost ~]$ sudo cat /etc/shadow > /dev/null
cat /var/log/sudo...Jul 28 23:10:24 localhost sudo:   foobar : TTY=pts/1 ;
PWD=/home/foobar ; USER=root ; COMMAND=/bin/cat /etc/shadow
```

重定向没有被记录在案！为什么？因为在命令运行之前，shell把重定向的工作做完了，sudo根本就没看到重定向。这也有个好处，下面的手段不会得逞：

```bash
[foobar@localhost ~]$ sudo ls /root > /etc/shadowbash: /etc/shadow: 权限不够
```

sudo 有自己的方式来保护安全。以root的身份执行sudo-V，查看一下sudo的设置。因为考虑到安全问题，一部分环境变量并没有传递给sudo后面的命令，或者被检查后再传递的，比如：PATH，HOME，SHELL等。当然，你也可以通过sudoers来配置这些环境变量。


## ping

ping命令用来测试主机之间网络的连通性。执行ping指令会使用ICMP传输协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。

### 语法

```bash
ping(选项)(参数)
```

### 选项

```bash
-d：使用Socket的SO_DEBUG功能；
-c<完成次数>：设置完成要求回应的次数；
-f：极限检测；
-i<间隔秒数>：指定收发信息的间隔时间；
-I<网络界面>：使用指定的网络界面送出数据包；
-l<前置载入>：设置在送出要求信息之前，先行发出的数据包；
-n：只输出数值；
-p<范本样式>：设置填满数据包的范本样式；
-q：不显示指令执行过程，开头和结尾的相关信息除外；
-r：忽略普通的Routing Table，直接将数据包送到远端主机上；
-R：记录路由过程；
-s<数据包大小>：设置数据包的大小；
-t<存活数值>：设置存活数值TTL的大小；
-v：详细显示指令的执行过程。
```

### 参数

目的主机：指定发送ICMP报文的目的主机。

### 实例

```bash
[root@AY1307311912260196fcZ ~]# ping www.linuxde.net
PING host.1.linuxde.net (100.42.212.8) 56(84) bytes of data.
64 bytes from 100-42-212-8.static.webnx.com (100.42.212.8): icmp_seq=1 ttl=50 time=177 ms
64 bytes from 100-42-212-8.static.webnx.com (100.42.212.8): icmp_seq=2 ttl=50 time=178 ms
64 bytes from 100-42-212-8.static.webnx.com (100.42.212.8): icmp_seq=3 ttl=50 time=174 ms
64 bytes from 100-42-212-8.static.webnx.com (100.42.212.8): icmp_seq=4 ttl=50 time=177 ms
...按Ctrl+C结束

--- host.1.linuxde.net ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 2998ms
rtt min/avg/max/mdev = 174.068/176.916/178.182/1.683 ms
```


## tar

tar命令可以为linux的文件和目录创建档案。利用tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。

首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。

为什么要区分这两个概念呢？这源于Linux中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar命令），然后再用压缩程序进行压缩（gzip bzip2命令）。

### 语法

```bash
tar(选项)(参数)
```

### 选项

```bash
-A或--catenate：新增文件到以存在的备份文件；
-B：设置区块大小；
-c或--create：建立新的备份文件；
-C <目录>：这个选项用在解压缩，若要在特定目录解压缩，可以使用这个选项。
-d：记录文件的差别；
-x或--extract或--get：从备份文件中还原文件；
-t或--list：列出备份文件的内容；
-z或--gzip或--ungzip：通过gzip指令处理备份文件；
-Z或--compress或--uncompress：通过compress指令处理备份文件；
-f<备份文件>或--file=<备份文件>：指定备份文件；
-v或--verbose：显示指令执行过程；
-r：添加文件到已经压缩的文件；
-u：添加改变了和现有的文件到已经存在的压缩文件；
-j：支持bzip2解压文件；
-v：显示操作过程；
-l：文件系统边界设置；
-k：保留原有文件不覆盖；
-m：保留文件不被覆盖；
-w：确认压缩文件的正确性；
-p或--same-permissions：用原来的文件权限还原文件；
-P或--absolute-names：文件名使用绝对名称，不移除文件名称前的“/”号；
-N <日期格式> 或 --newer=<日期时间>：只将较指定日期更新的文件保存到备份文件里；
--exclude=<范本样式>：排除符合范本样式的文件。
```

### 参数

文件或目录：指定要打包的文件或目录列表。

### 实例

将文件全部打包成tar包：

```bash
tar -cvf log.tar log2012.log    仅打包，不压缩！ 
tar -zcvf log.tar.gz log2012.log   打包后，以 gzip 压缩 
tar -jcvf log.tar.bz2 log2012.log  打包后，以 bzip2 压缩
```

在选项f之后的文件档名是自己取的，我们习惯上都用 .tar 来作为辨识。 如果加z选项，则以.tar.gz或.tgz来代表gzip压缩过的tar包；如果加j选项，则以.tar.bz2来作为tar包名。

查阅上述tar包内有哪些文件：

```bash
tar -ztvf log.tar.gz
```

由于我们使用 gzip 压缩的log.tar.gz，所以要查阅log.tar.gz包内的文件时，就得要加上z这个选项了。

将tar包解压缩：

```bash
tar -zxvf /opt/soft/test/log.tar.gz
```

在预设的情况下，我们可以将压缩档在任何地方解开的

只将tar内的部分文件解压出来：

```bash
tar -zxvf /opt/soft/test/log30.tar.gz log2013.log
```

我可以透过tar -ztvf来查阅 tar 包内的文件名称，如果单只要一个文件，就可以透过这个方式来解压部分文件！

文件备份下来，并且保存其权限：

```bash
tar -zcvpf log31.tar.gz log2014.log log2015.log log2016.log
```

这个-p的属性是很重要的，尤其是当您要保留原本文件的属性时。

在文件夹当中，比某个日期新的文件才备份：

```bash
tar -N "2012/11/13" -zcvf log17.tar.gz test
```

备份文件夹内容是排除部分文件：

```bash
tar --exclude scf/service -zcvf scf.tar.gz scf/*
```

其实最简单的使用 tar 就只要记忆底下的方式即可：

```bash
压　缩：tar -jcv -f filename.tar.bz2 要被压缩的文件或目录名称
查　询：tar -jtv -f filename.tar.bz2
解压缩：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录
```


## unzip

unzip命令用于解压缩由zip命令压缩的“.zip”压缩包。

### 语法

```bash
unzip(选项)(参数)
```

### 选项

```bash
-c：将解压缩的结果显示到屏幕上，并对字符做适当的转换；
-f：更新现有的文件；
-l：显示压缩文件内所包含的文件；
-p：与-c参数类似，会将解压缩的结果显示到屏幕上，但不会执行任何的转换；
-t：检查压缩文件是否正确；
-u：与-f参数类似，但是除了更新现有的文件外，也会将压缩文件中的其他文件解压缩到目录中；
-v：执行时显示详细的信息；
-z：仅显示压缩文件的备注文字；
-a：对文本文件进行必要的字符转换；
-b：不要对文本文件进行字符转换；
-C：压缩文件中的文件名称区分大小写；
-j：不处理压缩文件中原有的目录路径；
-L：将压缩文件中的全部文件名改为小写；
-M：将输出结果送到more程序处理；
-n：解压缩时不要覆盖原有的文件；
-o：不必先询问用户，unzip执行后覆盖原有的文件；
-P<密码>：使用zip的密码选项；
-q：执行时不显示任何信息；
-s：将文件名中的空白字符转换为底线字符；
-V：保留VMS的文件版本信息；
-X：解压缩时同时回存文件原来的UID/GID；
-d<目录>：指定文件解压缩后所要存储的目录；
-x<文件>：指定不要处理.zip压缩文件中的哪些文件；
-Z：unzip-Z等于执行zipinfo指令。
```

### 参数

压缩包：指定要解压的“.zip”压缩包。

### 实例

将压缩文件text.zip在当前目录下解压缩。

```bash
unzip test.zip
```

将压缩文件text.zip在指定目录/tmp下解压缩，如果已有相同的文件存在，要求unzip命令不覆盖原先的文件。

```bash
unzip -n test.zip -d /tmp
```

查看压缩文件目录，但不解压。

```bash
unzip -v test.zip
```

将压缩文件test.zip在指定目录/tmp下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件。

```bash
unzip -o test.zip -d tmp/
```


## uname

uname命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。

### 语法

```bash
uname(选项)
```

### 选项

```bash
-a或--all：显示全部的信息；
-m或--machine：显示电脑类型；
-n或-nodename：显示在网络上的主机名称；
-r或--release：显示操作系统的发行编号；
-s或--sysname：显示操作系统名称；
-v：显示操作系统的版本；
-p或--processor：输出处理器类型或"unknown"；
-i或--hardware-platform：输出硬件平台或"unknown"；
-o或--operating-system：输出操作系统名称；
--help：显示帮助；
--version：显示版本信息。
```

### 实例

使用uname命令查看全部信息：

```bash
[root@localhost ~]# uname    #单独使用uname命令时相当于uname -s
Linux

[root@localhost ~]# uname -a
Linux localhost 2.6.18-348.6.1.el5 #1 SMP Tue May 21 15:34:22 EDT 2013 i686 i686 i386 GNU/Linux

[root@localhost ~]# uname -m
i686

[root@localhost ~]# uname -n
localhost

[root@localhost ~]# uname -r
2.6.18-4-686

[root@localhost ~]# uname -s
Linux

[root@localhost ~]# uname -v
#1 SMP Tue May 21 15:34:22 EDT 2013

[root@localhost ~]# uname -p
i686

[root@localhost ~]# uname -i
i386

[root@localhost ~]# uname -o
GNU/Linux

[root@localhost ~]# uname --version
uname (GNU coreutils) 5.97
Copyright (C) 2006 free Software Foundation, Inc.
这是自由软件。您可以按照 GNU GPL 协议 <http://www.gnu.org/licenses/gpl.html> 的条款再发布此软件的副本，但我们无法保证相关法律不对这一情形进行限制。

由 David MacKenzie 编写。
```


## df

df命令用于显示磁盘分区上的可使用的磁盘空间。默认显示单位为KB。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息。

### 语法

```bash
df(选项)(参数)
```

### 选项

```bash
-a或--all：包含全部的文件系统；
--block-size=<区块大小>：以指定的区块大小来显示区块数目；
-h或--human-readable：以可读性较高的方式来显示信息；
-H或--si：与-h参数相同，但在计算时是以1000 Bytes为换算单位而非1024 Bytes；
-i或--inodes：显示inode的信息；
-k或--kilobytes：指定区块大小为1024字节；
-l或--local：仅显示本地端的文件系统；
-m或--megabytes：指定区块大小为1048576字节；
--no-sync：在取得磁盘使用信息前，不要执行sync指令，此为预设值；
-P或--portability：使用POSIX的输出格式；
--sync：在取得磁盘使用信息前，先执行sync指令；
-t<文件系统类型>或--type=<文件系统类型>：仅显示指定文件系统类型的磁盘信息；
-T或--print-type：显示文件系统的类型；
-x<文件系统类型>或--exclude-type=<文件系统类型>：不要显示指定文件系统类型的磁盘信息；
--help：显示帮助；
--version：显示版本信息。
```

### 参数

文件：指定文件系统上的文件。

### 实例

查看系统磁盘设备，默认是KB为单位：

```bash
[root@LinServ-1 ~]# df
文件系统               1K-块        已用     可用 已用% 挂载点
/dev/sda2            146294492  28244432 110498708  21% /
/dev/sda1              1019208     62360    904240   7% /boot
tmpfs                  1032204         0   1032204   0% /dev/shm
/dev/sdb1            2884284108 218826068 2518944764   8% /data1
```

使用-h选项以KB以上的单位来显示，可读性高：

```bash
[root@LinServ-1 ~]# df -h
文件系统              容量  已用 可用 已用% 挂载点
/dev/sda2             140G   27G  106G  21% /
/dev/sda1             996M   61M  884M   7% /boot
tmpfs                1009M     0 1009M   0% /dev/shm
/dev/sdb1             2.7T  209G  2.4T   8% /data1
```

查看全部文件系统：

```bash
[root@LinServ-1 ~]# df -a
文件系统               1K-块        已用     可用 已用% 挂载点
/dev/sda2            146294492  28244432 110498708  21% /
proc                         0         0         0   -  /proc
sysfs                        0         0         0   -  /sys
devpts                       0         0         0   -  /dev/pts
/dev/sda1              1019208     62360    904240   7% /boot
tmpfs                  1032204         0   1032204   0% /dev/shm
/dev/sdb1            2884284108 218826068 2518944764   8% /data1
none                         0         0         0   -  /proc/sys/fs/binfmt_misc
```


## ps

ps命令用于报告当前系统的进程状态。可以搭配kill指令随时中断、删除不必要的程序。ps命令是最基本同时也是非常强大的进程查看命令，使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等，总之大部分信息都是可以通过执行该命令得到的。

### 语法

```bash
ps(选项)
```

### 选项

```bash
-a：显示所有终端机下执行的程序，除了阶段作业领导者之外。
a：显示现行终端机下的所有程序，包括其他用户的程序。
-A：显示所有程序。
-c：显示CLS和PRI栏位。
c：列出程序时，显示每个程序真正的指令名称，而不包含路径，选项或常驻服务的标示。
-C<指令名称>：指定执行指令的名称，并列出该指令的程序的状况。
-d：显示所有程序，但不包括阶段作业领导者的程序。
-e：此选项的效果和指定"A"选项相同。
e：列出程序时，显示每个程序所使用的环境变量。
-f：显示UID,PPIP,C与STIME栏位。
f：用ASCII字符显示树状结构，表达程序间的相互关系。
-g<群组名称>：此选项的效果和指定"-G"选项相同，当亦能使用阶段作业领导者的名称来指定。
g：显示现行终端机下的所有程序，包括群组领导者的程序。
-G<群组识别码>：列出属于该群组的程序的状况，也可使用群组名称来指定。
h：不显示标题列。
-H：显示树状结构，表示程序间的相互关系。
-j或j：采用工作控制的格式显示程序状况。
-l或l：采用详细的格式来显示程序状况。
L：列出栏位的相关信息。
-m或m：显示所有的执行绪。
n：以数字来表示USER和WCHAN栏位。
-N：显示所有的程序，除了执行ps指令终端机下的程序之外。
-p<程序识别码>：指定程序识别码，并列出该程序的状况。
p<程序识别码>：此选项的效果和指定"-p"选项相同，只在列表格式方面稍有差异。
r：只列出现行终端机正在执行中的程序。
-s<阶段作业>：指定阶段作业的程序识别码，并列出隶属该阶段作业的程序的状况。
s：采用程序信号的格式显示程序状况。
S：列出程序时，包括已中断的子程序资料。
-t<终端机编号>：指定终端机编号，并列出属于该终端机的程序的状况。
t<终端机编号>：此选项的效果和指定"-t"选项相同，只在列表格式方面稍有差异。
-T：显示现行终端机下的所有程序。
-u<用户识别码>：此选项的效果和指定"-U"选项相同。
u：以用户为主的格式来显示程序状况。
-U<用户识别码>：列出属于该用户的程序的状况，也可使用用户名称来指定。
U<用户名称>：列出属于该用户的程序的状况。
v：采用虚拟内存的格式显示程序状况。
-V或V：显示版本信息。
-w或w：采用宽阔的格式来显示程序状况。　
x：显示所有程序，不以终端机来区分。
X：采用旧式的Linux i386登陆格式显示程序状况。
-y：配合选项"-l"使用时，不显示F(flag)栏位，并以RSS栏位取代ADDR栏位　。
-<程序识别码>：此选项的效果和指定"p"选项相同。
--cols<每列字符数>：设置每列的最大字符数。
--columns<每列字符数>：此选项的效果和指定"--cols"选项相同。
--cumulative：此选项的效果和指定"S"选项相同。
--deselect：此选项的效果和指定"-N"选项相同。
--forest：此选项的效果和指定"f"选项相同。
--headers：重复显示标题列。
--help：在线帮助。
--info：显示排错信息。
--lines<显示列数>：设置显示画面的列数。
--no-headers：此选项的效果和指定"h"选项相同，只在列表格式方面稍有差异。
--group<群组名称>：此选项的效果和指定"-G"选项相同。
--Group<群组识别码>：此选项的效果和指定"-G"选项相同。
--pid<程序识别码>：此选项的效果和指定"-p"选项相同。
--rows<显示列数>：此选项的效果和指定"--lines"选项相同。
--sid<阶段作业>：此选项的效果和指定"-s"选项相同。
--tty<终端机编号>：此选项的效果和指定"-t"选项相同。
--user<用户名称>：此选项的效果和指定"-U"选项相同。
--User<用户识别码>：此选项的效果和指定"-U"选项相同。
--version：此选项的效果和指定"-V"选项相同。
--widty<每列字符数>：此选项的效果和指定"-cols"选项相同。
```

由于ps命令能够支持的系统类型相当的多，所以选项多的离谱！


## top

top命令可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具。通过top命令所提供的互动式界面，用热键可以管理。

### 语法

```bash
top(选项)
```

### 选项

```bash
-b：以批处理模式操作；
-c：显示完整的治命令；
-d：屏幕刷新间隔时间；
-I：忽略失效过程；
-s：保密模式；
-S：累积模式；
-i<时间>：设置间隔时间；
-u<用户名>：指定用户名；
-p<进程号>：指定进程；
-n<次数>：循环显示的次数。
```

### top交互命令

在top命令执行过程中可以使用的一些交互命令。这些命令都是单字母的，如果在命令行中使用了-s选项， 其中一些命令可能会被屏蔽。

```bash
h：显示帮助画面，给出一些简短的命令总结说明；
k：终止一个进程；
i：忽略闲置和僵死进程，这是一个开关式命令；
q：退出程序；
r：重新安排一个进程的优先级别；
S：切换到累计模式；
s：改变两次刷新之间的延迟时间（单位为s），如果有小数，就换算成ms。输入0值则系统将不断刷新，默认值是5s；
f或者F：从当前显示中添加或者删除项目；
o或者O：改变显示项目的顺序；
l：切换显示平均负载和启动时间信息；
m：切换显示内存信息；
t：切换显示进程和CPU状态信息；
c：切换显示命令名称和完整命令行；
M：根据驻留内存大小进行排序；
P：根据CPU使用百分比大小进行排序；
T：根据时间/累计时间进行排序；
w：将当前设置写入~/.toprc文件中。
```

### 实例

```bash
top - 09:44:56 up 16 days, 21:23,  1 user,  load average: 9.59, 4.75, 1.92
Tasks: 145 total,   2 running, 143 sleeping,   0 stopped,   0 zombie
Cpu(s): 99.8%us,  0.1%sy,  0.0%ni,  0.2%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
Mem:   4147888k total,  2493092k used,  1654796k free,   158188k buffers
Swap:  5144568k total,       56k used,  5144512k free,  2013180k cached
```

解释：

 - top - 09:44:56[当前系统时间],

 - 16 days[系统已经运行了16天],

 - 1 user[个用户当前登录],

 - load average: 9.59, 4.75, 1.92[系统负载，即任务队列的平均长度]

 - Tasks: 145 total[总进程数],

 - 2 running[正在运行的进程数],

 - 143 sleeping[睡眠的进程数],

 - 0 stopped[停止的进程数],

 - 0 zombie[冻结进程数],

 - Cpu(s): 99.8%us[用户空间占用CPU百分比],

 - 0.1%sy[内核空间占用CPU百分比],

 - 0.0%ni[用户进程空间内改变过优先级的进程占用CPU百分比],

 - 0.2%id[空闲CPU百分比], 0.0%wa[等待输入输出的CPU时间百分比],

 - 0.0%hi[],

 - 0.0%st[],

 - Mem: 4147888k total[物理内存总量],

 - 2493092k used[使用的物理内存总量],

 - 1654796k free[空闲内存总量],

 - 158188k buffers[用作内核缓存的内存量]

 - Swap:  5144568k total[交换区总量],

 - 56k used[使用的交换区总量],

 - 5144512k free[空闲交换区总量],

 - 2013180k cached[缓冲的交换区总量],


## chmod

chmod命令用来变更文件或目录的权限。在UNIX系统家族里，文件或目录权限的控制分别以读取、写入、执行3种一般权限来区分，另有3种特殊权限可供运用。用户可以使用chmod指令去变更文件与目录的权限，设置方式采用文字或数字代号皆可。符号连接的权限无法变更，如果用户对符号连接修改权限，其改变会作用在被连接的原始文件。

权限范围的表示法如下：

u User，即文件或目录的拥有者；
g Group，即文件或目录的所属群组；
o Other，除了文件或目录拥有者或所属群组之外，其他用户皆属于这个范围；
a All，即全部的用户，包含拥有者，所属群组以及其他用户；
r 读取权限，数字代号为“4”;
w 写入权限，数字代号为“2”；
x 执行或切换权限，数字代号为“1”；
- 不具任何权限，数字代号为“0”；
s 特殊功能说明：变更文件或目录的权限。

### 语法

```bash
chmod(选项)(参数)
```

### 选项

```bash
-c或——changes：效果类似“-v”参数，但仅回报更改的部分；
-f或--quiet或——silent：不显示错误信息；
-R或——recursive：递归处理，将指令目录下的所有文件及子目录一并处理；
-v或——verbose：显示指令执行过程；
--reference=<参考文件或目录>：把指定文件或目录的所属群组全部设成和参考文件或目录的所属群组相同；
<权限范围>+<权限设置>：开启权限范围的文件或目录的该选项权限设置；
<权限范围>-<权限设置>：关闭权限范围的文件或目录的该选项权限设置；
<权限范围>=<权限设置>：指定权限范围的文件或目录的该选项权限设置；
```

### 参数

权限模式：指定文件的权限模式；
文件：要改变权限的文件。

### 知识扩展和实例

Linux用 户分为：拥有者、组群(Group)、其他（other），Linux系统中，预设的情況下，系统中所有的帐号与一般身份使用者，以及root的相关信 息， 都是记录在/etc/passwd文件中。每个人的密码则是记录在/etc/shadow文件下。 此外，所有的组群名称记录在/etc/group內！

linux文件的用户权限的分析图



例：rwx　rw-　r--

r=读取属性　　//值＝4
w=写入属性　　//值＝2
x=执行属性　　//值＝1

```bash
chmod u+x,g+w f01　　//为文件f01设置自己可以执行，组员可以写入的权限
chmod u=rwx,g=rw,o=r f01
chmod 764 f01
chmod a+x f01　　//对文件f01的u,g,o都设置可执行属性
```

文件的属主和属组属性设置

```bash
chown user:market f01　　//把文件f01给uesr，添加到market组
ll -d f1  查看目录f1的属性
```


## chown

chown命令改变某个文件或目录的所有者和所属的组，该命令可以向某个用户授权，使该用户变成指定文件的所有者或者改变文件所属的组。用户可以是用户或者是用户D，用户组可以是组名或组id。文件名可以使由空格分开的文件列表，在文件名中可以包含通配符。

只有文件主和超级用户才可以便用该命令。

### 语法

```bash
chown(选项)(参数)
```

### 选项

```bash
-c或——changes：效果类似“-v”参数，但仅回报更改的部分；
-f或--quite或——silent：不显示错误信息；
-h或--no-dereference：只对符号连接的文件作修改，而不更改其他任何相关文件；
-R或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-v或——version：显示指令执行过程；
--dereference：效果和“-h”参数相同；
--help：在线帮助；
--reference=<参考文件或目录>：把指定文件或目录的拥有者与所属群组全部设成和参考文件或目录的拥有者与所属群组相同；
--version：显示版本信息。
```

### 参数

用户：组：指定所有者和所属工作组。当省略“：组”，仅改变文件所有者；
文件：指定要改变所有者和工作组的文件列表。支持多个文件和目标，支持shell通配符。

### 实例

将目录/usr/meng及其下面的所有文件、子目录的文件主改成 liu：

```bash
chown -R liu /usr/meng
```


## cat

cat命令连接文件并打印到标准输出设备上，cat经常用来显示文件的内容，类似于下的type命令。

注意：当文件较大时，文本在屏幕上迅速闪过（滚屏），用户往往看不清所显示的内容。因此，一般用more等命令分屏显示。为了控制滚屏，可以按Ctrl+S键，停止滚屏；按Ctrl+Q键可以恢复滚屏。按Ctrl+C（中断）键可以终止该命令的执行，并且返回Shell提示符状态。

### 语法

```bash
cat(选项)(参数)
```

### 选项

```bash
-n或-number：有1开始对所有输出的行数编号；
-b或--number-nonblank：和-n相似，只不过对于空白行不编号；
-s或--squeeze-blank：当遇到有连续两行以上的空白行，就代换为一行的空白行；
-A：显示不可打印字符，行尾显示“$”；
-e：等价于"-vE"选项；
-t：等价于"-vT"选项；
```

### 参数

文件列表：指定要连接的文件列表。

### 实例

设ml和m2是当前目录下的两个文件

```bash
cat m1 （在屏幕上显示文件ml的内容）
cat m1 m2 （同时显示文件ml和m2的内容）
cat m1 m2 > file （将文件ml和m2合并后放入文件file中）
```


## tail

tail命令用于输入文件中的尾部内容。tail命令默认在屏幕上显示指定文件的末尾10行。如果给定的文件不止一个，则在显示的每个文件前面加一个文件名标题。如果没有指定文件或者文件名为“-”，则读取标准输入。

注意：如果表示字节或行数的N值之前有一个”+”号，则从文件开头的第N项开始显示，而不是显示文件的最后N项。N值后面可以有后缀：b表示512，k表示1024，m表示1 048576(1M)。

### 语法

```bash
tail(选项)(参数)
```

### 选项

```bash
--retry：即是在tail命令启动时，文件不可访问或者文件稍后变得不可访问，都始终尝试打开文件。使用此选项时需要与选项“——follow=name”连用；
-c<N>或——bytes=<N>：输出文件尾部的N（N为整数）个字节内容；
-f<name/descriptor>或；--follow<nameldescript>：显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。“-f”与“-fdescriptor”等效；
-F：与选项“-follow=name”和“--retry"连用时功能相同；
-n<N>或——line=<N>：输出文件的尾部N（N位数字）行内容。
--pid=<进程号>：与“-f”选项连用，当指定的进程号的进程终止后，自动退出tail命令；
-q或——quiet或——silent：当有多个文件参数时，不输出各个文件名；
-s<秒数>或——sleep-interal=<秒数>：与“-f”选项连用，指定监视文件变化时间隔的秒数；
-v或——verbose：当有多个文件参数时，总是输出各个文件名；
--help：显示指令的帮助信息；
--version：显示指令的版本信息。
```

### 参数

文件列表：指定要显示尾部内容的文件列表。

### 实例

```bash
tail file （显示文件file的最后10行）
tail +20 file （显示文件file的内容，从第20行至文件末尾）
tail -c 10 file （显示文件file的最后10个字符）
```


## less

less命令的作用与more十分相似，都可以用来浏览文字档案的内容，不同的是less命令允许用户向前或向后浏览文件，而more命令只能向前浏览。用less命令显示文件时，用PageUp键向上翻页，用PageDown键向下翻页。要退出less程序，应按Q键。

### 语法

```bash
less(选项)(参数)
```

### 选项

```bash
-e：文件内容显示完毕后，自动退出；
-f：强制显示文件；
-g：不加亮显示搜索到的所有关键词，仅显示当前显示的关键字，以提高显示速度；
-l：搜索时忽略大小写的差异；
-N：每一行行首显示行号；
-s：将连续多个空行压缩成一行显示；
-S：在单行显示较长的内容，而不换行显示；
-x<数字>：将TAB字符显示为指定个数的空格字符。
```

### 参数

文件：指定要分屏显示内容的文件。


## more

more命令是一个基于vi编辑器文本过滤器，它以全屏幕的方式按页显示文本文件的内容，支持vi中的关键字定位操作。more名单中内置了若干快捷键，常用的有H（获得帮助信息），Enter（向下翻滚一行），空格（向下滚动一屏），Q（退出命令）。

该命令一次显示一屏文本，满屏后停下来，并且在屏幕的底部出现一个提示信息，给出至今己显示的该文件的百分比：--More--（XX%）可以用下列不同的方法对提示做出回答：

 - 按Space键：显示文本的下一屏内容。

 - 按Enier键：只显示文本的下一行内容。

 - 按斜线符|：接着输入一个模式，可以在文本中寻找下一个相匹配的模式。

 - 按H键：显示帮助屏，该屏上有相关的帮助信息。

 - 按B键：显示上一屏内容。

 - 按Q键：退出rnore命令。

### 语法

```bash
more(语法)(参数)
```

### 选项

```bash
-<数字>：指定每屏显示的行数；
-d：显示“[press space to continue,'q' to quit.]”和“[Press 'h' for instructions]”；
-c：不进行滚屏操作。每次刷新这个屏幕；
-s：将多个空行压缩成一行显示；
-u：禁止下划线；
+<数字>：从指定数字的行开始显示。
```

### 参数

文件：指定分页显示内容的文件。

### 实例

显示文件file的内容，但在显示之前先清屏，并且在屏幕的最下方显示完核的百分比。

```bash
more -dc file
```

显示文件file的内容，每10行显示一次，而且在显示之前先清屏。

```bash
more -c -10 file
```


## grep

grep（global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。

### 选项

```bash
-a 不要忽略二进制数据。
-A<显示列数> 除了显示符合范本样式的那一行之外，并显示该行之后的内容。
-b 在显示符合范本样式的那一行之外，并显示该行之前的内容。
-c 计算符合范本样式的列数。
-C<显示列数>或-<显示列数>  除了显示符合范本样式的那一列之外，并显示该列之前后的内容。
-d<进行动作> 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。
-e<范本样式> 指定字符串作为查找文件内容的范本样式。
-E 将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。
-f<范本文件> 指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。
-F 将范本样式视为固定字符串的列表。
-G 将范本样式视为普通的表示法来使用。
-h 在显示符合范本样式的那一列之前，不标示该列所属的文件名称。
-H 在显示符合范本样式的那一列之前，标示该列的文件名称。
-i 忽略字符大小写的差别。
-l 列出文件内容符合指定的范本样式的文件名称。
-L 列出文件内容不符合指定的范本样式的文件名称。
-n 在显示符合范本样式的那一列之前，标示出该列的编号。
-q 不显示任何信息。
-R/-r 此参数的效果和指定“-d recurse”参数相同。
-s 不显示错误信息。
-v 反转查找。
-w 只显示全字符合的列。
-x 只显示全列符合的列。
-y 此参数效果跟“-i”相同。
-o 只输出文件中匹配到的部分。
```

在文件中搜索一个单词，命令会返回一个包含“match_pattern”的文本行：

```bash
grep match_pattern file_name
grep "match_pattern" file_name
```

在多个文件中查找：

```bash
grep "match_pattern" file_1 file_2 file_3 ...
```

输出除之外的所有行 -v 选项：

```bash
grep -v "match_pattern" file_name
```

标记匹配颜色 --color=auto 选项：

```bash
grep "match_pattern" file_name --color=auto
```

使用正则表达式 -E 选项：

```bash
grep -E "[1-9]+"
或
egrep "[1-9]+"
```

只输出文件中匹配到的部分 -o 选项：

```bash
echo this is a test line. | grep -o -E "[a-z]+\."
line.

echo this is a test line. | egrep -o "[a-z]+\."
line.
```

统计文件或者文本中包含匹配字符串的行数 -c 选项：

```bash
grep -c "text" file_name
```

输出包含匹配字符串的行数 -n 选项：

```bash
grep "text" -n file_name
或
cat file_name | grep "text" -n

#多个文件
grep "text" -n file_1 file_2
```

打印样式匹配所位于的字符或字节偏移：

```bash
echo gun is not unix | grep -b -o "not"
7:not

#一行中字符串的字符便宜是从该行的第一个字符开始计算，起始值为0。选项 -b -o 一般总是配合使用。
```

搜索多个文件并查找匹配文本在哪些文件中：

```bash
grep -l "text" file1 file2 file3...
```

### grep递归搜索文件

在多级目录中对文本进行递归搜索：

```bash
grep "text" . -r -n
# .表示当前目录。
```

忽略匹配样式中的字符大小写：

```bash
echo "hello world" | grep -i "HELLO"
hello
```

选项 -e 制动多个匹配样式：

```bash
echo this is a text line | grep -e "is" -e "line" -o
is
line

#也可以使用-f选项来匹配多个样式，在样式文件中逐行写出需要匹配的字符。
cat patfile
aaa
bbb

echo aaa bbb ccc ddd eee | grep -f patfile -o
```

在grep搜索结果中包括或者排除指定文件：

```bash
#只在目录中所有的.php和.html文件中递归搜索字符"main()"
grep "main()" . -r --include *.{php,html}

#在搜索结果中排除所有README文件
grep "main()" . -r --exclude "README"

#在搜索结果中排除filelist文件列表里的文件
grep "main()" . -r --exclude-from filelist
```

使用0值字节后缀的grep与xargs：

```bash
#测试文件：
echo "aaa" > file1
echo "bbb" > file2
echo "aaa" > file3

grep "aaa" file* -lZ | xargs -0 rm

#执行后会删除file1和file3，grep输出用-Z选项来指定以0值字节作为终结符文件名（\0），xargs -0 读取输入并用0值字节终结符分隔文件名，然后删除匹配文件，-Z通常和-l结合使用。
```

grep静默输出：

```bash
grep -q "test" filename

#不会输出任何信息，如果命令运行成功返回0，失败则返回非0值。一般用于条件测试。
```

打印出匹配文本之前或者之后的行：

```bash
#显示匹配某个结果之后的3行，使用 -A 选项：
seq 10 | grep "5" -A 3
5
6
7
8

#显示匹配某个结果之前的3行，使用 -B 选项：
seq 10 | grep "5" -B 3
2
3
4
5

#显示匹配某个结果的前三行和后三行，使用 -C 选项：
seq 10 | grep "5" -C 3
2
3
4
5
6
7
8

#如果匹配结果有多个，会用“--”作为各匹配结果之间的分隔符：
echo -e "a\nb\nc\na\nb\nc" | grep a -A 1
a
b
--
a
b
```


