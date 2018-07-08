function throttle(fn, delay) {
  var timer = null;
    return function () {
      if (timer) {
        return;
      }
      var args = Array.prototype.slice(arguments);
      console.log("args", args)
      fn.apply(this, args)
      timer = setTimeout(function () {
        timer = null;
      }, delay)
    }
}
function fn(a){
  console.log("a", arguments);
}
throttle(fn, 300)(111, 222);
