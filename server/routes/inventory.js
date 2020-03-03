const express = require("express");
const router = express.Router();
const inventoryList = require("../data/inventory.json");

router.get("/", (_, res) => {
  res.json(inventoryList);
  res.status(200).send();
});

module.exports = router;
