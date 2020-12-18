const C = require('./c');
const B = require('./b')
C.setC(1);
const c = C.getC();
console.log('c:', c);
B.set();
const c2 = C.getC();
console.log('c2:', c2);