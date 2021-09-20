// const chalk = require('chalk');
// const os = require('./os.js');
// const cows = require('cows');
import chalk from 'chalk'
import os from './os.js';
import cows from 'cows';
//console.log(chalk.blue('Hello world!'));
//console.log(os.type());
//console.log(os.platform());
//console.log(os.version());
//console.log(chalk.red(cows()[0]));
const index = {os, cows, chalk}

export default index;
// module.exports = index;


// const http = require('http');
// const index = require('./index.js');
