function hexToRGB(hex) {
  var hexx = hex.replace("#", "0x")
  var r = hexx >> 16
  var g = (hexx >> 8) & 0xff
  var b = hexx & 0xff
  return `rgb(${r}, ${g}, ${b})`
}

function RGBToHex(rgb) {
  var rgbArr = rgb.split(/[^\d]+/)
  var color = (rgbArr[1] << 16) | (rgbArr[2] << 8) | rgbArr[3]
  return `#${color.toString(16)}`
}
