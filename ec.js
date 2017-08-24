var name = 'window';
var p = {
  name: 'perter',
  getName: function() {
    var self = this;
    return function() {
      return self.name;
    }
  }
}

var getName = p.getName();
var _name = getName();
console.log(_name);