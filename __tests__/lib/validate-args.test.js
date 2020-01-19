import validateArgs from 'lib/validate-args'

let func
// const vf = validateArgs(
//   ['a', 'number', "a should be number"],
//   ['b', 'number|string', 'b should be number or string'],
//   ['c', 'any'],
//   ['d', d => d > 10],
//   ['e', 'nonempty', 'e should not be empty'],
//   ['f', 'required', 'f is required'],
//   ['g', 'object', 'g should be object']
// )(func)

describe('test validate-args', () => {
  beforeEach(() => {
    func = jest.fn()
  })

  it('should check arguments', () => {
    let vf = validateArgs({})(func)
    expect(() => vf()).toThrow('validator should be array')

    vf = validateArgs(['x', {}])(func)

    expect(() => vf()).toThrow('validator.rule must be string or function')
  })

  it('should validate number', () => {
    const vf = validateArgs(['x', 'number', 'x should be number'])(func)

    expect(() => vf('1')).toThrow('x should be number')

    vf(1)

    expect(func).toBeCalledWith(1)
  })

  it('should validate string', () => {
    const vf = validateArgs(['x', 'string', 'x should be string'])(func)

    expect(() => vf(1)).toThrow('x should be string')

    vf('1')

    expect(func).toBeCalledWith('1')
  })

  it('should validate boolean', () => {
    const vf = validateArgs(['x', 'boolean', 'x should be boolean'])(func)

    expect(() => vf(1)).toThrow('x should be boolean')

    vf(true)
    vf(false)

    expect(func).toBeCalledWith(true)
    expect(func).toBeCalledWith(false)
  })

  it('should validate array', () => {
    const vf = validateArgs(['x', 'array', 'x should be array'])(func)

    expect(() => vf({})).toThrow('x should be array')

    vf([])

    expect(func).toBeCalledWith([])
  })

  it('should validate object', () => {
    const vf = validateArgs(['x', 'object', 'x should be object'])(func)

    expect(() => vf(1)).toThrow('x should be object')

    vf({})
    vf([])

    expect(func).toBeCalledWith({})
    expect(func).toBeCalledWith([])
  })

  it('should validate plain object', () => {
    const vf = validateArgs(['x', 'plain_object', 'x should be plain object'])(func)

    expect(() => vf([])).toThrow('x should be plain object')

    vf({})

    expect(func).toBeCalledWith({})
  })

  it('should validate any', () => {
    const vf = validateArgs(['x', 'any', 'x should be string'])(func)

    expect(() => vf(1)).not.toThrow('x should be string')

    expect(func).toBeCalledWith(1)
  })

  it('should validate required', () => {
    const vf = validateArgs(['x', 'required', 'x is required'])(func)

    expect(() => vf()).toThrow('x is required')
    expect(() => vf(null)).toThrow('x is required')

    vf('1')

    expect(func).toBeCalledWith('1')
  })

  it('should validate nonempty', () => {
    const vf = validateArgs(['x', 'nonempty', 'x should be nonempty'])(func)

    expect(() => vf({})).toThrow('x should be nonempty')
    expect(() => vf([])).toThrow('x should be nonempty')
    expect(() => vf(null)).toThrow('x should be nonempty')
    expect(() => vf(0)).toThrow('x should be nonempty')
    expect(() => vf(false)).toThrow('x should be nonempty')

    vf('1')

    expect(func).toBeCalledWith('1')
  })

  it('should validate function', () => {
    const vf = validateArgs(['x', x => x > 10, 'x should bigger than 10'])(func)

    expect(() => vf(0)).toThrow('x should bigger than 10')

    vf(11)

    expect(func).toBeCalledWith(11)
  })

  it('should validate muliple rule', () => {
    const vf = validateArgs(['x', 'number|string|xxxxxx', 'x should be number or string'])(func)

    expect(() => vf(false)).toThrow('x should be number or string')

    vf(1)
    vf('1')

    expect(func).toBeCalledWith(1)
    expect(func).toBeCalledWith('1')
  })
})
