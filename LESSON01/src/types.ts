// 基础类型
let str: string = 'Hello world !'
let num: number = 25
let bool: boolean = true

// any
let everyone: any = '213' // 可以是任意类型
// everyone.func() // 浏览器会返回报错信息，阻断代码执行

// 数组
let money: string[] = ['一百万', '二百万', '三百万']
let moreMoney: Array<string> = ['四百万', '五百万', '六百万']

let keepBigger: number[] = [18, 26, 30]
let moreBigger: Array<number> = [36, 52, 60]

let isFat: boolean[] = [true, false]
let isFatter: Array<boolean> = [true, false]

// 元组 - 表示一个已知元素数量和类型的数组，各元素的类型不必相同
let tuple: [string, number, boolean, number[], string[], boolean[]] = ['love', 69, true, [6, 9], ['eat', 'kiss'], [true]]

// enum 枚举
enum Direction {
    FIRST,
    SECOND,
    THIRD,
    FOUTH,
    FIVE
}
let dir: Direction = Direction.SECOND
console.log(Direction);
