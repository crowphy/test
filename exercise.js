const arr = [3, 45, 6, 34, 88, 1, 0, -1];
function qs(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let flag = arr.shift();
    let left = [];
    let right = [];
    for (const num of arr) {
        if(num < flag) {
            left.push(num);
        } else {
            right.push(num);
        }
    }
    return qs(left).concat(flag).concat(qs(right));
}

console.log(qs(arr));;