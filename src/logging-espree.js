const fs = require("fs");
const escodegen = require("escodegen");
const espree = require("espree");
const estraverse = require("estraverse");

/**
 * Read the file with the js program, calls addLogin to add the login messages and writes the output
 * @param {string} input_file - The name of the input file
 * @param {string} output_file - The name of the output file
 */

function transpile(input_file, output_file) {
}

/** 
 * Builds the AST and
 * Traverses it searching for function nodes and callas addBeforeNode to transform the AST
 * @param {string} code -the source code 
 * @returns -- The transformed AST 
 */
function addLogging(code) {
}

/**
 * AST transformation
 * @param {AST function type node} node 
 */
function addBeforeCode(node) {
}

module.exports = {
  transpile,
  addLogging,
  addBeforeCode,
};
