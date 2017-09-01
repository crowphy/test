/*var timer = setTimeout(function() {
    console.log('1');
}, 0);
console.log(2);*/

/*for(let i = 0; i < 7; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000)
    })(i)
}*/
/*var p = 9;
for(var i = 0; i < 3; i++) {
    // var p = 9;
    setTimeout((function(i) {
        var p = 9;
        // console.log('outer', this);
        return function() {
            console.log(p);
            // console.log('inner', this);
            console.log(i);
        }
    })(i), i * 1000)
}*/

/*var z = 10;

function foo() {
    console.log(z);
}
(function(funcArg) {
    var z = 20;
    funcArg();
})(foo);*/

// 4
/*var data = [];
for(var k = 0; k < 3; k++) {
    data[k] = function() {
        console.log(k);
    }
}
data[0]();
data[1]();
data[2]();*/

// b为全局变量
/*(function() {
    var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);*/

// 6
// 
/*var obj = {
    foo: 'bar',
    func: function() {
        var self = this;
        console.log('outer', this);
        console.log('outer', self);
        (function() {
            console.log('inner', this);
            console.log('inner', self);
        })()
    }
}

obj.func();*/
// 待定
/*var handle = function(a) {
    var b = 3;
    var tmp = function(a) {
        b = a + b;
        return tmp;
    }
    tmp.toString = function() {
        return b;
    }
    return tmp;
}
console.log(handle(4)(5)(6));*/
// 3 8 14

/*var a = 10;

function foo() {
    console.log(a);
}

function bar() {
    
    console.log(a);
    var a = 20;
}

foo();
bar();*/

// 模块机制
/*var myModules = (function() {

    var modules = {};

    function define(name, deps, impl) {

        console.log(deps instanceof Array);
        for(var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
            console.log('t', modules[deps[i]]);
        }
        console.log('e', deps);
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        get: get,
        define: define
    }
})()

console.log(myModules);

myModules.define( "bar", [], function() { 
    function hello(who) {
        console.log("Let me introduce: " + who); 
    }

    function world() {
        console.log(123);
    }
    return {
        hello: hello,
        world: world
    }
});

myModules.define('foo', ['bar'], function(bar) {

    function test(who) {
        console.log(bar.hello(who));
    }
    bar.hello('45')
    return {
        test: test
    }
})

var bar = myModules.get('bar');
console.log(bar);
bar.world();
bar.hello('cr')
var foo = myModules.get('foo');
foo.test('me')

function foo() {
    console.log( a ); 
}
function bar() { 
    var a = 3;
    foo(); 
    (function() {
        console.log(a);
    })();
}
var a = 2; 
bar();
*/

/*setTimeout(() => console.log('test'), 0);
Promise.resolve('1').then(data => console.log(data)).then(() => console.log('p e'));
console.log('e');*/

/*let reg = /^\d(\d){2}(\d){2}\d/g;
let str = '122336';
let result = str.replace(reg, "we $1")
console.log(result);*/

// var reg = /(?:\d{4})-(\d{2})-(\d{2})/
// var date = '2012-12-21'
// var res = reg.exec(date)

// console.log(res);

/*function a(b) {
    console.log(b);
    function b() {
        console.log(123);
    }
    // var b = 321;
    console.log(b);
}
a(1)*/
/*function test() {
    console.log(foo);
    console.log(bar);

    var foo = 'Hello';
    console.log(foo);
    var bar = function () {
        return 'world';
    }

    function foo() {
        return 'hello';
    }
}

test();*/

/*var fn;
function foo() {
    var a = 2;
    function baz(a) { 
        console.log( a );
    }
    fn = baz; 
}
function bar() {
    fn(20); 
}

foo();
bar(); */

/*function fn() {
    return 20;
}

fn.toString = function() {
    return 10;
}

console.log(fn + 10); */
/*function fn() {
    return 20;
}

fn.toString = function() {
    return 10;
}

fn.valueOf = function() {
    return 5;
}

console.log(fn + 10);*/

/*function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        var _adder = function() {
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    return adder.apply(null, [].slice.call(arguments));
}

// 输出结果，可自由组合的参数
// console.log(add(1, 2, 3, 4, 5));  // 15
// console.log(add(1, 2, 3, 4)(5));  // 15
console.log(add(1)(2)(3)(4)(5));  // 15*/

