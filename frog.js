// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法.

// 1: 1,
// 2: 2,
// 3:3,
// 4: 5
// f(n) = f(n-1) + f(n-2)

// 1111
// 112
// 121
// 211
// 22

const frogJump = (n) => {

    const res = {
        1: 1,
        2: 2
    };
    for (let index = 3; index <= n; index++) {
        res[index] = (res[index - 1] + res[index - 2]) % 1000000007;
    }
    return res[n];
}

var numWays = function(n) {
    var a = 1, b = 1, sum;
    for(var i = 0; i < n; i++){
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return a;
};

const n = 78;
console.log(frogJump(n));
console.log(numWays(n));