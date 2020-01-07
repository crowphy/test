
// https://segmentfault.com/a/1190000010998941

function jsonParse (str) {
    let index = 0;
    const tokens = [];
    let char = '';
    while (index < str.length) {
        console.log('index-', index);
        char = str.charAt(index);
        switch (char) {
            case '{':
                parseObject();
            case '[':
                parseObject();
            case '"':
                parseString();
                
            case ':':
                parseString();
            case ',':
                parseString();
            case 'n':
                parseString();
            case 'f':
                parseString();
            case 't':
                parseString();
        }
        
    }

    function parseString () {
        console.log('parseString-begin')
        let value = '';
        char = str.charAt(++index);
        while (char !== '"' && char !== '') {
            console.log('index-', index);
            value += char;
            char = str.charAt(++index);
        }
        tokens.push({
            type: 'string',
            value: value
        });
        return;
        console.log('parseString-end')
    }

    function parseObject () {
        let result = {};
        let key = '';
        let char = str.charAt(index);
        while (char !== '}') {
            key += char;
            char = str.charAt(++index);
        }
    }
    
    function parseArray () {
    
    }
    debugger
    return tokens;

}

const jsonStr =  '"hello"' //'{"a":1,"b":true,"c":false,"foo":null,"bar":[1,2,3]}';

console.log(jsonParse(jsonStr));

