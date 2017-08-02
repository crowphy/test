
function Bird() {

    this.queue = []
    
    // return Bird
}
// console.log('bird')
Bird.prototype.sing = function() {

        console.log(this.queue)
        var sing1 = function() {
            console.log('sing')
        }
        this.queue.push(sing1)
        // console.log(this.queue)
        if(this.queue.length > 1) this.queue.shift()
        if(this.queue.length > 1) this.queue[0]()
        return this
    }
    
    // eat = function() {
    //     console.log('eat')
    // }
    Bird.prototype.sleepLast = function(time = 0) {
        
        var sleepLast1 = function() {
            console.log(`sleep ${time} s`)
        }
        console.log(this.queue)
        var self = this
        setTimeout(function() {
            self.queue.push(sleepLast1)
        }, time * 1000)
        if(this.queue.length > 1) this.queue.shift()
        if(this.queue.length > 0) this.queue[0]()
        
        // console.log(queue)
        return this
    }
(new Bird()).sing().sleepLast(2).sing().sleepLast(2)
