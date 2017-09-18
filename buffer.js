// let str = '深入浅出node.js'
// let buf = new Buffer(str, 'utf-8')
// // console.log(buf, buf[2])
// var buffer = new Buffer('Hello Node');
// console.log(buffer.toString('base64'));
// var base64String = 'SGVsbG8gTm9kZQ==';
// var buffer = new Buffer(base64String, 'base64');
// var utf8String = buffer.toString('utf8');
// console.log(utf8String);
var iconv = require('iconv-lite');
var lm = '�й�ƽ���Ƴ������ܲƸ��ܼҡ� ���� AI ����г��¸';
var b1 = new Buffer(lm, 'ascii');
var str = iconv.decode(b1, 'ascii');
console.log(b1, str)