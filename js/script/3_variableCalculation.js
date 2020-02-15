/**
 * 变量计算应用场景
 * 1.字符串拼接
 * 2.==和===： ==会先做类型转换，再来做比较， ===要求值和类型都相等
 * 3.if条件和逻辑运算
 */

// 1.字符串拼接
const a = 100 + '10' // 10010转成了字符串
const b = 100 + 10 // 110
const c = true + '10' // true10
console.log(a, b, c)

// 2.==和===
console.log(100 == '100') // true
console.log(0 == '') // true
console.log(0 == false) // true
console.log(false == '') // true
console.log(null == undefined) // true
// null == '' // false; '' == undefined // false
// 除了null用==之外，其余一律用===
const obj = {
  x: 100
}
if (obj.a == null) {
  // 相当于(obj.a === null || obj.a === undefined)
}

// 3.if条件和逻辑运算
// truely变量： !!a === true的变量 除falsely变量的以外都是truely变量
// falsely变量：!!a === false的变量： 0、NaN、''、null、undefined、false
