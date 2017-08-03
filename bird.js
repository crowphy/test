
function Bird() {

    const actions = []
    
    Bird.sing = function() {
        actions.push(function(song) {
            console.log('sing');
            if(actions.length > 0) 
                actions.shift();
            // console.log(actions);
            if(actions.length > 0) actions[0]();
        });
        return this;   
    }
    
    // Bird.eat = function() {
    //     console.log('eat')
    // }
    Bird.sleepLast = function(time = 0) {
        setTimeout(function() {
            actions.push(function() {
                // setTimeout(function() {
                    console.log(`sleppLast ${time} s`);
                    if(actions.length > 0)
                        actions.shift();
                    if(actions.length > 0) actions[0]();
                // }, time * 1000)
            });
            actions[0]()
        });
        return this;
    }
    return Bird;
}
Bird().sing('in').sleepLast(1).sing('ou').sleepLast(2)
