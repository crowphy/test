

// 1
function f1() {
  var a = 1, b = 3;
  a = b - a;
  b = b - a;
  a = a + b;
  console.log(a, b);
}

function f2() {
  var a = 1, b = 3;
  a = [b, b = a][0];
  console.log(a, b);
}

function f3() {
  var a = 1, b = 3;
  [a, b] = [b, a];
  console.log(a, b); //3 1
}
f1()
f2()
f3()