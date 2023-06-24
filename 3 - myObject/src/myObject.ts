interface StaicUser {
  name: string,
  email: string,
  isActive?: boolean,
  [propName: string]: any // 定义了任意属性，属性 key 类型为字符串
}

const User: StaicUser = {
  name: 'hero',
  email: 'hero@gamil.com',
  isActive: false
}

function createUser(obj: {name: string, isPaid: boolean}){ // 接收的对象必须有明确 类型定义
  console.log(obj)
}
createUser({ name: 'hero', isPaid: false})

function createCourse():{name: string, price: number} {
  return {name: 'hero', price: 99.89}
}