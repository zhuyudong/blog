/**
 * 职责链模式
 */
interface RequestData {
  name: string
  increaseNum: number
}

// 抽象处理者
abstract class Handler {
  protected next: Handler
  setNext(next: Handler) {
    this.next = next
  }
  abstract processRequest(request: RequestData): void
}
class IdentityValidator extends Handler {
  processRequest(request: RequestData) {
    if (request.name === "xxx") {
      this.next.processRequest(request)
    } else {
      console.log("abort")
    }
  }
}
class Manager extends Handler {
  processRequest(request: RequestData) {
    if (request.increaseNum < 300) {
      console.log("manager agree")
    } else {
      this.next.processRequest(request)
    }
  }
}
class Boss extends Handler {
  processRequest(request: RequestData) {
    console.log("boss agree")
  }
}
function chainOfResponsibilityDemo() {
  const identityValidator = new IdentityValidator()
  const manager = new Manager()
  const boss = new Boss()
  // 设置职责链
  identityValidator.setNext(manager)
  manager.setNext(boss)
  const request: RequestData = {
    name: "xxx",
    increaseNum: 500
  }
  identityValidator.processRequest(request)
}
chainOfResponsibilityDemo()
