let str = '12345678';
const regExp = /(\s)(?=(\s){3}?)/;
str.replace(regExp, function($0, $1) {
    console.log($0)
    console.log($1)
    return 'a' + $1 + 'bg'
})
console.log(str)