---
title: Abstract Factory
keywords:
  - xiyusullos
  - Abstract Factory
date: 2017-03-29 12:07:49
tags:
---

## Intent

Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。

<!-- more -->

## Code

Code can be found on [Github](https://github.com/xiyusullos/design-pattern)

src/Creational/AbstractFactory/AbstractFactory.php

```php
<?php

namespace xiyusullos\Creational\AbstractFactory;

/**
 * Class AbstractFactory
 * @package Xiyusullos\Creational\AbstractFactory
 */
abstract class AbstractFactory
{
    /**
     * @param string $content
     *
     * @return Text
     */
    abstract function createText(string $content): Text;
}
```

src/Creational/AbstractFactory/HtmlFactory.php

```php
<?php

namespace xiyusullos\Creational\AbstractFactory;

/**
 * Class HtmlFactory
 * @package Xiyusullos\Creational\AbstractFactory
 */
class HtmlFactory extends AbstractFactory
{
    /**
     * @param string $content
     *
     * @return Text
     */
    public function createText(string $content): Text
    {
        return new HtmlText($content);
    }
}
```

src/Creational/AbstractFactory/JsonFactory.php

```php
<?php

namespace xiyusullos\Creational\AbstractFactory;

/**
 * Class JsonFactory
 * @package Xiyusullos\Creational\AbstractFactory
 */
class JsonFactory extends AbstractFactory
{
    /**
     * @param string $content
     *
     * @return Text
     */
    public function createText(string $content): Text
    {
        return new JsonText($content);
    }
}
```

src/Creational/AbstractFactory/Text.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: Xiyusullos
 * Date: 2017/3/21
 * Time: 18:32
 */

namespace xiyusullos\Creational\AbstractFactory;


/**
 * Class Text
 * @package Xiyusullos\Creational\AbstractFactory
 */
abstract class Text
{
    /**
     * @var string
     */
    private $text;

    /**
     * Text constructor.
     *
     * @param string $text
     */
    public function __construct(string $text)
    {
        $this->text = $text;
    }

}
```

src/Creational/AbstractFactory/HtmlText.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: Xiyusullos
 * Date: 2017/3/21
 * Time: 18:35
 */

namespace xiyusullos\Creational\AbstractFactory;


/**
 * Class HtmlText
 * @package Xiyusullos\Creational\AbstractFactory
 */
class HtmlText extends Text
{
    // do something here
}
```

src/Creational/AbstractFactory/JsonText.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: Xiyusullos
 * Date: 2017/3/21
 * Time: 18:34
 */

namespace xiyusullos\Creational\AbstractFactory;


/**
 * Class JsonText
 * @package Xiyusullos\Creational\AbstractFactory
 */
class JsonText extends Text
{
    // do something here
}
```

## Test

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 18:43
 */

namespace xiyusullos\Test;


use PHPUnit\Framework\TestCase;
use xiyusullos\Creational\AbstractFactory\HtmlFactory;
use xiyusullos\Creational\AbstractFactory\HtmlText;
use xiyusullos\Creational\AbstractFactory\JsonFactory;
use xiyusullos\Creational\AbstractFactory\JsonText;

class AbstractFactoryTest extends TestCase
{
    public function testCanCreateHtmlText()
    {
        $factory = new HtmlFactory();
        $text = $factory->createText('html');

        $this->assertInstanceOf(HtmlText::class, $text);
    }

    public function testCanCreateJsonText()
    {
        $factory = new JsonFactory();
        $text = $factory->createText('json');

        $this->assertInstanceOf(JsonText::class, $text);
    }
}
```