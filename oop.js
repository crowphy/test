function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.speak = function() {
    console.log(this.name)
}

var p1 = new Person('Bill');
p1.speak()
function Child(name, age) {
    this.age = age;
    // this.name = name;
    Person.call(this, name, 7);
}

Child.prototype = new Person();

Person.prototype.sayAge = function() {
    console.log(this.age)
}

var c1 = new Child('Mike', 6)
c1.sayAge();