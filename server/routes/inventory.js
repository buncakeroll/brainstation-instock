const express = require("express");
const router = express.Router();
const inventoryList = require('../data/inventory.json');

router.post('/', (req, res) => {
    //Unclear of required axios.post body
    let keys = Object.keys(req.body);
    if (keys.includes('name') && keys.includes('description') && keys.includes('quantity') && keys.includes('lastOrdered') && keys.includes('city')
    && keys.includes('country') && keys.includes('isInstock')) {
        inventoryList.push(req.body);
        res.status(201).send(inventoryList);
    } else {
        res.status(400).send('Error: invalid request body');
    }
})

router.get("/", (_, res) => {
  res.json(inventoryList);
  res.status(200).send();
});

router.get("/inventory/:id", (req, res) => {
  const data = inventoryList.find(item => {
    return req.params.id === item.id;
  });
  if (data == undefined) {
    res.status(404).send("Item not found");
  } else {
    res.json(data);
  }
});

module.exports = router;
