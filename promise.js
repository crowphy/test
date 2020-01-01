// https://imweb.io/topic/5bbc264b6477d81e668cc930
// https://juejin.im/post/5b83cb5ae51d4538cc3ec354
/*
 * @Author: crowphy 
 * @Date: 2019-02-19 21:11:18 
 * @Last Modified by: crowphy
 * @Last Modified time: 2020-01-02 00:51:15
 * promise的实现
 * promise的方法：
 * 静态方法：
 * resolve
 * reject
 * all
 * race
 * 原型方法：
 * then
 * finally
 * catch
 */

// class Promise2 {

//     // callbacks = [];
//     constructor(executor) {
//         this.status = 'pending';
//         this.callbacks = [];
//         console.log(this.status)
//         executor(this.resolve, this.reject);
//     }

//     static resolve() {
//         console.log('resolve', this);
//         setTimeout(() => {
//             console.log('resolve2', this);
//             this.callbacks.forEach(callback => {
//                 callback();
//             });
//         })
//     }

//     static reject() {

//     }

//     static all() {

//     }

//     static race() {

//     }

//     then(callback) {
//         console.log('then');
//         this.callbacks.push(callback);
//     }

//     catch() {

//     }

//     finally() {

//     }
    
// }

// Promise2.resolve();
// const p = new Promise2(function(resolve, reject) {
    
// });
// console.log(p.status)



/**
 *resolve的参数：
 * 1.参数是一个 Promise 实例，如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
 * 2.参数是一个thenable对象，Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法
 * 3.如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved
 * 4.不带有任何参数，直接返回一个resolved状态的 Promise 对象
 * then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。
 * @param {*} executor
 */
function PromiseA (executor) {
    var self = this;
    self.status = 'pending';
    self.succCallbacks = [];
    self.failCallbacks = [];

    
    function resolve (data) {
        self.data = data;
        function run () {
            if (self.status !== 'pending') {
                return;
            }
            var runSucc = function (val) {
                while (self.succCallbacks.length) {
                    var cb = self.succCallbacks.shift();
                    if (typeof cb === 'function') {
                        cb(val);
                    }
                }
            }
            if (data instanceof PromiseA) {
                data.then(function (val) {
                    self.status = 'resolved';
                    self.data = val;
                    runSucc(self.data);
                })
            } else {
                self.status = 'resolved';
                runSucc(self.data);
            }
        }
        setTimeout(run, 0);
    }

    function reject (reason) {
        
    }

    executor(resolve, reject);
}

PromiseA.prototype.then = function (resolveCb, rejectCb) {
    var self = this;
    return new PromiseA(function (resolve, reject) {
        if (self.status === 'pending') {
            self.succCallbacks.push(function () {
                setTimeout(() => {
                    var res = resolveCb(self.data);
                    if (res instanceof PromiseA) {
                        res.then(resolve, reject);
                    } else {
                        resolve(res);
                    }
                }, 0);
            })
        }

        if (self.status === 'resolved') {
            setTimeout(() => {
                var res = resolveCb(self.data);
                if (res instanceof PromiseA) {
                    res.then(resolve, reject);
                } else {
                    resolve(res);
                }
            }, 0);
        }
    })
}

PromiseA.resolve = function (data) {
    if (data instanceof PromiseA) {
        return data;
    } else {
        return new PromiseA(function (resolve) {
            resolve(data);
        })
    }
}

var p0 = new PromiseA(function (resolve, reject) {
    setTimeout(() => {
        resolve('crowphy');
    }, 2000);
});

var p = new PromiseA(function (resolve, reject) {
    resolve(p0);
});

p.then(function (data) {
    console.log(data, ' world2');
    return 'world2';
}, function (reason) {
    console.log(reason);
})

p.then(function (data) {
    console.log(data, ' world');
    return 'world3';
}, function (reason) {
    console.log(reason);
}).then(function (data) {
    console.log(data);
}, function (reason) {
    console.log(reason);
});

var t = PromiseA.resolve('a');
console.log(t instanceof PromiseA);
t.then(function (data) {
    console.log(data);
})