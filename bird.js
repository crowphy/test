
function Bird() {

    var actions = []
    
    Bird.sing = function() {
        actions.push(function() {
            console.log('sing');
            if(actions.length > 0) actions.shift();
            // console.log(actions);
            if(actions.length > 0) actions[0]();
        });
        return this;   
    }
    
    // eat = function() {
    //     console.log('eat')
    // }
    Bird.sleepLast = function(time = 0) {
        setTimeout(function() {
            actions.push(function() {
                setTimeout(function() {
                    // console.log(actions)
                    console.log(`slepp ${time} s`);
                    if(actions.length > 0) actions.shift();
                    // console.log(actions);
                    if(actions.length > 0) actions[0]();
                }, time * 1000)
            });
            actions[0]()
        });
        return this;
    }
    return Bird;
}
Bird().sing().sleepLast(3).sing().sleepLast(2)
