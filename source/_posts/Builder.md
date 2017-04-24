---
title: Builder
keywords:
  - xiyusullos
  - Builder
date: 2017-03-29 13:51:31
tags:
---

## Intent

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

<!-- more -->

## Code

Code can be found on [Github](https://github.com/xiyusullos/design-pattern)

src/Creational/Builder/Director.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:42
 */

namespace xiyusullos\Creational\Builder;

use xiyusullos\Creational\Builder\Parts\Vehicle;

/**
 * Class Director
 * @package xiyusullos\Creational\Builder
 */
class Director
{

    /**
     * @param BuilderInterface $builder
     *
     * @return Vehicle
     */
    public function build(BuilderInterface $builder): Vehicle
    {
        $builder->createVehicle();
        $builder->addDoors();
        $builder->addEngine();
        $builder->addWheel();

        return $builder->getVehicle();
    }
}
```

src/Creational/Builder/BuilderInterface.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:38
 */

namespace xiyusullos\Creational\Builder;


use xiyusullos\Creational\Builder\Parts\Vehicle;

/**
 * Interface BuilderInterface
 * @package xiyusullos\Creational\Builder
 */
interface BuilderInterface
{
    public function createVehicle();

    public function addWheel();

    public function addEngine();

    public function addDoors();

    /**
     * @return Vehicle
     */
    public function getVehicle(): Vehicle;
}
```

src/Creational/Builder/CarBuilder.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:58
 */

namespace xiyusullos\Creational\Builder;


use xiyusullos\Creational\Builder\Parts\Vehicle;

/**
 * Class CarBuilder
 * @package xiyusullos\Creational\Builder
 */
class CarBuilder implements BuilderInterface
{

    /**
     * @var Parts\Car;
     */
    private $car;

    public function createVehicle()
    {
        $this->car = new Parts\Car();
    }

    public function addWheel()
    {
        $this->car->setPart('wheelLF', new Parts\Wheel);
        $this->car->setPart('wheelRF', new Parts\Wheel);
        $this->car->setPart('wheelLR', new Parts\Wheel);
        $this->car->setPart('wheelRR', new Parts\Wheel);
    }

    public function addEngine()
    {
        $this->car->setPart('carEngine', new Parts\Engine);
    }

    public function addDoors()
    {
        $this->car->setPart('rightDoor', new Parts\Door);
        $this->car->setPart('leftDoor', new Parts\Door);
        $this->car->setPart('trunkDoor', new Parts\Door);
    }

    /**
     * @return Vehicle
     */
    public function getVehicle(): Vehicle
    {
        return $this->car;
    }
}
```

src/Creational/Builder/TruckBuilder.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:47
 */

namespace xiyusullos\Creational\Builder;


use xiyusullos\Creational\Builder\Parts\Vehicle;

/**
 * Class TruckBuilder
 * @package xiyusullos\Creational\Builder
 */
class TruckBuilder implements BuilderInterface
{
    /**
     * @var Parts\Truck;
     */
    private $truck;

    public function createVehicle()
    {
        $this->truck = new Parts\Truck();
    }

    public function addWheel()
    {
        $this->truck->setPart('wheel1', new Parts\Wheel);
        $this->truck->setPart('wheel2', new Parts\Wheel);
        $this->truck->setPart('wheel3', new Parts\Wheel);
        $this->truck->setPart('wheel4', new Parts\Wheel);
        $this->truck->setPart('wheel5', new Parts\Wheel);
        $this->truck->setPart('wheel6', new Parts\Wheel);
    }

    public function addEngine()
    {
        $this->truck->setPart('truckEngine', new Parts\Engine);
    }

    public function addDoors()
    {
        $this->truck->setPart('rightDoor', new Parts\Door);
        $this->truck->setPart('leftDoor', new  Parts\Door);
    }

    /**
     * @return Vehicle
     */
    public function getVehicle(): Vehicle
    {
        return $this->truck;
    }
}
```

src/Creational/Builder/Parts/Vehicle.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:41
 */

namespace xiyusullos\Creational\Builder\Parts;


/**
 * Class Vehicle
 * @package xiyusullos\Creational\Builder\Parts
 */
abstract class Vehicle
{
    /**
     * @var Object[]
     */
    private $data = [];

    /**
     * @param string $key
     * @param Object $value
     */
    public function setPart($key, $value)
    {
        $this->data[$key] = $value;
    }
}
```

src/Creational/Builder/Parts/Car.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:59
 */

namespace xiyusullos\Creational\Builder\Parts;


class Car extends Vehicle
{

}
```

src/Creational/Builder/Parts/Truck.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:48
 */

namespace xiyusullos\Creational\Builder\Parts;


class Truck extends Vehicle
{

}
```

src/Creational/Builder/Parts/Door.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:52
 */

namespace xiyusullos\Creational\Builder\Parts;


class Door
{

    /**
     * Door constructor.
     */
    public function __construct()
    {
    }
}
```

src/Creational/Builder/Parts/Engine.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:55
 */

namespace xiyusullos\Creational\Builder\Parts;


class Engine
{

    /**
     * Engine constructor.
     */
    public function __construct()
    {
    }
}
```

src/Creational/Builder/Parts/Wheel.php

```php
<?php
/**
 * Created by PhpStorm.
 * User: xiyusullos
 * Date: 2017/3/21
 * Time: 19:56
 */

namespace xiyusullos\Creational\Builder\Parts;


class Wheel
{

    /**
     * Wheel constructor.
     */
    public function __construct()
    {
    }
}
```

