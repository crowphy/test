
/**
 * 防抖动方法-改良
 * 间隔 delay 时间内的连续动作的只在第一次和最后一次执行
 * 第二次间隔小于 delay 则取消执行
 *  ctx 和 args 用来保留对绑定对象引用和传递的参数
 * @param {any} fn 
 * @param {number} [delay=300] 
 * @param {boolean} [immediate=true] 是否立即执行一次
 * @returns 
 */
function debounce(fn, delay = 300, immediate = true) {
  var timer, first = immediate, last;
  return function (...args) {
    var ctx = this;
    clearTimeout(timer);
    var now = +new Date();
    if (first) {
      fn.apply(ctx, args);
      first = false;
      // delay 时间之后恢复立即执行
      timer = setTimeout(() => {
        first = immediate;
      }, delay);
      last = +new Date();
    } else if (now - last < delay) {
      // 若第二次间隔小于 delay 则取消执行
      clearTimeout(timer);
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