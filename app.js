let d1 = '201712302359',
    d2 = '2017-12-30 23:59'

function format(date) {
    
    if(/-/.test(date)) {
        date = date.split(' ')[0]
    } else {
        let year = date.substring(0, 4)
        let month = date.substring(4, 6)
        let day = date.substring(6, 8)
        date = year + '-' + month + '-' + day
    }
    return date
}
format(d1)
format(d2)
