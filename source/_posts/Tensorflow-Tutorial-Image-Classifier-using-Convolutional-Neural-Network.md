---
title: 'Tensorflow Tutorial: Image Classifier using Convolutional Neural Network'
keywords:
  - xiyusullos
  - aponder
  - 'Tensorflow Tutorial: Image Classifier using Convolutional Neural Network'
date: 2019-04-18 11:09:11
tags:
---

# Tensorflow教程：使用卷积神经网络的图像分类器

在这个Tensorflow教程中，我们将使用Tensorflow构建一个基于卷积神经网络的图像分类器。如果您刚刚开始使用Tensorflow，那么最好[阅读这里的Tensorflow基本教程](https://cv-tricks.com/artificial-intelligence/deep-learning/deep-learning-frameworks/tensorflow/tensorflow-tutorial/)。

为了演示如何构建基于卷积神经网络的图像分类器，我们将构建一个6层神经网络来识别和分离狗和猫的图像。我们将要构建的这个网络是一个非常小的网络，可以在CPU上运行它。传统的神经网络在图像分类中有较多的参数，如果在CPU上进行训练，会花费大量的时间。然而，在本文中，我是向您展示的是如何使用Tensorflow而不是参与[ILSVRC](http://image-net.org/challenges/LSVRC/)来构建一个真实的卷积神经网络。在开始学习Tensorflow教程之前，让我们先介绍一下卷积神经网络的基础知识。如果您已经熟悉卷积神经网（conv-nets），您可以转到第2部分，即Tensorflow教程。

## 第1部分：卷积神经网络（CNN）基础

神经网络本质上是求解优化问题的数学模型。它们由神经元构成，神经元是神经网络的基本计算单元。一个神经元接受一个输入（比方说：$x$），对它做一些计算（比方说：用一个变量$w$乘以它，再加上另一个变量$b$）来产生一个值（比方说：$z = wx + b$）。这个值被传递给一个叫做**激活函数f（activation function）**的非线性函数，以产生神经元的最终输出（激活）。激活函数有很多种，**Sigmoid**是常用的激活函数之一，数学公式为：
$$
y = \frac{1}{1+e^{-z}}
$$
利用sigmoid函数作为激活函数的神经元称为**Sigmoid神经元（Sigmoid neuron）**。根据激活函数的不同，神经元可被命名为**RELU**、**TanH**等神经元（记住这一点）。一个神经元可以连接到多个神经元，就像这样：

![Neuron in Tensorflow tutorial](Tensorflow-Tutorial-Image-Classifier-using-Convolutional-Neural-Network/assets/191x118xfigures_ArtificialNeuron.png)

在这个例子中，你可以看到**权值**（weight）是连接（connection）的属性，即每个连接都有不同的权值，而**偏差**（bias）是神经元的属性。这是产生输出y的sigmoid神经元的全图：
$$
z = b + \sum_{i}x_iw_i \\
y = \frac{1}{1+e^{-z}}
$$

### 神经层

如果你把神经元堆在一条直线上，这叫做一层。这是神经网络的下一个组成部分。


  ![neural network shown in Tensorflow tutorial ](Tensorflow-Tutorial-Image-Classifier-using-Convolutional-Neural-Network/assets/nnet.png)

如上所示，

- 输入层：绿色的神经元构成了网络的第一层，输入数据通过第一层传递到网络。

- 输出层：如红色所示。

- 隐藏层：在输入层和输出层之间的层称为隐藏层。在这个例子中，我们只有一个用蓝色表示的隐藏层。具有许多隐含层的网络往往更精确，称为**深度网络**。而使用这些深度网络的机器学习算法称为**深度学习**。

### 神经层的类型

通常，一层中的所有神经元都进行类似的数学运算，这就是该层名称的由来（输入层和输出层除外，因为它们很少进行数学运算）。以下是你应该知道的最流行的神经层类型：

#### 卷积层（Convolutional Layer）

卷积是一种数学运算，用于单次处理中对信号进行滤波，寻找信号中的模式等。在卷积层中，所有的神经元都对输入进行卷积运算，因此称为卷积神经元。卷积神经元中最重要的参数是过滤器（filter）的大小，假设我们有一个过滤器大小为5\*5\*3的层。同样，假设输入到卷积神经元的是一个大小为32\*32的输入图像，有3个通道（即R、G、B）。

![Convolution in Tensorflow tutorial](Tensorflow-Tutorial-Image-Classifier-using-Convolutional-Neural-Network/assets/289x273xConvolution.png)

让我们从图像中选择一个5\*5\*3（彩色图像中有3个通道）大小的块，然后用过滤器（$w$）计算卷积（点积）。这个卷积运算将得到一个数字作为输出。我们还可以把偏置（$b$）加到这个输出中。

![convolution explained during Tensorflow tutorial](Tensorflow-Tutorial-Image-Classifier-using-Convolutional-Neural-Network/assets/268x125xconvolve2.png)

为了计算点积，过滤器的第三维数必须与输入的通道数相同。也就是说，当我们计算点积时，它是一个5\*5\*3的块与5\*5\*3的过滤器的矩阵乘法。

我们将在整个输入图像上滑动卷积过滤器来计算整个图像的输出，如下图所示：

![Convolution_schematic](Tensorflow-Tutorial-Image-Classifier-using-Convolutional-Neural-Network/assets/Convolution_schematic.gif)

在本例中，我们每次将窗口滑动1个像素。在某些情况下，会将窗口滑动超过1个像素。这个数字叫做**步长（stride）**。

如果将所有这些输出连接到2D中，我们将得到一个大小为28\*28的输出**激活图（activation map）**（您能想到为什么在过滤器为5\*5，步长为1时，是从32\*32到28\*28？）。如果我们的示例中有6个过滤器，那么输出的大小将是28\*28\*6。

![Convolution-Case-Conflict](Tensorflow-Tutorial-Image-Classifier-using-Convolutional-Neural-Network/assets/Convolution-Case-Conflict.png)

正如您所看到的，每次卷积之后，输出的大小都会减小（在本例中，我们将从32\*32减小到28\*28）。在一个多层的深度神经网络中，这样的输出会变得非常小，但这并不能很好地工作。因此，在输入层的边界上进行0填充是一种标准做法，这样输出的大小就与输入层的大小相同。因此，在这个例子中，如果我们在输入层的两边都添加一个大小为2的填充，那么输出层的大小将是32\*32\*6，这从实现的目的来看也非常有用。假设您有一个大小为$N*N$的输入，过滤器（filter）的值为$F$，步长（stride）为$S$，有$P​$个0填充，那么输出大小为：
$$
(N - F + 2P)/S + 1
$$

#### 池化层（Pooling Layer）

在卷积层之后，将接着用池化层，以减小空间大小（只有宽度和高度，没有深度）。这减少了参数的数量，从而减少了计算量。此外，较少的参数避免了过拟合（overfit）（现在不用担心，稍后会详细介绍）。最常见的池的形式是**最大池（max pooling）**，我们取一个大小为F\*F的过滤器，并对图像的F\*F部分取其最大值。

![maxpool](Tensorflow-Tutorial-Image-Classifier-using-Convolutional-Neural-Network/assets/300x140xmaxpool.jpg)

如果你用平均值来代替最大值，它会被称为**平均池（average pooling）**，但它不是很流行。

如果你的输入大小为 $w1*h1*d1$ ，过滤器的大小为$f*f$ ，步长为$S$，那么输出大小为$w2*h2*d2$：
$$
w2 = (w1 - f)/S + 1 \\
h2 = (h1 - f)/S + 1 \\
d2 = d1
$$
最常见的池使用大小为2\*2的过滤器，步长为2。正如您可以使用上面的公式来计算，它减少了一半的输入大小。

![Max pooling with filter size of 2*2 during Tensorflow tutorial](Tensorflow-Tutorial-Image-Classifier-using-Convolutional-Neural-Network/assets/211x166xpool-1.jpg)

#### 全连接层（Fully Connected Layer）

如果一层中的每个神经元都接收到上一层所有神经元的输入，那么这一层就称为**全连接层（fully connected layer）**。该层的输出由矩阵乘法和偏置偏移量计算。

### 理解训练过程

深层神经网络只不过是聪明的数学模型，在一定程度上模拟了人脑。当我们试图训练一个神经网络时，我们需要做2件基本的事情：

#### 网络的架构

当设计一个神经网络的架构时，你必须决定：如何安排层？使用哪些层？每一层使用多少个神经元等等？架构设计是一个比较复杂的、高难度的课题，需要大量的研究。有许多标准的架构可以很好地解决许多标准问题。例如AlexNet，GoogleNet，InceptionResnet，VGG等。在刚开始时，您应该只使用标准的网络架构。在您对神经网络有了很多经验之后，您就可以开始设计自己的网络架构了。因此，我们不必担心。

#### 正确的权重/参数

一旦您决定了网络的架构，那么，第二重要的就是权重$w$和偏差$b$或网络参数。**训练目标**是得到所有这些参数的最佳值，从而可靠地解决问题。例如，当我们正在努力构建狗和猫之间的分类器，我们希望找到合适的参数，在所有图片是狗的时候给出狗的概率为1（或者至少高于猫的概率）或者在所有图片是猫的时候，给出猫的概率为1（或者至少高于狗的概率）。

您可以使用一个称为**反向传播（Backward propagation）**的过程来找到最佳的参数集，也就是说，您从一个随机的参数集开始，并不断更改这些权重，直到对于每个训练图像，我们都能得到正确的输出。有许多优化器（optimizer）可以改变权重，这些优化器可以从数学角度快速地找到正确的权重。梯度下降（Gradient Descent）就是这样一种方法（反向传播和优化器是一个非常复杂的主题，但是我们现在不需要担心它，因为Tensorflow会处理它）。

因此，假设我们从一些参数的初值开始，并输入1张狗的训练图片（实际上是多张图片一起喂食（feed）），我们计算网络的输出为是狗的概率为0.1，是猫的概率为0.9。现在，我们做反向传播来**缓慢地改变**参数，这样在下一次迭代中，这个图片是狗的概率就会增加。有一个变量是用来控制我们在训练过程中改变网络参数的速度，叫**学习率（learning rate）**。如果您仔细想想，我们利用网络来最大化所有正确的分类（即我们关心整个训练集）。我们希望进行这些更改，使网络正确分类的数量增加。因此，我们定义了一个称为**成本（cost）**的数字，它表示训练是否在正确的方向上进行。**通常，cost的定义是这样的：随着成本的降低，网络的正确率将提高。**因此，我们关注cost，并不断地进行正向或反向传播的多次迭代（有时10s上千次），直到cost停止下降。cost有很多种定义，其中一个简单的是**均方根成本（mean root cost）**。假设$y_{prediction}$是对于所有训练图像网络输出的向量（vector），$y_{actual}$是对于这些标记图像的实际值（也叫ground truth）的向量。所以，如果我们最小化这两个变量之间的距离，这将是一个很好的训练指标。因此，我们将cost定义为所有图像的这些距离的平均值：
$$
cost=0.5 \sum_{i=0}^n (y_{actual}-y_{prediction})^2
$$
这是cost的一个非常简单的例子，但是在实际的训练中，我们使用了更复杂的cost度量，比如交叉熵成本（cross-entropy cost）。Tensorflow实现了很多这些cost，所以我们现在不需要担心这些cost的细节。

训练完成后，这些参数和架构将保存在一个二进制文件中（称为模型（model））。在生产设置中，当我们对一个新的狗/猫图像进行分类时，我们将该模型加载到相同的网络架构中，并计算出新图像是猫/狗的概率。这叫做**推理（inference）**或**预测（prediction）**。

为了计算简单，并不是所有的训练数据都同时被输入到网络中。假设，我们共有1600张图片，我们把它们分成小批，比如16张或32张，称为**批大小（batch-size）**。因此，将需要100或50轮（迭代）才能获得用于训练的完整数据。这被称为一个**历元（epoch）**，即在一个历元中，网络可以一次看到所有的训练图像。我们还需要做一些其他事情来提高准确性，但是我们现在不需要担心这些事情。

## 第2部分：Tensorflow教程->构建一个基于图像分类器的小型神经网络

