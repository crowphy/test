
// https://segmentfault.com/a/1190000010998941

function parse (str) {
    let index = 0;
    while (!str.length) {
        let char = str.charAt(index);
        switch (char) {
            case '{':
                parseObject();
            case '[':
                parseObject();
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



}

const jsonStr = '{"a":1,"b":true,"c":false,"foo":null,"bar":[1,2,3]}';

