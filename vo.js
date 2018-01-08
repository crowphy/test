// (function() {
//     var a;
//     console.log(a);
//     a = 1;
// })()
// var b;
// console.log(b);
// b = 1;

// var name = 'global'
// var obj = {
//     name: 'local',
//     getName() {
//         var self = this
//         return function() {
//             return `${self.name}-${this.name}`
//         }
//     }
// }
// var getName = obj.getName()
// var _name = getName()
// console.log(_name)

(function () {

    console.log(typeof foo); // 函数指针
    console.log(typeof bar); // undefined
    function bar() {
        return 'bar';
    }
    var foo = 'hello',
        bar = function () {
            return 'world';
        };
    console.log(bar);
    function foo() {
        return 'hello';
    }

}())