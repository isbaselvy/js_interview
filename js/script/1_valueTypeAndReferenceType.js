/**
 * 值类型和引用类型的区别
 * 表现：
    如果一个值类型的变量a赋值给b,当b发生改变时，a不会改变，值类型的变量之间互不干扰。
    如果是引用类型，则当b的数据发手改变时，a会跟着改变
  本质：
    值类型的变量在栈中存的是key，value值，而引用类型在栈中存的的是key，指向变量的内存地址。
  why：
    为了节省空间和性能优化，将值类型和引用类型区分了出来，对于占用空间不大的划分为值类型，有可能是占用内存很大的数据，划分为引用类型
  常见值类型：undefined，string，number，bool，symbol
  常见引用类型：obj，array，
  null是特殊的引用类型，其指针指向空地址
  function：特殊引用类型，不用于存储数据，所以也无拷贝，复制函数一说
  */
// 值类型
let a = 100
let b = a
b = 200
console.log(a, b) // 100, 200
// 引用类型
let c = {
  age: 20
}
let d = c
d.age = 21
console.log(c) // {age: 21}

d = {
  number: 1
}
console.log(c) // {age: 21}
