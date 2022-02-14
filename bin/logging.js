#!/usr/bin/env node

const {program} = require('commander');
const {version, description} = require('../package.json');
const { transpile } = require('../src/logging-espree.js')
program
    .name("jslogging")
    .version(version)
    .description(description)
    .argument("<filename>", 'file with the original code')
    .option("-o, --output <filename>", "file in which to write the output", "output.js")
    .action((filename, options) => {
       transpile(filename, options.output);
    });

program.parse(process.argv);


