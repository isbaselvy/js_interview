/**
 * typeof能判断哪些类型
 *  1.所有值类型
 *  2.函数
 *  3.判断是不是引用类型（不可再细分）
 * 手写深拷贝：递归调用
 */

// 判断所有值类型
console.log(typeof undefined) // undefined
console.log(typeof 'string') // string
console.log(typeof true) // boolean
console.log(typeof 1) // number
console.log(typeof Symbol('s')) // symbol
// 判断函数
console.log(typeof console.log) // function
function fn() {}
console.log(typeof fn) // function
// 判断是否是引用类型
console.log(typeof {
  a: 1
}) // object
console.log(typeof [1, 2]) // object

// 手写深拷贝
let obj1 = {
  age: 20,
  sex: 'x',
  name: 'xxx',
  addr: {
    city: 'beijing'
  },
  arr: ['a1', 'b1', 'c1'],
  say: function () {
    console.log('hello')
  }
}

// let obj2 = obj1
// obj2.addr.city = 'shanghai'
// console.log(obj1.addr.city) // shanghai

// obj2.arr[0] = 'a2'
// console.log(obj1.arr) // ['a2', 'b1', 'c1']

// let obj2 = deepClone(obj1)
let obj2 = deepCloneByObjcreate(obj1, {})
obj2.addr.city = 'shanghai'
console.log(obj1.addr.city) // beijing

obj2.arr[0] = 'a2'
console.log('obj1', obj1) // ['a1', 'b1', 'c1']
console.log('obj2', obj2)

/**
 * 描述 实现深拷贝
 * @date 2020-02-15
 * @param {any} obj={}
 * @returns {any}
 */
function deepCloneByLoop(obj = {}) {
  // 先判断是不是引用类型
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 初始化result
  let result = obj instanceof Array ? [] : {}

  // 递归实现深拷贝
  for (const key in obj) {
    // 排除key不是原型上的
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCloneByLoop(obj[key])
    }
  }

  // 返回结果
  return result
}

/**
 * 深拷贝优化：优化出现循环引用的时候会报错Uncaught RangeError: Maximum call stack size exceeded
 * @param {*} [obj={}] 要拷贝的对象
 * @param {*} [hash=new WeakMap()] 哈希表存储已拷贝过的对象
 * @returns
 */
function deepCloneOptimization(obj = {}, hash = new WeakMap()) {
  if (typeof obj !== 'object' || obj == null) {
    // 不是引用类型或者null，直接返回
    return obj
  }
  if (hash.has(obj)) return hash.get(obj)
  // 初始化返回结果
  let result = obj instanceof Array ? [] : {}
  hash.set(obj, result)
  // 数组和对象都可以使用for in遍历
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 保证key不是原型上的key
      const element = obj[key]
      // 递归调用
      result[key] = deepCloneOptimization(element, hash)
    }
  }
  return result
}

/**
 * 描述:JSON.stringify实现深拷贝
 * 缺点：对于方法无法实现深拷贝
 * @date 2020-02-15
 * @param {any} obj={}
 * @returns {any}
 */
function deepCloneByJsonstringfy(obj = {}) {
  // 判断类型处理
  let _obj = JSON.stringify(obj)
  let objClone = JSON.parse(_obj)
  return objClone
}

/**
 * 描述:通过object.create来实现深拷贝，缺点：数组无法实现拷贝
 * @date 2020-02-15
 * @param {any} initalObj
 * @param {any} finalObj
 * @returns {any}
 */
function deepCloneByObjcreate(initalObj, finalObj) {
  var obj = finalObj || {}
  for (var i in initalObj) {
    var prop = initalObj[i] // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === obj) {
      continue
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop)
    } else {
      obj[i] = prop
    }
  }
  return obj
}