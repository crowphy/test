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

function MyPromise(executor) {
  this.queue = ['a']
  executor(this.resolve, this.reject)
}
MyPromise.prototype.resolve = function(params) {
  console.log(this.queue)
  setTimeout(() => {
    console.log(this.queue)
    var fn = this.queue.shift()
    fn.call(this, params)
  })
  console.log(this.queue)
}
MyPromise.prototype.reject = function (params) {

}
MyPromise.prototype.then = function (func) {
  this.queue.push(func)
  console.log(this.queue)
  return this
}
var p = new MyPromise(function(resolve, reject) {
  resolve('hello')
})
p.then(function(data) {
  console.log(data)
})