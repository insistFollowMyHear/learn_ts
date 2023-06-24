"use strict";
// 基础类型
let str = 'Hello world !';
let num = 25;
let bool = true;
// any
let everyone = '213'; // 可以是任意类型
// everyone.func() // 浏览器会返回报错信息，阻断代码执行
// 数组
let money = ['一百万', '二百万', '三百万'];
let moreMoney = ['四百万', '五百万', '六百万'];
let keepBigger = [18, 26, 30];
let moreBigger = [36, 52, 60];
let isFat = [true, false];
let isFatter = [true, false];
// 元组 - 表示一个已知元素数量和类型的数组，各元素的类型不必相同
let tuple = ['love', 69, true, [6, 9], ['eat', 'kiss'], [true]];
// enum 枚举
var Direction;
(function (Direction) {
    Direction[Direction["FIRST"] = 0] = "FIRST";
    Direction[Direction["SECOND"] = 1] = "SECOND";
    Direction[Direction["THIRD"] = 2] = "THIRD";
    Direction[Direction["FOUTH"] = 3] = "FOUTH";
    Direction[Direction["FIVE"] = 4] = "FIVE";
})(Direction || (Direction = {}));
let dir = Direction.SECOND;
console.log(Direction);
