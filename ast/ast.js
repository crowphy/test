const fs = require('fs');
const recast = require('recast');
const { variableDeclaration, variableDeclarator, functionExpression } = recast.types.builders;

const code = `
    function add (a, b) {
        // hello
        return a + b;
    }
`

const ast = recast.parse(code);

let add = ast.program.body[0];
// ast.program.body[0] = variableDeclaration('const', [
//     variableDeclarator(add.id, functionExpression(null, add.params, add.body))
// ]);
// const output = recast.print(ast).code;
// console.log(output);
// fs.writeFileSync('ast-result.json', JSON.stringify(add), 'utf-8');