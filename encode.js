// var fs = require('fs')
// var iconv = require('iconv')
// var buffer = Buffer.from(fs.readFileSync('gbkFile.txt',{encoding:'binary'}),'binary')
// console.log(buffer)//得到文件内容对应的Buffer
// var text = iconv.decode(buffer,'GBK')//使用GBK解码
// console.log(text)
// //console.log(iconv.encode(text, 'utf8'))
// //console.log(iconv.encode(text, 'gbk'))
// fs.writeFileSync('utfFile.txt',iconv.encode(text, 'utf8'),'binary') //按二进制方式写入
// fs.writeFileSync('utfFile2.txt',text,'utf8') //按UTF8写入
const axios = require('axios')
const http = require('http')
const iconv = require('iconv-lite')
const url = 'http://www.pingan.com/cms-tmplt/portalJsonpController.do?method=articleList&channelId=3601'
let data
function getData (url) {
  http.get(url, function (res) {
    console.log(res.on)
    var arrBuf = []
    var bufLength = 0
    res.on('data', function(chunk){
        arrBuf.push(chunk)
        bufLength += chunk.length
    })
    .on('end', function(){
        // arrBuf是个存byte数据块的数组，byte数据块可以转为字符串，数组可不行
        // bufferhelper也就是替你计算了bufLength而已 
        var chunkAll = Buffer.concat(arrBuf, bufLength)   
        var strJson = iconv.decode(chunkAll, 'gb18030') // 汉字不乱码
        // console.log('str:', JSON.parse(strJson).articleList[0].content.articleTitle)
        data = JSON.parse(strJson).articleList[0].content.articleTitle
        return JSON.parse(strJson).articleList[0].content.articleTitle
    })
  })
  // console.log(res.data.articleList[0].content.articleTitle)
}
getData(url)
// console.log(data)

function get () {
  axios.get(url, {
    transformResponse: [function (res) {
      console.log(JSON.parse(res).articleList[0].content.articleTitle)
      res.on('data', function(chunk){
        arrBuf.push(chunk)
        bufLength += chunk.length
    })
    .on('end', function(){
        // arrBuf是个存byte数据块的数组，byte数据块可以转为字符串，数组可不行
        // bufferhelper也就是替你计算了bufLength而已 
        var chunkAll = Buffer.concat(arrBuf, bufLength)   
        var strJson = iconv.decode(chunkAll, 'gb18030') // 汉字不乱码
        // console.log('str:', JSON.parse(strJson).articleList[0].content.articleTitle)
        data = JSON.parse(strJson).articleList[0].content.articleTitle
        return JSON.parse(strJson).articleList[0].content.articleTitle
    })
    }]
  })
}