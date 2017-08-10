
Array.prototype.uniq = function() {
    var temp = {}, res = [], arr = this;
    for(var i of arr) {
        if(!temp[i]) {
            temp[i] = true;
            res.push(i)
        }
    }
    return res;
}
var arr = [1, '2', 2, 3, 5, 5];

console.log(arr.uniq())