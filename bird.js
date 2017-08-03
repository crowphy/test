
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
                // console.log(`开始睡觉 ${time} s`);
                setTimeout(function() {
                    console.log(`睡了 ${time} s`);
                    if(actions.length > 0)
                        actions.shift();
                    if(actions.length > 0) 
                        actions[0]();
                }, time * 1000)
            });
            actions[0]()
        });
        return this;
    }
    return Bird;
}
Bird().sing().sleepLast(3).sing().sleepLast(4)
