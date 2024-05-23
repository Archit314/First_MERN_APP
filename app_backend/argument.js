// Write below command in the terminal
// Command: node argument.js name=White_Devil

const minimist = require("minimist");

// ------------------------- First way ------------------------
// console.log(process.argv.slice(2)[0])
// output for the above log will be -> name=White_Devil

// ------------------------- Second way ------------------------
// process.argv.forEach((value, index) => {
//     console.log(`indes: ${index} and value: ${value}`);
// })
// Output for the above log will be as below:
// indes: 0 and value: C:\Program Files\nodejs\node.exe
// indes: 1 and value: D:\White_Devil\Personal Project\First_MERN_APP\app_backend\argument.js
// indes: 2 and value: name=White_Devil

// ------------------------- Third way ------------------------
// console.log(process.argv);
// Output for the above log will be as below:
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\White_Devil\\Personal Project\\First_MERN_APP\\app_backend\\argument.js',
//     'name=White',
//     'Devil'
// ]

// ------------------------- Forth way ------------------------
// const argNew = process.argv.slice(2)[0]
// console.log(argNew);
// Output for the above log will be -> name=White_Devil

// ------------------------- Fifth way ------------------------
// write below command in the terminal for the below minimist process: node argument.js --name=White_Devil
const argNew = minimist(process.argv.slice(2))
console.log(argNew.name);