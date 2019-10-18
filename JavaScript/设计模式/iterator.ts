interface Iterator {
  next(): any
  first(): any
  isDone(): boolean
}

class ListIterator implements Iterator {
  protected list: Array<any> = []
  protected index: number = 0
  constructor(list) {
    this.list = list
  }
  first() {
    if (this.list.length) {
      return this.list[0]
    }
    return null
  }
  next(): any {
    if (this.index < this.list.length) {
      this.index += 1
      return this.list[this.index]
    }
  }
  isDone(): boolean {
    return this.index >= this.list.length
  }
}
class SkipIterator extends ListIterator {
  next(): any {
    if (this.index < this.list.length) {
      const nextIndex = this.index + 2
      if (nextIndex < this.list.length) {
        this.index = nextIndex
        return this.list[nextIndex]
      }
    }
    return null
  }
}
function iteratorDemo(): void {
  const list = [1, 2, 3, 4, 5, 6]

  const listIterator: Iterator = new ListIterator(list)
  while (!listIterator.isDone()) {
    const item: number = listIterator.next()
    console.log(item)
  }

  const skipIterator: Iterator = new SkipIterator(list)
  while (!skipIterator.isDone()) {
    const item: number = skipIterator.next()
    console.log(item)
  }
}
