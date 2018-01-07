
/**
 * 防抖动方法
 * 间隔 delay 时间内的连续动作的只在第一次和最后一次执行
 *  ctx 和 args 用来保留对绑定对象引用和传递的参数
 * @param {any} fn 
 * @param {number} [delay=300] 
 * @param {boolean} [immediate=true] 是否立即执行一次
 * @returns 
 */
function debounce(fn, delay = 300, immediate = true) {
  var timer, first = immediate, last;
  return function(...args) {
    var ctx = this;
    clearTimeout(timer);
    if (first) {
      fn.apply(ctx, args);
      first = false;
      // delay 时间之后恢复立即执行
      timer = setTimeout(() => {
        first = immediate;
      }, delay);
    } else {
      timer = setTimeout(() => {
        first = immediate;
        fn.apply(ctx, args);
      }, delay)
    }
  }
}