// var foo = {
//   bar: function() {
//     console.log(this.baz)
//   },
//   baz: 1
// };
// foo.bar();
// (function a() {
//   console.log(123)
//   foo.bar()
// })()

// var a = 123
// setTimeout(function() {
//   console.log(a)
//   a = 213
// })
// a = 321

function foo() {
  console.log(a) 
}
function bar() {
  var a = 3;
  console.log(a);
  foo() 
}
var a = 2
bar()