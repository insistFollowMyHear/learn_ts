// 规定形参接收的类型
function signUpUser(name: string, email: string, isPaid: boolean = false) {}

// 只能返回数字
function addTwo(num: number): number {
   return num + 2
}

// 只能返回布尔值
function myValue(val: number): boolean {
  if (val > 5) {
    return true
  }
  return false
}

// 箭头函数，规定只能返回字符串
const getHello = (s: string):string => {
  return ''
}

// 数组循环规定每个元素都是字符串 / 数字，返回值只能是字符串
const heros = ['thor', 'spiderman', 'ironman', 1]
heros.map((hero: string | number): string => {
  console.log(hero);
  return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
  console.log(errmsg)
}

function handleError(errmsg: string): never {
  throw new Error(errmsg)
}

function heroName(hero: string, sex?: string): void {
  console.log(hero + sex)
}