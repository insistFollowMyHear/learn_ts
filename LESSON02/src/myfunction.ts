function addTwo(num: number): number {
   return num + 2
  //  return '123'
}

function signUpUser(name: string, email: string, isPaid: boolean = false) {}

// function myValue(val: number): boolean {
//   if (val > 5) {
//     return true
//   }
//   return "200 OK"
// }

const getHello = (s: string):string => {
  return ''
}

const heros = ['thor', 'spiderman', 'ironman']
// const heros = [1, 'spiderman', 'ironman']

// heros.map((hero: string) => {    // on error
heros.map((hero: string): string => {
  return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
  console.log(errmsg)
}
function handleError(errmsg: string): never {
  throw new Error(errmsg)
}

addTwo(5)
signUpUser('1', '2')


function heroName(hero: string, sex?: string): void {
  console.log(hero + sex)
}

heroName('spiderman')
