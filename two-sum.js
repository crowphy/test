// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   var result = [];

//   var times = 0;
//   var origin = nums.slice(0);
//   return (function two(nums, target) {
//     times++;
//     var current = nums.shift();
//     var matched = target - current;
//     // console.log(current, nums);
//     for (let i of nums) {
//       if (i === matched) {
//         result[0] = origin.indexOf(current);
//         result[1] = nums.indexOf(matched) + times;
//         console.log(result);
//         return result;
//       }
//     }
//     return two(nums, target);
//   })(nums, target)
// };
var twoSum = function (nums, target) {

  for (var i = 0; i < nums.length; i++) {
    var complete = target - nums[i];
    var rest = nums.slice(i + 1);
    var index = rest.indexOf(complete);
    if (index > -1) {
      return [i, index + i + 1];
    }
  }
};
var arr = [3, 2, 5, 6]
var target = 9;
twoSum(arr, target);