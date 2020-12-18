function p() {
return Promise.reject(1)
}
async function test(){
    var a = await p().catch((err) => {
        console.log('err', err);
        // return err
    })
    console.log('a:', a)
    return a;
}
var b = test()
b.then((data) => {
    console.log('data:', data)
})