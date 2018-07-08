function partial(fn) {
  
  var args = Array.prototype.slice.call(arguments, 1) || [];
  var parted = function () {
    args = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(this, args);
  }
  return parted;
}

function fn1(a, b, c) {
  return a + b + c;
}

var partialFn1 = partial(fn1, 1);

partialFn1(2, 3);