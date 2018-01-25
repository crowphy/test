
var p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  })
  console.log(5)
})
p.then(() => {
  console.log(7)
})
async function a() {
  console.log(9)
  var a = await p.then(() => {
    console.log(10)
    return 30
  })
  console.log(a)
  console.log(6)
  return 20
}

var b = a()
b.then((v) => {
  console.log(v)
})
p.then(() => {
  console.log(8)
})

console.log(4)

// 5 9 4 10 7 6 20 3