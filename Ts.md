# **基础命令**

- 安装 TypeScript ：`npm i typescript -g`

- 安装 tsc：`npx tsc`

- 初始化（typescript.json 文件）：`tsc -- init`

- 开启监听模式：` tsc -w `（--watch 简写）

  > TypeScript 编译器会监视指定的 TypeScript 文件或整个项目， 并在文件发生更改时自动重新编译

- 监听：`tsc --noEmitOnError -w` 

  > TypeScript 编译器会在监视模式下运行，并在文件发生更改时自动重新编译。同时，如果在编译过程中出现任何错误，不会生成任何输出文件



# **TypeScript.json 配置说明**

> **compilerOptions**：这是一个对象，包含了 TypeScript 编译器的配置选项，**以下是其 key 名**
>
> - target：指定编译后的 JavaScript 代码所支持的 ECMAScript 版本。
> - outDir：指定编译输出目录。
> - noEmitOnError：用于控制在发生编译错误时是否生成输出文件。
> - module：指定生成的 JavaScript 模块的模块系统（例如：CommonJS、ESM）。
> - rootDir：指定要编译的根目录。
> - strict：启用严格的类型检查。
> - esModuleInterop：启用对 ES 模块的互操作性支持。
> - sourceMap：生成源映射文件，方便调试 TypeScript 代码。
> - declaration：生成声明文件（.d.ts 文件），用于类型检查和模块导入。
> - noImplicitAny：禁止隐式的 any 类型。
> - strictNullChecks：启用对 null 和 undefined 的严格检查。
> - 其他选项：还有许多其他的配置选项，可以根据项目的需要进行调整。

> **include**：用于指定要包含在编译中的文件或目录模式
> 当 TypeScript 编译器执行编译时, 它将**根据 include 字段中指定的模式来确定要包含在编译中的文件**



# 基础类型

> 字符串：string 
>
> 数字：number
>
> 布尔值：boolean

> 数组：
>
> ```ts
> let money: string[] = ['一百万', '二百万', '三百万']
> let moreMoney: Array<string> = ['四百万', '五百万', '六百万']
> 
> let keepBigger: number[] = [18, 26, 30]
> let moreBigger: Array<number> = [36, 52, 60]
> 
> let isFat: boolean[] = [true, false]
> let isFatter: Array<boolean> = [true, false]
> ```

> any 尽量少用
>
> - 可以被赋值任意类型，用于描述一个我们根本不知道类型的变量
>
> - 会导致对象内的值在后续赋值时，属性类型都变成any
>
>   ```ts
>   let family: any = { sister: 123 } // 不加 any 默认为 数字
>   family.sister = '大魅力' // any
>   ```
>
> - 使用不存在的属性和方法编辑器不报错，但浏览器会返回报错信息
>
>   ```ts
>   const notSure:any = 'sister'
>   noSure.fun() -- no error
>   ```



# Interface 和 Type

> 接口：interface
>
> 类型别名：type
>
> -  type 运算的本质就是类型别名，将 number 这个基本类型别名为 Second ，但是实际 Second 还是 number 类型
>
>   ```ts
>   type Second = number
>   let counterInNumber: number = 18
>   let counter: Second = 18
>   ```
>
>   

> 区别：
>
> - 接口是通过继承的方式来扩展，类型别名是通过 & 来扩展
>
>   ```ts
>   interface Animal { name: string }
>   interface Bear extends Animal { ages: number }
>   
>   type Animal = { name: string }
>   type Bear = Animal & { ages: number }
>   ```
>
> - 接口可以自动合并，而类型别名不行
>
>   ```ts
>   interface Person { name: string }
>   interface Person { age: number }
>   
>   type Person = { name: string }
>   type Person = { age: number } // 不允许
>   ```



<b style='color: red'></b>

<b style='color: orange'></b>

<b style='color: red'></b>