// 最大递增子序列
// 0： 0

const FOLDERS = [[7, 8], [3, 3], [5, 5], [3, 4], [5, 6], [2, 2], [4, 1]];

const maxContainer = () => {
    FOLDERS.sort((a, b) => a[0] - b[0]);
    // console.log(FOLDERS);
    const dp = [1, 1];
    const res = [[]];
    for (let i = 1; i < FOLDERS.length; i++) {
        dp[i] = 1;
        res[i] = [];
        for (let j = 0; j < i; j++) {
            if(FOLDERS[i][1] > FOLDERS[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                res[i].push(FOLDERS[j]);
            }
        }
        res[i].push(FOLDERS[i]);
    }
    for (const iterator of res) {
        console.log('-------');
        console.log(iterator);
        
    }
    // console.log(res);
    return  Math.max(...dp);
}
const len = maxContainer();
console.log(len);