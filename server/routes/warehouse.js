const express = require('express');
const router = express.Router();
const {jsonReader, jsonWriter} = require('./jsonFunctions');


router.post('/', (req, res) => {
    const userInput = JSON.stringify(req.body)
    res.send(userInput);
})


module.exports = router;