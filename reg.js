var str = '5678320034';
// var regExp = /\d{1,3}(?=(\d{3})+$)/g;
var regExp = /(\d{3})+/
console.log(regExp.test(str))
var res = str.replace(regExp, function(match, p1, p2, p3) {
    console.log(match)
    // console.log(p1)
    console.log(p2)
    console.log(p1)
    return match + ','
})
console.log(res)