/*function sum() {
    console.log(arguments);
    var args = [].slice.apply(arguments);
    console.log(args);
    return args.reduce(function(a, b) {
        return a + b;
    })
}

console.log(sum(1, 2, 3));
*/

// 利用 toString 来产生双重输出
/*function add() {
    
    var args = [].slice.call(arguments);

    var adder = function() {

        var args = [].slice.call(arguments);

        // 返回自身用于继续接收参数
        var _adder = function() {

            [].push.apply(args, [].slice.call(arguments));
            return _adder; 
        }

        // 改变_adder的默认返回结果
        _adder.toString = function() {
            
            return args.reduce(function(a, b) {

                return a + b;
            })
        }

        return _adder;

    }

    return adder.apply(null, args);
}

console.log(add(1)(2));*/

/*function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var p1 = new Person('I');
p1.getName();
var p2 = new Person('Y');
p2.getName();
// console.log(p1.getName === p2.getName);

function Child(name, age) {

    Person.call(this, name);
    this.age = age;
}
Child.prototype = new Person();
Child.prototype.getAge = function() {
     return this.age;
}

var c1 = new Child('E', 12);
console.log(c1.getAge());
console.log(c1.getName());
// console.log(c1, Child, Child.prototype, Child.prototype.constructor, c1.__proto__);
console.log(c1);
console.log(Child);
console.log(Child.prototype);
console.log(Child.prototype.constructor);
console.log(c1.__proto__);
console.log(Child.prototype.__proto__);
console.log(Child.__proto__);
console.log(Object.getPrototypeOf(c1));*/

/*var fn = function(num) {
    return new Promise(function(resolve, reject) {
        if (typeof num == 'number') {
            console.log('in');
            resolve(num);
        } else {
            reject('TypeError');
        }
    })
}
console.log('ou');
fn(2).then(function(num) {
    console.log('first: ' + num);
    return num + 1;
})
.then(function(num) {
    console.log('second: ' + num);
    return num + 1;
})
.then(function(num) {
    console.log('third: ' + num);
    return num + 1;
});*/

/*setTimeout(function() {
    console.log('timeout1');
})

new Promise(function(resolve) {
    console.log('promise1');
    for(var i = 0; i < 1000; i++) {
        i == 99 && resolve();
    }
    console.log('promise2');
}).then(function() {
    console.log('then1');
})

console.log('global1');*/

// 统计 page view
/*var counter = 0;
document.addEventListener("visibilitychange", function() {
//   console.log( document.visibilityState );
  if(document.visibilityState === 'visible') {
      setTimeout(() => {
        counter++;
        console.log(counter);
      }, 5000);
  }
});*/

/*var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello');
    }, 2000)
});
p.then(function(resolve) {
    console.log(resolve);
})*/
/*function Promise(fn) {

    var callbacks = [];
    var state = 'pending';
    this.then = function(resolve, rejecte) {

        if(state === 'pending') {

            callbacks.push(resolve);
            return this;
        }
        resolve();
        return this;
    }
    function resolve(value) {
        // console.log(value);
        state = 'resolved'
        setTimeout(function() {
            callbacks.forEach(function(callback) {
                callback(value);
            })
        })
        
    }
    fn(resolve);
}
var p = new Promise(function(resolve) {
    
        resolve('123');
});
p.then(function(value) {
    console.log('321');

}).then(function(value) {

    setTimeout(function() {
        console.log('3215');
    }, 1000)
})*/
// 发布订阅
/*var news = {};
news.callbackList = {};
news.listen = function(type, fn) {

    if(!news.callbackList[type]) {
        news.callbackList[type] = [];
    }
    news.callbackList[type].push(fn);
}

news.trigger = function(type, params) {

    if(!news.callbackList[type]) {
        return false;
    }
    for(var i in news.callbackList[type]) {
        news.callbackList[type][i].call(null, params);
    }
}

news.listen('a', function(price) {
    console.log(price);
})

news.trigger('a', 300);
news.trigger('b', 200)*/

/*var Plane = function() {
    
}
Plane.prototype.fire = function() {
    console.log('1');
}

var AtomDec = function() {
    this.plane = plane;
}
AtomDec.prototype.fire = function() {
    this.plane.fire();
    console.log('2');
}
var plane = new Plane();
plane.fire();
AtomDec(plane);
plane.fire();*/

