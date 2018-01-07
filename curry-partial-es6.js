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
var partial =(fn, ...rest) => 
  parted = (...args) =>
    fn.length > args.length + rest.length
      ? (arg) => parted(...args, arg)
      : fn(...rest.concat(args));
      
function fn1(a, b, c) {
  return a + b + c;
}

var partialFn1 = partial(fn1, 1);

partialFn1(2)(3);