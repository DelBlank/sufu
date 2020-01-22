# sufu

js 工具库。

- [singleton - 创建单例对象](#singleton)
- [validateArgs - 校验函数参数](#validateargs)
- [rgbToHex - rgb 转 16 进制](#rgbToHex)
- [hexToRgb - 16 进制转 rgb](#hexToRgb)

## Installation

```shell
npm i --save sufu
```

## API

### singleton

根据构造函数创建单例对象。

#### 示例：

```js
import { singleton } from "sufu";

const createObj = singleton(() => ({ a: 1 }));

// obj1 === obj2: true
const obj1 = createObj();
const obj2 = createObj();
```

#### 参数：

| name          | type                    | required | default | description      |
| ------------- | ----------------------- | -------- | ------- | ---------------- |
| factoryMethod | function(args: any):any | √        |         | 单例对象构造函数 |

### validateArgs

高阶函数，代理校验函数参数。

#### 示例：

```js
import { validateArgs } from "sufu";

const f = (a, b, c, d, e, f) => {
  console.log(a, b, c, d, e, f);
};

const vf = validateArgs(
  ["a", "number", "argument a should be number"],
  ["b", "number|string", "argument b should be number or string"],
  ["c", "any"],
  ["d", d => d > 10, "d should be bigger than 10"],
  ["e", "nonempty", "e should not be empty"],
  ["f", "required", "f is required"]
)(f);

vf("1"); // throw error: argument a should be number
vf(1, {}); // throw error: argument b should be number or string
vf(1, 2, 3, 4); // throw error: d should be bigger than 10
vf(1, 2, 3, 11, []); // throw error: e should not be empty
vf(1, 2, 3, 11, {}); // throw error: e should not be empty
vf(1, 2, 3, 11, 12, undefined); // throw error: f is required
vf(1, 2, 3, 11, 12, null); // throw error: f is required
vf(1, 2, 3, 11, 12, true); // console: 1 2 3 11 [object object] true
```

#### 参数：

| name      | type                | required | default | description        |
| --------- | ------------------- | -------- | ------- | ------------------ |
| validator | [name, rule, error] |          |         | 某个参数的校验规则 |

`validator`:

| name  | type                           | required | default | description                                                  |
| ----- | ------------------------------ | -------- | ------- | ------------------------------------------------------------ |
| name  | string                         | √        |         | 参数名称                                                     |
| rule  | string / function(any):boolean | √        |         | 校验规则，多个校验规则可通过 <strong>\|</strong> 拼接        |
| error | string                         |          |         | 校验出错提示，默认提示为 `argument ${name} validation error` |

自带校验规则：

- `string`: 字符串
- `number`: 数字
- `boolean`: 布尔
- `array`: 数组
- `object`: 非 null 对象
- `plain_object`: 非 null 普通对象
- `any`: 任意类型
- `required`: 取值非 `undefined` 且非 `null`
- `nonempty`: 取值非空（`undefined`, `null`, `0`, `''`, `false`, `[]`, `{}`）

### rgbToHex

rgb 转为 16 进制。

#### 示例

```js
import { rgbToHex } from "sufu";

rgbToHex(0, 0, 0); // '000000'
rgbToHex(255, 255, 255); // 'ffffff'
rgbToHex(172, 234, 76); // 'acea4c'
```

#### 参数

| name  | type   | required | default | description |
| ----- | ------ | -------- | ------- | ----------- |
| red   | number | string   | √       |             | 红色系数 |
| green | number | string   | √       |             | 绿色系数 |
| blue  | number | string   | √       |             | 蓝色系数 |

### hexToRgb

16 进制转 rgb。

#### 示例

```js
import { hexToRgb } from "sufu";

hexToRgb("000000"); // [0, 0, 0]
hexToRgb("ffffff"); // [255, 255, 255]
hexToRgb("acea4c"); // [172, 234, 76]

hexToRgb(0); // [0, 0, 0]
hexToRgb(0xffffff); // [255, 255, 255]
hexToRgb(11332172); // [172, 234, 76]
```

#### 参数

| name | type   | required | default | description |
| ---- | ------ | -------- | ------- | ----------- |
| hex  | string | number   | √       |             | 16 进制字符串或任意进制的整数 |

## Changelog

[CHANGELOG.md](https://github.com/DelBlank/sufu/blob/master/CHANGELOG.md)
