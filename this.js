 
function foo() {
  console.log(this.a);
}
function bar(fn) {
  fn();
}
var a = 20;
var obj = {
  a: 10,
  getA: foo
}
bar(obj.getA); 
/* var a = 20;
var obj = {
    a: 10,
    c: this.a + 20,
    fn: function () {
        return this.a;
    }
}

console.log(obj.c);
console.log(obj.fn()); */

/* var obj = {
  a: 10,
  fn: function() {
    console.log(this.a);
    (function() {
      console.log(this.a);
    })()
  }
}
obj.fn() */