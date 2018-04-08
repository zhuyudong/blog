const esprima = require('esprima');

let code = 'const a = 1';
const ast = esprima.parseScript(code);
console.log(ast);
/**
 * Script {
  type: 'Program',
  body:
   [ VariableDeclaration {
       type: 'VariableDeclaration',
       declarations: [Array],
       kind: 'const' } ],
  sourceType: 'script' }
 */

const estraverse = require('estraverse');

estraverse.traverse(ast, {
  enter: function(node) {
    node.kind = 'var';
  }
});
console.log(ast);
/**
 * Script {
  type: 'Program',
  body:
   [ VariableDeclaration {
       type: 'VariableDeclaration',
       declarations: [Array],
       kind: 'var' } ],
  sourceType: 'script',
  kind: 'var' }
 */

const escodegen = require('escodegen');
const transformCode = escodegen.generate(ast);
console.log(transformCode); // var a = 1;

