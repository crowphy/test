
/**
 * 从一个不重复的数组中取出n个数，使其和为sum
 * 
 * @param {any} arr 
 * @param {any} n 
 * @param {any} sum 
 */
// 这个解法不对
// function getAddend(origin, num, total) {
  
//   var result = []
//   return (function getSum(arr, n, sum) {
//     if (n === 1) {
//       for (let i of arr) {
//         if (i === sum) {
//           result.push(i);
//           return result;
//         }
//       }
//       origin.shift();
//       result = [];
//       return getSum(origin, num, total);
//     }
//     var current = arr[0];
//     var rest = arr.slice(1);
//     result.push(current);
//     getSum(rest, n - 1, sum - current);
//     return result;
//   })(origin, num, total)
// }

function calNSum(array, result) {
  for (
    var i = 1;
    i < 1 << array.length;
    i++ //从1循环到2^N
  ) {
    var sum = 0;
    var temp = '';
    for (var j = 0; j < array.length; j++) {
      console.log('aj1:', array[j]);
      if ((i & (1 << j)) != 0) {
        console.log('aj2:', array[j]);
        //用i与2^j进行位与运算，若结果不为0,则表示第j位不为0,从数组中取出第j个数
        sum += array[j];
        temp += array[j] + '+';
      }
    }
    console.log('------');
    if (sum == result) {
      var t = temp.split('+');
      var p = [];
      for (var j = 0; j < t.length; j++) {
        if (t[j] != '') {
          p.push(t[j]);
        }
      }
      console.log(p);
    }
    // console.log(sum);
  }
}

var aa=[1,2,3,4,5];
var bb=10;
calNSum(aa,bb)

// var arr = [2, 3, 4, 5, 6, 8]
// var sum = 16
// var n = 3
// var res = calNSum(arr, n, sum)
// console.log(res);