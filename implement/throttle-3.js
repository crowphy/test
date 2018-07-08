
function throttle(fn, delay) {
  
  var timer = null
  return function() {
    if(timer) {
      return
    }
    var args = Array.prototype.slice(arguments)
    fn.apply(this, args)
    timer = setTimeout(function() {
      timer = null
    }, delay)
  }
}