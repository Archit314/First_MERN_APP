// Third party imports
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

// File imports
const userAuthRoute = require('./routes/UserAuthRoute')

const app = express()
console.log(`server started`);
app.use(userAuthRoute)

app.listen(process.env.PORT)