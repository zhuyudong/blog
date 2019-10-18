// 主意
class Idea {}
// 需求
class Requirement {}
// 开发包
class Development {}
// 发布包
class Release {}

// 产品经理
class PD {
  analyze(idea: Idea) {
    console.log("PD 开始需求")
    return new Requirement()
  }
}

// 开发者
class Developer {
  develop(requirement: Requirement) {
    console.log("程序员开始开发")
    return new Development()
  }
}

// 测试者
class Tester {
  test(develop: Development) {
    return new Release()
  }
}

// 外观方法，领导不需要关注具体的开发流程，只要说出自己的想法即可
// 而不用外观方法的话，也可以访问到子系统，只是需要了解其中的细节
function addNewFunction(idea: Idea) {
  const pd = new PD()
  const developer = new Developer()
  const tester = new Tester()
  const requirement = pd.analyze(idea)
  const development = developer.develop(requirement)
  const release = tester.test(development)
  console.log("发布")
}

// 领导
class Leader {
  haveAGoodIdea() {
    const idea = new Idea()
    addNewFunction(idea)
  }
}

function facade() {
  const leader = new Leader()
  leader.haveAGoodIdea()
}
facade()
