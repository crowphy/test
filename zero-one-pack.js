
const LIMIT = 4;
const VALUES = [6, 4, 5, 3, 6];
const WEIGHTS = [4, 5, 6, 2, 2];

function maxValue(limit, values, weights) {
  
  const curMax = [];
  const num = values.length;
  for (let i = 0; i <= limit; i++) {
    curMax[i] = [];
    console.log('-------')
    for (let j = 0; j < num; j++) {
      // 第j个的重量超过限重i
      console.log(weights[j], i)
      if (weights[j] > i) {
        curMax[i][j] = curMax[i][j - 1] || 0;
        console.log('v', curMax[i][j])
        continue;
      }
      curMax[i][j] = Math.max(values[j] + (curMax[i - weights[j]][j - 1] || 0), curMax[i][j - 1] || 0);
    }

  }
  return curMax[limit][num - 1]
}
console.log(maxValue(LIMIT, VALUES, WEIGHTS))
