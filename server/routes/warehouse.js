const express = require('express');
const router = express.Router();
const warehouseList = require('../data/locations.json');


router.post('/', (req, res) => {
    let keys = Object.keys(req.body);
    if (keys.includes('id') && keys.includes('name') && keys.includes('address') && keys.includes('contact') && keys.includes('inventoryCategories')) {
        warehouseList.push(req.body);
        res.status(201).send(warehouseList);
    } else {
        res.status(400).send('Error: invalid request body');
    }
})


module.exports = router;