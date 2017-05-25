---
title: Design Patterns Implemented in PHP
date: 2017-03-21 20:31:17
keywords: 
  - xiyusullos
  - "Design Patterns Implemented in PHP"
  - Design Pattern
tags: 
  - PHP
  - Design Pattern
---

## Creational (创建型模式)

In software engineering, creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

### Abstract Factory (抽象工厂模式)

To create series of related or dependent objects without specifying their concrete classes. Usually the created classes all implement the same interface. The client of the abstract factory does not care about how these objects are created, he just knows how they go together.

提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。

[Example Codes](https://github.com/xiyusullos/design-pattern/)

### Builder (建造者模式)

Builder is an interface that build parts of a complex object.

Sometimes, if the builder has a better knowledge of what it builds, this interface could be an abstract class with default methods (aka adapter).

If you have a complex inheritance tree for objects, it is logical to have a complex inheritance tree for builders too.

Note: Builders have often a fluent interface, see the mock builder of PHPUnit for example.

将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

[Example Codes](https://github.com/xiyusullos/design-pattern/)

###  Factory Method (工厂模式)

The good point over the SimpleFactory is you can subclass it to implement different ways to create objects

For simple case, this abstract class could be just an interface.

This pattern is a “real” Design Pattern because it achieves the “Dependency Inversion Principle” a.k.a the “D” in
[S.O.L.I.D principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design).



> SOLID (single responsibility, open-closed, Liskov substitution, interface segregation and dependency inversion)

It means the FactoryMethod class depends on abstractions, not concrete classes. This is the real trick compared to SimpleFactory or StaticFactory.

定义一个用于创建对象的接口，让子类决定将哪一个类实例化。Factory Method使一个类的实例化延迟到其子类。

### Multiton (多例模式)

### Pool (对象池模式)

### Prototype (原型模式)

### Simple Factory (简单工厂模式)

### Singleton (单例模式)

### Static Factory (静态工厂模式)

<!-- more -->

## Structural (结构型模式)

### Adapter / Wrapper (适配器模式)

### Bridge (桥接模式)

### Composite (组合模式)

### Data Mapper (数据映射器)

### Decorator (装饰模式)

### Dependency Injection (依赖注入)

### Facade (外观模式)

### Fluent Interface (连贯接口)

### Flyweight (享元模式)

### Proxy (代理模式)

### Registry (注册模式)

## Behavioral (行为型模式)

### Chain Of Responsibilities (责任链模式)

### Command (命令模式)

### Iterator (迭代器模式)

### Mediator (中介模式)

### Memento (备忘录模式)

### Null Object (空对象模式)

### Observer (观察者模式)

### Specification (规格化)

### State (状态模式)

### Strategy (策略模式)

### Template Method (策略模式)

### Visitor (访问者模式)

