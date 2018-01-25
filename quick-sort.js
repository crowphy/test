
/**
 * 快速排序
 * 
 * @param {any} arr 
 */
function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let index = Math.round(arr.length/2)
  let q = arr.splice(index, 1)[0]
  let left = [],
      right = []
  for (let item of arr) {
    if (item < q) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  console.log(left, right)
  return quickSort(left).concat([q], quickSort(right))
}
const arr = [1, 5, 2, 4, 7, 3]
const res = quickSort(arr)
console.log(res)