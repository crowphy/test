function Person(name) {
    this.name = name;
}
Person.prototype.speak = function() {
    console.log(this.name)
}

var p1 = new Person('Bill');
p1.speak()
function Child(name, age) {
    this.age = age;
    Person.call(null, name);
}

Child.prototype = new Person();

var c1 = new Child('Mike', 6)
c1.speak();