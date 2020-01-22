import { rgbToHex, hexToRgb } from 'lib/rgb-hex-hsl'

describe('test rgb-hex-hsl', () => {
  it('should transform rgb to hex', () => {
    expect(rgbToHex(0, 0, 0)).toBe('000000')
    expect(rgbToHex(255, 255, 255)).toBe('ffffff')
    expect(rgbToHex(172, 234, 76)).toBe('acea4c')
  })

  it('should transform hex to rgb', () => {
    expect(hexToRgb('000000')).toEqual([0, 0, 0])
    expect(hexToRgb('ffffff')).toEqual([255, 255, 255])
    expect(hexToRgb('acea4c')).toEqual([172, 234, 76])

    expect(hexToRgb(0)).toEqual([0, 0, 0])
    expect(hexToRgb(0xffffff)).toEqual([255, 255, 255])
    expect(hexToRgb(11332172)).toEqual([172, 234, 76])
  })
})
