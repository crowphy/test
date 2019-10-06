// v8已不支持，目前仅有 Safari 支持（待验证）
// "use strict";
// // 情况一
// function f(x = 1) {
//   return g(x);
// }
// function g(a) {
//   return a + 1;
// }
// // 情况二
// // function f(x) {
// //   return g(x) + 1;
// // }
// f(2)

// function fibonacciLoop(n) {
//   var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
//   var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
//   while (n--) {
//     // [a, b] = [b, a + b]
//     var temp = a;
//     a = b;
//     b = temp + b;
//     console.log(a, b)
//   }
//   console.log(a)
//   return a
// }
// fibonacciLoop(6)
function factorial(n, total = 1) {
  // console.trace()
  if (n === 0) {
    return total
  }

  return factorial(n - 1, n + total)
}

const a = factorial(5000);
console.log(a);