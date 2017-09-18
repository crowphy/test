var fs = require('fs')
var iconv = require('iconv')
var buffer = Buffer.from(fs.readFileSync('gbkFile.txt',{encoding:'binary'}),'binary');
console.log(buffer);//得到文件内容对应的Buffer
var text = iconv.decode(buffer,'GBK');//使用GBK解码
console.log(text);
//console.log(iconv.encode(text, 'utf8'));
//console.log(iconv.encode(text, 'gbk'));
fs.writeFileSync('utfFile.txt',iconv.encode(text, 'utf8'),'binary'); //按二进制方式写入
fs.writeFileSync('utfFile2.txt',text,'utf8'); //按UTF8写入