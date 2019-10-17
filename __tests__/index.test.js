import * as entry from 'index'

describe('test src entry', () => {
  it('should get right entry', () => {
    expect(entry).toHaveProperty('singleton')
  })
})
