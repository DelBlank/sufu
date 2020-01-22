import { rgbToHex } from 'lib/rgb-hex-hsl'

describe('test rgb-hex-hsl', () => {
  it('should transform rgb to hex', () => {
    expect(rgbToHex(0, 0, 0)).toBe('000000')
    expect(rgbToHex(255, 255, 255)).toBe('ffffff')
    expect(rgbToHex(172, 234, 76)).toBe('acea4c')
  })
})
