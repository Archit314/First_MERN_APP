const express = require('express')
const router = express.Router()

console.log('reached');

router.get('/', (req, res, next) => {
    console.log(`Get request in user auth route`);
    res.json({message: 'It works'})
})

module.exports = router