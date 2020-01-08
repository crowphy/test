
// https://segmentfault.com/a/1190000010998941
// https://github.com/douglascrockford/JSON-js/blob/master/json2.js#L373


function jsonParse (str) {
    let index = 0;
    const tokens = [];
    let char = '';
    while (index < str.length) {
        console.log('index-', index);
        char = str.charAt(index);
        switch (char) {
            case '{':
                tokens.push({
                    type: 'object-begin',
                    value: '{'
                });
                index++;
                break;
            case '}':
                tokens.push({
                    type: 'object-end',
                    value: '}'
                });
                index++;
                break;
            case '[':
                tokens.push({
                    type: 'array-begin',
                    value: '['
                });
                index++;
                break;
            case ']':
                tokens.push({
                    type: 'array-end',
                    value: ']'
                });
                index++;
                break;
            case '"':
                parseString();
                break;
            case ':':
                tokens.push({
                    type: 'colon',
                    value: ':'
                });
                index++;
                break;
            case ',':
                tokens.push({
                    type: 'comma',
                    value: ','
                });
                index++;
                break;
            case ' ':
                index++;
                break;
            case 'n':
                parseNull();
                break;
            case 'f':
                parseFalse();
                break;
            case 't':
                parseTrue();
                break;
            default:
                debugger
                if (isDigit (char)) {
                    parseNumber();
                } else {
                    debugger
                    throw 'illegal char';
                }
        }
    }

    function isDigit (char) {
        if (char === '-' || /\d/.test(char)) {
            return true;
        }
        return false;
    }

    function parseString () {
        let char = str.charAt(++index);
        let value = '';
        while (char && char !== '"') {
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
    }

    function next(length) {
        let start = index;
        let word = '';
        for (let num = start; num < index + length; num++) {
            word += str.charAt(num);
        }
        debugger
        return word;
    }

    function parseFalse () {
        if (next(5) === 'false') {
            tokens.push({
                type: 'boolean',
                value: false
            });
            index = index + 5;
        }
    }

    function parseTrue () {
        if (next(4) === 'true') {
            tokens.push({
                type: 'boolean',
                value: true
            });
            index = index + 4;
        }
    }

    function parseNull () {
        if (next(4) === 'null') {
            tokens.push({
                type: 'null',
                value: null
            });
            index = index + 4;
        }
    }

    function parseNumber () {
        let num = '';
        let char = str.charAt(index);
        while (isDigit(char)) {
            num += char;
            index++;
            char = str.charAt(index);
        }
        tokens.push({
            type: 'number',
            value: Number(num)
        });
    }
    return tokens;
}

const jsonStr = '{"b":true,"c":false,"foo":null,"obj":{"baz": ["hello"]}"bar":[3]}';

console.log(jsonParse(jsonStr));
