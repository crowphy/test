
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
                break;
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
        let char = str.charAt(++index);
        let value = '';
        while (char !== '"') {
            value += char;
            index++;
            char = str.charAt(index);
        }
        // 已读取，指针移到下一步
        index++;
        tokens.push({
            type: 'string',
            value: value
        });
        console.log(tokens);
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
    return tokens;

}

const jsonStr =  '"hello-kitty"' //'{"a":1,"b":true,"c":false,"foo":null,"bar":[1,2,3]}';

console.log();
jsonParse(jsonStr)

