const express = require("express");
const router = express.Router();

const warehouseList = require('../data/locations.json');
const inventoryList = require('../data/inventory.json');

router.get('/:id', (req, res) => {
  const warehouseData = warehouseList.find(item => {
    return req.params.id === item.id;
  });

  const inventoryData = inventoryList.filter(item => {
    return req.params.id == item.warehouseId
  });

  if (warehouseData == undefined) {
    res.status(404).send('Warehouse not found');
  }

  else {
    const data = {
      ...warehouseData,
      inventory: inventoryData
    };

    res.json(data);
  }
})

router.get("/", (_, res) => {
  res.status(200).send(warehouseList);
});

router.post("/", (req, res) => {
  let keys = Object.keys(req.body);
  if (
    keys.includes("id") &&
    keys.includes("name") &&
    keys.includes("address") &&
    keys.includes("contact") &&
    keys.includes("inventoryCategories")
  ) {
    warehouseList.push(req.body);
    res.status(201).send(warehouseList);
  } else {
    res.status(400).send("Error: invalid request body");
  }
});

module.exports = router;
