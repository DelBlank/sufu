import { Stack } from 'lib/struct'

const { log } = console

describe('test struct', () => {
  beforeEach(() => {
    console.log = jest.fn()
  })
  afterAll(() => {
    console.log = log
  })

  it('should test stack', () => {
    const stack = new Stack()

    expect(stack.size()).toBe(0)
    expect(stack.pop()).toBe(null)
    expect(stack.empty()).toBe(true)

    stack.push(10)
    stack.push(true)
    stack.push({ v: 1 })
    stack.push([1, 2, 3])
    stack.print()

    expect(console.log).toBeCalledWith('10')
    expect(console.log).toBeCalledWith('true')
    expect(console.log).toBeCalledWith('{"v":1}')
    expect(console.log).toBeCalledWith('[1,2,3]')
    expect(stack.empty()).toBe(false)
    expect(stack.size()).toBe(4)
    expect(stack.pop()).toEqual([1, 2, 3])
    expect(stack.pop()).toEqual({ v: 1 })
    expect(stack.size()).toBe(2)

    stack.clear()

    expect(stack.empty()).toBe(true)
    expect(stack.size()).toBe(0)
    expect(stack.pop()).toBe(null)
  })
})
