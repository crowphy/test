#! /usr/local/env node
const recast = require('recast');

recast.run(function (ast, printSource) {
    recast.visit(ast, {
        visitExpressionStatement: function ({ node }) {
            console.log(printSource(node))
            return false
        }
    });
});