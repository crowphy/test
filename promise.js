/*
 * @Author: crowphy 
 * @Date: 2019-02-19 21:11:18 
 * @Last Modified by: crowphy
 * @Last Modified time: 2019-12-30 21:41:27
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
    var staus = 'pending';
    var succCallbacks = [];
    var failCallbacks = [];

    
    PromiseA.resolve = function (data) {
        if (status === 'pending') {
            // for(var i = 0; i < succCallbacks.length; i++) {
            //     if(typeof succCallbacks[i] === 'function') {
            //         var res = succCallbacks[i](data);
            //         if (res instanceof PromiseA) {
                        
            //         }
            //     }
            // }
            if (data instanceof PromiseA) {
                return data;
            }
            if(data.then && typeof data.then === 'function') {
                data.then();
                return new PromiseA();
            }

            status = 'resolved';

            if(typeof succCallbacks[0] === 'function') {
                setTimeout(() => {
                    var res = succCallbacks[0](data);
                    if (!res instanceof PromiseA) {
                        // PromiseA.resolve(res);
                        return new PromiseA(function (resolve, reject) {
                            resolve(res);
                        });
                    }
                })
            }
        }
        return new PromiseA(function (resolve, reject) {
            resolve();
        });
    }

    PromiseA.reject = function (data) {
        
    }

    PromiseA.prototype.then = function (resolveCb, rejectCb) {
        
            succCallbacks.push(resolveCb);
            failCallbacks.push(rejectCb);
    }
    executor(PromiseA.resolve, PromiseA.reject);
}

var p = new PromiseA(function (resolve, reject) {
    resolve('hello');
});

p.then(function (data) {
    console.log(data);
    return 'world';
}, function (reason) {
    console.log(reason);
}).then(function (data) {
    console.log(data);
}, function (reason) {
    console.log(reason);
});