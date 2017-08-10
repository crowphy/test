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

function inheritPrototype(superType, subType) {
    var prototype = Object.create(superType.prototype);
    subType.prototype = prototype;
    subType.prototype.constructor = subType;
}

function Man(wife, name) {
    Person.call(this, name);
    this.wife = wife;
}
inheritPrototype(Person, Man);
Man.prototype.who = function() {
    console.log(this.wife);
}
var m = new Man('She', 'C');
m.who();
m.speak();