function refreshRem() {
  var width = docEl.getBoundingClientRect().width
  if (width / dpr > 540) {
    width = 540 * dpr
  }
  var rem = width / 10
  docEl.style.fontSize = rem + "px"
  docEl.setAttribute("font-size", rem + "px")
  flexible.rem = win.rem = rem
}
