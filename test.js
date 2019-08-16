function uaParser(ua, vs) {
  if (typeof ua !== "string" || !ua.length) return
  const versions = version.split(".")
  const obj = { language: ", version: ", system: "", moreThan: false }
  const language = ua.match(/(?=language\/)/i)
  if (language) {
    obj.language = ua.slice(language.index + 9)
  }
  const version = ua.match(/com\.xiaomi\.hm\.health\/[\d\.\_]{1,}\s/i)[0]
  if (version) {
    obj.version = ua
      .match(/com\.xiaomi\.hm\.health\/[\d\.\_]{1,}/i)[0]
      .split("/")[1]
    const vss = obj.version.split(".").map(i => {
      if (i.match(/_/)) {
        const major = i.split("_")
        return major
      }
      return i
    })
    if (Array.isArray(vss[0]) && +vss[0][0] > +versions[0]) {
      obj.moreThan = true
    }
  }
  if (ua.match(/android/i)) {
    obj.system = "Android"
  } else if (ua.match(/mac/i)) {
    obj.system = "OSX"
  } else if (ua.match(/iphone|ipad/i)) {
    obj.system = "IOS"
  } else if (ua.match(/window/i)) {
    obj.system = "Window"
  } else if (ua.match(/Linux/i)) {
    obj.system = "Linux"
  } else {
    obj.system = "Other"
  }
  return obj
}

const ua =
  "Mozilla/5.0 (Linux; Android 4.4.4; vivo Xplay Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 com.xiaomi.hm.health/32_2.3.6 NetType/WIFI Language/zh_CN"
console.log(uaParser(ua))
