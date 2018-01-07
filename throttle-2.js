
/**
 * 节流阀方法-改良版
 * 没间隔 delay 时间执行一次
 * 第二次间隔小于 delay 则取消执行
 *  ctx 和 args 用来保留对绑定对象引用和传递的参数
 * @param {any} fn 
 * @param {number} [delay=300] 
 * @param {boolean} [immediate=true] 是否立即执行一次
 * @returns 
 */
function throttle(fn, delay = 300, immediate = true) {
  var timer, firstTimer, first = immediate, last;
  return function (...args) {
    var ctx = this;
    // 恢复立即执行
    var restore = () => first = immediate;
    clearTimeout(firstTimer);
    if (timer) return;
    if (first) {
      // 立即执行
      fn.apply(ctx, args);
      first = false;
      // delay 时间之后恢复立即执行
      firstTimer = setTimeout(restore, delay);
      last = +new Date();
    } else {
      timer = setTimeout(() => {
        console.log(321);
        timer = null;
        // delay 时间之后恢复立即执行
        firstTimer = setTimeout(restore, delay);
        fn.apply(ctx, args);
        last = +new Date();
      }, 0);
      // 两次事件间隔小于 delay 则取消执行
      if (+new Date() - last < delay) {
        clearTimeout(timer);
        timer = null;
      }
    }
  }
}