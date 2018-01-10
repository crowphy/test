/* function hello() {
  console.log(arguments);
  // var args = Array.prototype.slice.call(arguments);
  var uslice = Array.prototype.slice;
  var slice = Function.prototype.apply.bind(uslice);
  console.log(slice);
  // var args = slice(arguments);
  var args = Function.prototype.apply(arguments)
  console.log(args);
}
hello(1, 2, 3)

 */
/**
 * bind的模拟实习
 * bind 特点：
 *  1.bind 的第一个参数作为绑定函数的 this 指向；
 *  2.bind 的第一个后面的参数作为作为绑定函数的参数置于绑定函数的前面；
 *  3.通过 new 调用时，this 绑定不生效，this 指向生成的实例而不是 bind 的第一个参数。
 * 重点：
 *  1.将方法挂载到Function.prototype上，以方便函数调用；
 *  2.通过arguments获取参数
 *  3.返回一个函数作为绑定的结果
 *  4.通过this instanceof boundFn判断是否通过 new 来调用
 *  5.将被返回函数的的原型指向原方法原型的拷贝
 * @param {any} params 
 */

Function.prototype.myBind = function(ctx) {
  
  // this 即为被绑定的函数
  var fn = this;
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1);
  
  var boundFn = function() {
    var isCallByNew = this instanceof boundFn;
    args = args.concat(slice.call(arguments));
    fn.apply(isCallByNew ? this : ctx, args)
  }
  boundFn.prototype = Object.create(this.prototype);
  
  return boundFn;
}

var obj = {
  a: 1
}
var a = 2;
function test(num, name) {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments);
  this.name = name;
  console.log(args);
  // console.log(this.a);
}
test.prototype.b = 3;
var bt = test.myBind(obj, 1);
// bt(2)
var o = new bt('cr');
console.log(o.name, o.b);

