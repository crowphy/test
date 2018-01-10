
function curry(fn) {
  var argsLength = fn.length;
  var args = [];
  var curried = function() {
    args = args.concat(Array.prototype.slice.call(arguments));
    argsLength--;
    var result = argsLength > 0 ? curried : fn.apply(this, args);
    return result;
  }
  return curried;
}

function fn1(a, b, c) {
  return a + b + c;
}

var curryFn1 = curry(fn1);

curryFn1(1)(2)(3);