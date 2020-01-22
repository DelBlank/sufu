/* eslint-disable no-param-reassign */
// 颜色标准转换

// rgb 转 hex
export const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')

// hex 转 rgb
export const hexToRgb = hex => {
  const realHex = hex.toString(16).padStart(6, '0')

  const { length } = realHex
  const rgb = []

  for (let i = 0; i < length; i += 2) {
    rgb.push(parseInt(`${realHex[i]}${realHex[i + 1]}`, 16))
  }

  return rgb
}

// rgb 转 hsl
export const rgbToHsl = (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min
  const c = 60

  const l = (max + min) / 2
  const s = diff === 0 ? 0 : diff / (1 - Math.abs(2 * l - 1))

  let h

  switch (true) {
    case diff === 0:
      h = 0
      break
    case max === r:
      h = c * ((g - b) / diff + (g < b ? 6 : 0))
      break
    case max === g:
      h = c * ((b - r) / diff + 2)
      break
    case max === b:
      h = c * ((r - g) / diff + 4)
  }

  return [Math.round(h), parseFloat(s.toFixed(2)), parseFloat(l.toFixed(2))]
}

// hsl 转 rgb
export const hslToRgb = (h, s, l) => {
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let rgb

  switch (true) {
    case h >= 0 && h < 60:
      rgb = [c, x, 0]
      break
    case h >= 60 && h < 120:
      rgb = [x, c, 0]
      break
    case h >= 120 && h < 180:
      rgb = [0, c, x]
      break
    case h >= 180 && h < 240:
      rgb = [0, x, c]
      break
    case h >= 240 && h < 300:
      rgb = [x, 0, c]
      break
    case h >= 300 && h < 360:
      rgb = [c, 0, x]
  }

  return rgb.map(color => Math.round(255 * (color + m)))
}
