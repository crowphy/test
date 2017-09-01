function foo() {
  var a = 10;

  function fn1() {
    return a;
  }
  function fn2() {
    return 10;
  }
  fn2();
}
foo();