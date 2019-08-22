/* 1
function priceCalculate(discountType, price) {
  if (discountType === "minus100_30") {
    return price - Math.floor(price / 100) * 30
  } else if (discountType === "minus100_80") {
    return price - Math.floor(price / 100) * 80
  } else {
    return price * 0.8
  }
}
console.log(priceCalculate("minus100_30", 100))
console.log(priceCalculate("minus100_80", 200))
//*/

/* 2
const DiscountMap = {
  minus100_30(price) {
    return price - Math.floor(price / 100) * 30
  },
  minus100_80(price) {
    return price - Math.floor(price / 100) * 80
  },
  percent80(price) {
    return price * 0.8
  }
  // 新的计价策略
}
function priceCalculate(discountType, price) {
  return DiscountMap[discountType] && DiscountMap[discountType](price)
}
console.log(priceCalculate("minus100_30", 100))
console.log(priceCalculate("minus100_80", 200))
//*/

/* 3 利用闭包存储新的计价策略
// 隐藏计价策略
const PriceCalculate = (function() {
  const DiscountMap = {
    minus100_30(price) {
      return price - Math.floor(price / 100) * 30
    },
    minus100_80(price) {
      return price - Math.floor(price / 100) * 80
    },
    percent80(price) {
      return price * 0.8
    }
    // 新的计价策略
  }
  return {
    priceCal(discountType, price) {
      return DiscountMap[discountType] && DiscountMap[discountType](price)
    },
    addStragegy(discountType, fn) {
      if (DiscountMap[discountType]) {
        return DiscountMap[discountType]
      }
      return (DiscountMap[discountType] = fn)
    }
  }
})()
console.log(PriceCalculate.priceCal("minus100_30", 270))
PriceCalculate.addStragegy("minus150_40", function(price) {
  return price - Math.floor(price / 150) * 40
})
console.log(PriceCalculate.priceCal("minus150_40", 270))
//*/

///* 4 通用策略模式
const StragegyMap = {}
function context(type, ...rest) {
  return StragegyMap[type] && StragegyMap[type](...rest)
}
StragegyMap.minus100_30 = function(price) {
  return price - Math.floor(price / 100) * 30
}
console.log(context("minus100_30", 270))
//*/
