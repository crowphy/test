
function Bird() {

    Bird.sing = function() {
        console.log('sing')
    }

    Bird.eat = function() {
        console.log('eat')
    }
    Bird.sleepLast = function(time = 0) {
        console.log('sleep', time)
    }
}