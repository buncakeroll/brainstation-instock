const express = require("express");
const router = express.Router();
const inventoryList = require("../data/inventory.json");
const { jsonReader, jsonWriter } = require('./jsonFunctions');

router.get("/", (_, res) => {
  res.json(inventoryList);
  res.status(200).send();
});

router.get('/inventory/:id', (req, res) => {
    const data = inventoryList.find(item => {
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
