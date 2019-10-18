import nestedProperty from "./nested-property"

var object = {
  a: {
    b: {
      c: {
        d: 5
      }
    }
  }
}

test("测试对象", () => {
  expect(nestedProperty.get(object, "a")).toEqual(object.a)
  expect(nestedProperty.get(object, "a.b.c")).toEqaul(object.a.b.c)
  expect(nestedProperty.get(object, "a.b.c.d")).toEqaul(5)
  expect(nestedProperty.get(object, "a.d.c")).toUndefined()
  expect(nestedProperty.get(object)).toEqaul(object)
  expect(nestedProperty.get(null)).toNull(null)
})

var array = [
  {
    a: {
      b: [0, 1]
    }
  }
]

test("测试数组", () => {
  expect(nestedProperty.get(array, "0")).toEqaul(array[0])
  expect(nestedProperty.get(array, "0.a.b")).toEqaul(array[0].a.b)
  expect(nestedProperty.get(array, "0.a.b.0")).toEqaul(0)
  expect(nestedProperty.get(array, "1.a.b.c")).toUndefined()
})
