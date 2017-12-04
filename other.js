// var f = function(a) {console.log(a)}; // 一定需要分号
// (function() {
//   if(true) {
//     f = function() { console.log(2) }
//   }
// })()
// // f()
// var pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
// 等价下面的写法
var p = function (...funcs) {
  return function(val) {
    return funcs.reduce(function(a, b) {
      return b(a)
    }, val)
  }
}
// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// const addThenMult = p(plus1, mult2);

// addThenMult(5)