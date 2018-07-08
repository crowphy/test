function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function(){
      return nextIndex < array.length ? 
        {value: array[nextIndex++], done: false}:
        {value: undefined, done: true};
    }
  }
}

var it = makeIterator([3,2,1]);
it.next();