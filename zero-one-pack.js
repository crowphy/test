
const WEIGHT = 10;
const values = [6, 4, 5, 3, 6];
const weights = [4, 5, 6, 2, 2];

function maxValue(W, value, weight) {
  
  const currentMax = [],
    num = values.length
  for (let i = 0; i <= W; i++) {
    currentMax[i] = [];
    for (let j = 0; j < num; j++) {

      if (weights[j] > i) {
        currentMax[i][j] = currentMax[i][j - 1] || 0;
        continue;
      }
      currentMax[i][j] = Math.max(values[j] + (currentMax[i - weights[j]][j - 1] || 0), currentMax[i][j - 1] || 0);
    }

  }
  return currentMax[W][num - 1]
}
console.log(maxValue(WEIGHT, values, weights))