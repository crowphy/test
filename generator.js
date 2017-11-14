
// function *gen(params) {
//   let y = yield params + 1;
  
//   console.log(y);
//   // y = 3
//   return y;
// }
// const g = gen(1);
// let a = g.next(3);
// let b = g.next();
// console.log(a, b);
// var fetch = require('node-fetch');

// function* gen() {
//   var url = 'https://api.github.com/users/github';
//   var result = yield fetch(url);
//   console.log(result.bio);
// }
// var g = gen();
// var result = g.next();

// result.value.then(function (data) {
//   return data.json();
// }).then(function (data) {
//   console.log(data);
//   g.next(data);
// });
// var a = [1, 2]
// console.log(a[Symbol.iterator]);
// function *iteratorObj(obj) {
//   for(var key in obj) {
//     yield [key, obj[key]]
//   }
// }
// var o = {
//   a: 1,
//   b: 2
// }
// for(var [key, value] of iteratorObj(o)) {
//   console.log(`${key}:${value}`);
// }
// function *gen() {
//   yield 'a'
//   yield 'b'
//   return 'res'
// }
// function *log(genObj) {
//   const result = yield* genObj
//   console.log('res:', result)
// }
// [...log(gen())]
// var r = log(gen())
// function* callee() {
//   console.log('callee: ' + (yield));
// }
// function* caller() {
//   while (true) {
//     yield* callee();
//   }
// }
// const callerObj = caller()
// callerObj.next()
// callerObj.next('a')
// function countUp(start = 0) {
//   // const counter = document.querySelector('#counter')
//   counter.textContent = String(start)
//   while (true) {
//     counter.textContent = String(start)
//     start++
//     // yield
//   }
// }
// function run(func) {
//   func()
//   setTimeout(() => {
//     run(func)
//   }, 1000)
// }
// run(countUp)
function* countUp(start = 0) {
  while (true) {
    start++;
    yield* displayCounter(start);
  }
}
function* displayCounter(counter) {
  // const counterSpan = document.querySelector('#counter');
  // counterSpan.textContent = String(counter);
  console.log(counter);
  yield; // pause
}
function run(generatorObject) {
  if (!generatorObject.next().done) {
    // Add a new task to the event queue
    setTimeout(function () {
      run(generatorObject);
    }, 1000);
  }
}
run(countUp());