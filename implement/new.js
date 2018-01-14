
/**
 * new的模拟实现
 * 
 * @returns 
 */
function myNew() {

  var obj = Object.create(Object.prototype);
  var ctr = Array.prototype.shift.call(arguments);
  obj.__proto__ = ctr.prototype;
  var result = ctr.apply(obj, arguments);
  return typeof result === 'object' ? result || obj : obj;
}

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name)
}
var p = myNew(Person, 'Cr')
p.sayName()