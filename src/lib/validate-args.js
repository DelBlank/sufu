// 高阶函数，代理校验函数参数
import assert from 'assert'
import {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isPlainObject,
  isUndefined,
  isNull,
  isEmpty
} from 'lodash'

// 默认校验规则
const ruleMap = {
  number: isNumber,
  string: isString,
  boolean: isBoolean,
  array: isArray,
  object: isObject,
  plain_object: isPlainObject,
  any: () => true,
  required: v => !isUndefined(v) && !isNull(v),
  nonempty: v => !isEmpty(v)
}

// 校验参数取值
const checkArgValue = (value, validator) => {
  assert(isArray(validator), `validator should be array`)

  const [name, rule, error = `argument ${name} validation error`] = validator

  assert(
    typeof rule === 'function' || typeof rule === 'string',
    'validator.rule must be string or function'
  )

  if (typeof rule === 'function') {
    assert(rule(value), error)

    return
  }

  const result = rule.split('|').reduce((acc, cur) => {
    const checkMethod = ruleMap[cur]

    if (!checkMethod) {
      return acc
    }

    return acc || !!checkMethod(value)
  }, false)

  assert(result, error)
}

// 校验函数参数
const validateArgs = (...validators) => fn => (...args) => {
  // 校验所有入参
  validators.forEach((validator, index) => checkArgValue(args[index], validator))

  return fn(...args)
}

export default validateArgs
