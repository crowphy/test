var person = new Object();
Object.defineProperty(person, 'name', {
  value: 'Crowphy'
})
console.log(person.name)
person.name = 'L'
console.log(person.constructor)
var py = Object.getPrototypeOf(person)
console.log(py)