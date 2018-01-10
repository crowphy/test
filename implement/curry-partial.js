/**
 * 柯里化和偏函数应用
 * 核心是使用闭包保存每次调用传入的参数，
 * 每次调用时将参数的个数与原函数的长度比较，
 * 小于则返回parted继续收集余下参数，
 * 等于则执行原函数，
 * 没有大于的情况
 * 
 * @param {any} fn 
 * @returns 
 */
function partial(fn) {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1) || [];
  var fnLength = fn.length;
  var parted = function () {
    args = args.concat(slice.call(arguments));
    var result = fnLength > args.length ? parted : fn.apply(this, args);
    return result;
  }
  return parted;
}

function fn1(a, b, c) {
  console.log(a, b, c);
  return a + b + c;
}

var partialFn1 = partial(fn1, 1);

partialFn1(2)(3);