var foo = {
  bar: function() {
    console.log(this.baz)
  },
  baz: 1
};
foo.bar();
(function a() {
  console.log(123)
  foo.bar()
})()
