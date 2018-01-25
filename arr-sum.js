
/**
 * 从一个不重复的数组中取出n个数，使其和为sum
 * 
 * @param {any} arr 
 * @param {any} n 
 * @param {any} sum 
 */
function getAddend(origin, num, total) {
  
  var result = []
  return (function getSum(arr, n, sum) {
    if (n === 1) {
      for (let i of arr) {
        if (i === sum) {
          result.push(i);
          return result;
        }
      }
      origin.shift();
      result = [];
      return getSum(origin, num, total);
    }
    var current = arr[0];
    var rest = arr.slice(1);
    result.push(current);
    getSum(rest, n - 1, sum - current);
    return result;
  })(origin, num, total)
}

var arr = [2, 3, 5, 6, 7, 8]
var sum = 16
var n = 3
getAddend(arr, n, sum)