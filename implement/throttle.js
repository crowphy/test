
/**
 * 节流阀方法
 * 每间隔 delay 时间执行一次
 *  ctx 和 args 用来保留对绑定对象引用和传递的参数
 * @param {any} fn 
 * @param {number} [delay=300] 
 * @param {boolean} [immediate=true] 是否立即执行一次
 * @returns 
 */
function throttle(fn, delay = 300, immediate = true) {
  var timer, firstTimer, first = immediate;
  return function (...args) {
    var ctx = this;
    var now = +new Date();
    // clearTimeout(firstTimer);
    if(timer) return;
    if (first) {
      // 立即执行
      fn.apply(ctx, args);
      first = false;
      timer = true;
      var last = +new Date();
      // delay 时间之后恢复立即执行
      firstTimer = setTimeout(() => {
        first = immediate;
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(ctx, args);
      }, delay - (now - last));
    }
  }
}