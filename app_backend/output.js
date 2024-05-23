const a = 1
const b = 2
console.log(a+b);


const printLogs = () => console.trace();    // to get traces of function callling 


const callPringLogFunction = () => printLogs();

callPringLogFunction()