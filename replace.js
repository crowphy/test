var a = 'abcd'
a.replace(/[b]/g, function() {
  return 'e'
})
console.log(a)