// 1 1 2 3 5 8

// 递归容易堆栈溢出
function fab1(n) { 
    if (n < 2) return 1;
    return fab1(n - 1) + fab1(n - 2);
}

// 迭代
function fab2(n) {

    const cache = {
        0: 1,
        1: 1
    }
    
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
}
console.time('递归耗时');
const result1 = fab1(40);
console.log('result1:', result1);
console.timeEnd('递归耗时');

console.time('迭代耗时');
const result2 = fab2(40);
console.log('result2:', result2);
console.timeEnd('迭代耗时');

