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
