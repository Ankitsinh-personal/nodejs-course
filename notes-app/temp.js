const add = require('./utils')
const validator = require('validator');
const chalk = require('chalk');

//use other file as module
const sum = add(3,4);
console.log("sum:",sum);

//validator  npm pkg
console.log(validator.isEmail('a@abc.com'));

//color picker npm pkg
const errMsg = chalk.red.inverse.bold("error !!");
console.log(errMsg);

// process inbuilt pkg
const command = process.argv[2];
if(command === 'add'){
    console.log("add notes !");
}
else if(command === 'remove'){
    console.log("remove notes !");
}