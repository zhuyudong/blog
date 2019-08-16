/**
 * 备忘录模式
 */

/**
 * example1 一个角色在画布中移动
 */
// 备忘录：存储原发器的内部状态，根据原发器来决定来保存哪些内部状态
class Memento {
  private x: number
  private y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  getX(): number {
    return this.x
  }
  getY(): number {
    return this.y
  }
}
// 原发器
class Role {
  private x: number
  private y: number
  constructor(name: string, x: number, y: number) {
    this.x = x
    this.y = y
  }
  moveTo(x: number, y: number): Memento {
    this.x = x
    this.y = y
    return this.save()
  }
  save(): Memento {
    return new Memento(this.x, this.y)
  }
  goBack(memento: Memento) {
    this.x = memento.getX()
    this.y = memento.getY()
  }
}
// 负责人（CareTaker）：保存备忘录，但是不能对备忘录内部状态进行检查和操作
class HistoryRecords {
  private records = []
  add(record: Memento): void {
    this.records.push(record)
  }
  get(index: number): Memento {
    if (this.records[index]) {
      return this.records[index]
    }
    return null
  }
  cleanRecordsAfter(index: number): void {
    this.records.slice(0, index + 1)
  }
}

function mementoDemo() {
  const role = new Role("sprite", 0, 0)
  const records = new HistoryRecords()
  // 记录初始状态
  records.add(role.save())
  // 移动
  records.add(role.save())
  role.moveTo(20, 30)
  records.add(role.save())
  // 回退
  const GO_BACK_STEP = 0
  const firstMemento = records.get(GO_BACK_STEP)
  role.goBack(firstMemento)
  // 清除后面的记录
  records.cleanRecordsAfter(GO_BACK_STEP)
}
