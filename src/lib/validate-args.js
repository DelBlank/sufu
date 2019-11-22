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
const createRuleMap = name => {
  const prefix = `argument ${name}`

  return {
    number: [isNumber, `${prefix} should be number`],
    string: [isString, `${prefix} should be string`],
    boolean: [isBoolean, `${prefix} should be boolean`],
    array: [isArray, `${prefix} should be array`],
    object: [isObject, `${prefix} should be object`],
    plain_object: [isPlainObject, `${prefix} should be plain object`],
    any: [() => true],
    required: [v => !isUndefined(v) && !isNull(v), `${prefix} is required`],
    nonempty: [isEmpty, `${prefix} should not be empty`]
  }
}

// 校验参数取值
const checkArgValue = (value, validator) => {
  assert(isArray(validator), `validator should be array`)

  const [name, rule, error] = validator

  assert(
    typeof rule === 'function' || typeof rule === 'string',
    'validator.rule must be string or function'
  )

  if (typeof rule === 'function') {
    assert(rule(value), error || `argument ${name} occurs error`)

    return
  }

  const ruleMap = createRuleMap(name)

  rule.split('|').forEach(r => {
    const [checkMethod, defaultError] = ruleMap[r] || []

    if (!checkMethod) {
      return
    }

    assert(checkMethod(value), error || defaultError)
  })
}

// 校验函数参数
const validateArgs = (...validators) => fn => (...args) => {
  // 校验所有入参
  validators.forEach((validator, index) => checkArgValue(args[index], validator))

  return fn(...args)
}

export default validateArgs
