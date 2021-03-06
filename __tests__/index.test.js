import * as entry from 'index'

describe('test src entry', () => {
  it('should get right entry', () => {
    expect(entry).toHaveProperty('singleton')
    expect(entry).toHaveProperty('validateArgs')
    expect(entry).toHaveProperty('Stack')
    expect(entry).toHaveProperty('rgbToHex')
    expect(entry).toHaveProperty('hexToRgb')
    expect(entry).toHaveProperty('rgbToHsl')
    expect(entry).toHaveProperty('hslToRgb')
  })
})
