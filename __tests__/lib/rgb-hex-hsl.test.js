import { rgbToHex, hexToRgb, rgbToHsl } from 'lib/rgb-hex-hsl'

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

  it('should transform rgb to hsl', () => {
    expect(rgbToHsl(0, 0, 0)).toEqual([0, 0, 0])
    expect(rgbToHsl(255, 255, 255)).toEqual([0, 0, 1])
    expect(rgbToHsl(172, 234, 76)).toEqual([84, 0.79, 0.61])
    expect(rgbToHsl(120, 30, 20)).toEqual([6, 0.71, 0.27])
    expect(rgbToHsl(120, 10, 20)).toEqual([355, 0.85, 0.25])
    expect(rgbToHsl(20, 30, 100)).toEqual([233, 0.67, 0.24])
  })
})
