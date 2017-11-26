/* var str = '5678320034.45434';
var regExp = /\d{1,3}(?=(\d{3})+(?:\.\d+)?$)/g;
var res = str.replace(regExp, function(match, p1, p2, p3) {
    return match + ','
})
console.log(res) */

var pattern = /\w(at)?/
var str = 'cat,hat'
var r1 = pattern.exec(str)
var r2 = str.match(pattern)
console.log(r1)
console.log(r2)