/*function run(taskDef) {

    let task = taskDef();
    let result = task.next();

    function step() {

        if(!result.done) {
            result = task.next();
            step();
        }
    }
    step();
}
*/
/*function *test() {
    
    setTimeout(() => {
        console.log(1);
    }, 1000)
    yield;
    setTimeout(() => {
        console.log(2);
    }, 2000)
    yield;
    setTimeout(() => {
        console.log(3);
    }, 3000)
}
run(test)*/
/*function x() {
    console.log(2);
}
var x = 1;
console.log(x);*/

/*function test(a) {

    console.log(a);
    
    function a() {
        console.log(2);
    }
    // var a = 3;
    console.log(a);
    var a = 3;
}

test(1);*/

/*var obj = {
    get a() {
        return 'a';
    },
    set a(str) {
        this.a = str;
        return this.log[this.log.length] = str;
    },
    log: []
}

obj.a = 'hello';
console.log(obj.a, obj);*/

/*function debounce(fn, delay) {

    var timer;

    return function() {

        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.call(context, args);
        }, delay)
    }
}

document.addEventListener('mousemove', debounce(() => console.log(123), 2000))*/

/*function Human(name) {

    var obj = new Object();
    obj.name = name;
    
    obj.eat = function(food) {

        console.log(this.name + '吃了' + food);
        return this;
    }
    obj.sleep = function(time) {

        setTimeout(() => {
            console.log(this.name + '睡了' + time);
        }, time);
        
        return this;
    }
    return obj;
}


// var h1 = Human('小明');
Human('小明').eat('土豆').sleep('2h').eat('番茄');
// console.log(h1);*/
/*function Human(man) {
    var action = [];
    var people = man;
    var person = new Object();
    person.name = man;

    person.sleep = function(second) {
        action.push(function() {
            console.log("休息%d秒", second);
            setTimeout(function(){
                if (action.length > 0) action.shift();
                if (action.length > 0) action[0]()
            }, second * 1000)
        });
        return this;
    },
    person.eat = function(something) {
        action.push(function() {
            console.log("%s吃了%s", people, something);
            if (action.length > 0) action.shift();
            if (action.length > 0) action[0]()
        });
        return this;
    }
    person.sleepFirst = function(second) {
        action.unshift(function() {
            console.log("开始等待%d秒", second);
            setTimeout(function(){
                console.log("你好！" + people + "!");
                if (action.length > 0) action.shift();
                if (action.length > 0) action[0]();
            }, second * 1000)
        });
        action[0]();
    }

    return person
}
Human('小明').eat('早餐').sleep(2).sleepFirst(2);*/

/*var arr = [1];

arr.reduce(function(res, cur) {
    console.log('res:' + res, cur);
})*/

/*var arr = [1, 2];
var newArr = arr.pop();
console.log(newArr);*/

/* function Bird(bird) {

    var actions = [];

    Bird.eat = function() {

        actions.push(function() {

            console.log('吃饭');
            if(actions.length > 0) actions.shift();
            if(actions.length > 0) actions[0]();
        });
        return Bird;
    }

    Bird.sing = function() {

        actions.push(function() {

            console.log('唱歌');
            if(actions.length > 0) actions.shift();
            if(actions.length > 0) actions[0]();
        })
        return Bird;
    }

    Bird.sleepLast = function( time) {

        actions.unshift(function() {

            console.log('睡觉');
            if(actions.length > 0) actions.splice(1, 1);
            if(actions.length > 0) actions[0]();
        })

        actions[0]();
        return Bird;
    }

    return Bird;
}

Bird().eat().sing().eat().sleepLast(); */

/* new Promise(function(resolve){
    console.log('promise begin')
    for( var i=0 ; i<10000 ; i++ ){
        i==5000 && console.log('loop...')
        i==9999 && resolve()
    }
    setTimeout(function() {
        console.log('time');
    })
    console.log('promise end')
}).then(function(){
    console.log('callback')
})
console.log('other...') */
'use strict';
var a = 20;
function foo() {
  console.log(this.a);
}
function bar(fn) {
  fn();
}

var obj = {
  a: 10,
  getA: foo
}
bar(obj.getA);