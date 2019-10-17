import singleton from 'lib/singleton'

const factory = a => ({ a })

describe('test singleton', () => {
  it('should create single object', () => {
    const create = singleton(factory)

    const obj1 = create(1)
    const obj2 = create(2)

    expect(obj1).toEqual({ a: 1 })
    expect(obj1 === obj2).toBe(true)
  })
})
