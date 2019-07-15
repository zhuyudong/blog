class EventEmmit {
  constructor() {
    this.subs = {}
  }

  on(event, handler) {
    ;(this.subs[event] || (this.subs[event] = [])).push(handler)
  }

  trigge(event, ...args) {
    this.subs[event] &&
      this.subs[event].forEach(cb => {
        cb(...args)
      })
  }

  once(event, onceHandler) {
    const cb = (...args) => {
      onceHandler(...args)
      this.off(event, onceHandler)
    }
    this.on(event, cb)
  }

  off(event, handler) {
    if (this.subs[event]) {
      const index = this.subs[events].findIndex(i => i === handler)
      this.subs[event].splice(index, 1)
      if (this.subs[event].length) delete this.subs[event]
    }
  }
}
