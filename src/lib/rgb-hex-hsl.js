// 颜色标准转换

// rgb 转 hex
export const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
