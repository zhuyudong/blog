/**
 * 命令模式
 */
class Command {
  execute(arg?): void {}
}
// 厨师
class Cook {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
  // 制作面包
  makeBread() {
    console.log(`${this.name} make bread done`)
  }
  // 制作肉
  makeMeal() {
    console.log(`${this.name} make meal done`)
  }
}
// 接收者
class SimpleCommand extends Command {
  receiver: Cook
}
// 制作面包
class BreadCommand extends SimpleCommand {
  constructor(cook: Cook) {
    super()
    console.log(`initial BreadCommand, cooker: ${cook.getName()}`)
    this.receiver = cook
  }
  execute() {
    console.log(`cooker ${this.receiver.getName()} begin make bread`)
    this.receiver.makeBread()
  }
}
// 制作肉
class MealCommand extends SimpleCommand {
  constructor(cook: Cook) {
    super()
    console.log(`initial MealCommand, cooker: ${cook.getName()}`)
    this.receiver = cook
  }
  execute() {
    console.log(`cooker ${this.receiver.getName()} begin make meal`)
    this.receiver.makeMeal()
  }
}
function simpleCommand(): void {
  const cook1 = new Cook("cook1")
  const cook2 = new Cook("cook2")

  const breadCommand = new BreadCommand(cook1)
  const mealCommand = new MealCommand(cook2)

  breadCommand.execute()
  mealCommand.execute()
}
simpleCommand()
