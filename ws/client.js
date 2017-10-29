const obj = {
  b: 123
}
function test(a, o) {
  console.log(a)
  with(o) {
    console.log(a)
  }
}
test('321', obj)