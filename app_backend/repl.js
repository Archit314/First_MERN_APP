const repl = require('repl')

const local = repl.start(`REPL started successfully\n`)

local.on('exit', () => {
    console.log(`REPL stoped successfully`);
    process.exit()
})