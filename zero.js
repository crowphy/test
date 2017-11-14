let num = 3

let res = String(num).match(/\w{1}/g, (m) => {
  console.log(m)
  return m
})
console.log(/\w{1}/.test(3))
