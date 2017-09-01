setTimeout(function to1() {
    console.log('to1')
    setTimeout(function to2(){
        console.log('to2')
    }, 0)
}, 100)
// console.log('test')
setTimeout(function to3() {
    console.log('to3')
}, 104)
// setImmediate(function() {
//     console.log('im1')
// })
// console.log('o1')
// new Promise(function(reslove) {
//     console.log('p1')
//     reslove('data')
//     console.log('p2')
// }).then(function(res) {
//     console.log('th1')
// })
// process.nextTick(function() {
//     console.log('n1')
// })
// o1 p1 p2 n1 th1 to1 im1 to3 to2