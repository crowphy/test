function hello() {
  console.log(arguments);
  // var args = Array.prototype.slice.call(arguments);
  var uslice = Array.prototype.slice;
  var slice = Function.prototype.apply.bind(uslice);
  console.log(slice);
  // var args = slice(arguments);
  var args = Function.prototype.apply(arguments)
  console.log(args);
}
hello(1, 2, 3)

