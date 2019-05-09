/*
 * @Author: crowphy 
 * @Date: 2019-02-19 21:11:18 
 * @Last Modified by: crowphy
 * @Last Modified time: 2019-02-20 17:23:59
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

class Promise2 {

    // callbacks = [];
    constructor(executor) {
        this.status = 'pendding';
        this.callbacks = [];
        console.log(this.status)
        executor(this.resolve, this.reject);
    }

    static resolve() {
        console.log('resolve', this);
        setTimeout(() => {
            console.log('resolve2', this);
            this.callbacks.forEach(callback => {
                callback();
            });
        })
    }

    static reject() {

    }

    static all() {

    }

    static race() {

    }

    then(callback) {
        console.log('then');
        this.callbacks.push(callback);
    }

    catch() {

    }

    finally() {

    }
    
}

Promise2.resolve();
const p = new Promise2(function(resolve, reject) {
    
});
console.log(p.status)