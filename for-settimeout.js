/* 
 * 一道面试题 
 */
// 题目
/* for(var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000)
} */
// 方法1：使用let形成块级作用域
/* for(let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000)
} */

// 方法2：闭包，借助闭包为每次循环形成一个单独的作用域以保存变量
/* for(var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() {
    console.log(i)
  }, 1000)
  })(i)
} */

// 方法3：settimeout 内部闭包，注意：不要将参数传入 return 的函数中，否则，这样无法形成闭包
/* for(var i = 0; i < 3; i++) {
  setTimeout((function(i) {
    return function () {
      console.log(i)
    }
  })(i), 1000)
} */

// 方法4：bind
/* for(var i = 0; i < 3; i++) {
  setTimeout(function(i) {
     console.log(i)
  }.bind(null, i), 1000)
} */

// 方法5：借助外层函数保存变量
/* function output(i) {
  setTimeout(function() {
    console.log(i)
  }, 1000)
}
for(var i = 0; i < 3; i++) {
  output(i)
} */
