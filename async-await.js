// var st = async function() {
//     for(var i = 0; i < 4; i++) {
//         await setTimeout(function() {
//             console.log(i)
//         })
//     }
// }
// st()
const fetch = require('node-fetch')
const axios = require('axios')
async function get() {
    try {
        const result = await fetch('http://103.28.215.253:181/m/home/getitems').then(function(data) {
            console.log(data)
        })
        console.log(result)       
    } catch (error) {
        console.log(error)
    }
}
get()