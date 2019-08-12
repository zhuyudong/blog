"use strict"

jest.useFakeTimers()

test("waits 1 second before ending the game", () => {
  const timeGame = require("../timerGame")
  timeGame()

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)

  /*
  const callback = jest.fn()
  timeGame(callback)
  expect(callback).not.toBeCalled()
  jest.runAllTimers()
  expect(callback).toBeCalled()
  expect(setTimeout).toHaveBeenCalledTimes(1)
  //*/
})
