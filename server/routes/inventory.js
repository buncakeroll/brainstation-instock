const express = require('express');
const router = express.Router();
const inventoryData = require('./../data/inventory.json');
const { jsonReader, jsonWriter } = require('./jsonFunctions');

router.get('/inventory/:id', (req, res) => {

    const data = inventoryData.find(item => {
        return req.params.id === item.id;
    });

    if (data == undefined) {
        res.status(404).send('Item not found');
    }

    else {
        res.json(data);
    }
})

module.exports = router;