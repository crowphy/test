// new Promise(function(resolve) {
//   console.log('p1');
//   resolve('t1')
//   // return 'p3'
//   // new Promise(function(resolve) {
//   //   console.log('p2');
//   //   resolve('t2')
//   // }).then(function(data) {
//   //   console.log(data);
//   // })
// }).then(function(data) {
//   console.log(data);
//   var a = 0;
//   return 1
// }).then((data) => {
//   console.log(data);
// })
// // console.log('g1');

// function MyPromise(executor) {
//   this.queue = ['a']
//   executor(this.resolve, this.reject)
// }
// MyPromise.prototype.resolve = function(params) {
//   console.log(this.queue)
//   setTimeout(() => {
//     console.log(this.queue)
//     var fn = this.queue.shift()
//     fn.call(this, params)
//   })
//   console.log(this.queue)
// }
// MyPromise.prototype.reject = function (params) {

// }
// MyPromise.prototype.then = function (func) {
//   this.queue.push(func)
//   console.log(this.queue)
//   return this
// }
// var p = new MyPromise(function(resolve, reject) {
//   resolve('hello')
// })
// p.then(function(data) {
//   console.log(data)
// })
/* function PromiseB(executor) {
  var callbacks = []
  this.then = function(callback) {
    callbacks.push(callback)
    return this
  }
  executor(resolve)
  function resolve(value) {
    setTimeout(() => {
      res[0] = callbacks[0](value)
      for(let i = 1; i < callbacks.length; i++) {
        res[i] = callbacks[i](res[i - 1])
      }
    })
  }
}
new PromiseB(function(resolve, reject) {
  resolve('hello')
}).then(function(data) {
  console.log(data)
  return 'world'
}).then(function(data) {
  console.log(data)
}) */
/* 
function Promise(executor) {
  var self = this
  self.status = 'pending'
  self.data = undefined
  self.onResolvedCallback = []
  self.onRejectedCallback = []
  
  function resolve(value) {
    if(self.status === 'pending') {
      self.status = 'resolved'
      self.data = value
      for(var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.data = reason
      for (var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
Promise.prototype.then = function(onResolved, onRejected) {
  var self = this
  var promise2
  onResolved = typeof onResolved === 'function' ? onResolved : function(value){}
  onRejected = typeof onRejected === 'function' ? onRejected : function (reason) {}
  if(self.status === 'resolved') {
    return promise2 = new Promise(function(resolve, reject) {
      try {
        var x = onResolved(self.data)
        if(x instanceof Promise) {
          x.then(resolve, reject)
        }
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onRejected(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
  }
  
  if (self.status === 'pending') {
    return promise2 = new Promise(function (resolve, reject) {
      slef.onResolvedCallback.push(function(value) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
      slef.onRejectedCallback.push(function (value) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
    
  }
}
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
} */

try {
  module.exports = Promise
} catch (e) {}

function Promise(executor) {
  var self = this

  self.status = 'pending'
  // 每个 then 都会初始化这两个数组，所以它们的长度始终为1
  self.onResolvedCallback = []
  self.onRejectedCallback = []

  function resolve(value) {
    if (value instanceof Promise) {
      return value.then(resolve, reject)
    }
    setTimeout(function () { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.status = 'resolved'
        self.data = value
        for (var i = 0; i < self.onResolvedCallback.length; i++) {
          console.log(i, self.onResolvedCallback.length)
          self.onResolvedCallback[i](value)
        }
      }
    })
  }

  function reject(reason) {
    setTimeout(function () { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.status = 'rejected'
        self.data = reason
        for (var i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](reason)
        }
      }
    })
  }

  try {
    executor(resolve, reject)
  } catch (reason) {
    reject(reason)
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  var then
  var thenCalledOrThrow = false

  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }

  if (x instanceof Promise) {
    if (x.status === 'pending') { //because x could resolved by a Promise Object
      x.then(function (v) {
        resolvePromise(promise2, v, resolve, reject)
      }, reject)
    } else { //but if it is resolved, it will never resolved by a Promise Object but a static value;
      x.then(resolve, reject)
    }
    return
  }

  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      then = x.then //because x.then could be a getter
      if (typeof then === 'function') {
        then.call(x, function rs(y) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvePromise(promise2, y, resolve, reject)
        }, function rj(r) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (thenCalledOrThrow) return
      thenCalledOrThrow = true
      return reject(e)
    }
  } else {
    resolve(x)
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  var self = this
  var promise2
  onResolved = typeof onResolved === 'function' ? onResolved : function (v) {
    return v
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function (r) {
    throw r
  }

  if (self.status === 'resolved') {
    return promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () { // 异步执行onResolved
        try {
          var x = onResolved(self.data)
          resolvePromise(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    })
  }

  if (self.status === 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () { // 异步执行onRejected
        try {
          var x = onRejected(self.data)
          resolvePromise(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    })
  }

  if (self.status === 'pending') {
    // 这里之所以没有异步执行，是因为这些函数必然会被resolve或reject调用，而resolve或reject函数里的内容已是异步执行，构造函数里的定义
    return promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          var x = onResolved(value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })

      self.onRejectedCallback.push(function (reason) {
        try {
          var x = onRejected(reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    })
  }
}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

Promise.deferred = Promise.defer = function () {
  var dfd = {}
  dfd.promise = new Promise(function (resolve, reject) {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}

new Promise(function(resolve) {
  console.log('p1');
  resolve('t1')
}).then(function p1(data) {
  console.log(data);
  var a = 0;
  return 1
}).then(function p2(data) {
  console.log(data);
})