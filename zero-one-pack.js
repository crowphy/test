
const WEIGHT = 10;
const value = [6, 4, 5, 3, 6];
const weight = [4, 5, 6, 2, 2];

function maxValue(weightLimit, values, weights) {
  
  const currentMax = [],
    num = values.length
  for (let i = 0; i <= weightLimit; i++) {
    // 限重i情况下
    currentMax[i] = [];
    for (let j = 0; j < num; j++) {
      // 如果第j个的重量大于限重i，返回上一次的最大值
      if (weights[j] > i) {
        currentMax[i][j] = currentMax[i][j - 1] || 0;
        continue;
      }
      // 
      currentMax[i][j] = Math.max(values[j] + (currentMax[i - weights[j]][j - 1] || 0), currentMax[i][j - 1] || 0);
    }

  }
  return currentMax[weightLimit][num - 1]
}
console.log(maxValue(WEIGHT, value, weight))