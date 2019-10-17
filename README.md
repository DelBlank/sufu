# sufu

js 工具库。

## Installation

```shell
npm i --save sufu
```

## API

### singleton

创建单例对象。

示例：

```js
import { singleton } from "sufu";

const createObj = singleton(() => ({ a: 1 }));

// obj1 === obj2: true
const obj1 = createObj();
const obj2 = createObj();
```

参数：

| name          | type                    | required | default | description      |
| ------------- | ----------------------- | -------- | ------- | ---------------- |
| factoryMethod | function(args: any):any | √        |         | 单例对象构造函数 |

## Changelog

[CHANGELOG.md](https://github.com/DelBlank/sufu/blob/master/CHANGELOG.md)
