const express = require("express");
const cors = require("cors");
const warehouseRoute = require("./routes/warehouse");
const inventoryRoute = require("./routes/inventory");

const serverPort = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/inventory", inventoryRoute);
app.use("/warehouse", warehouseRoute);

app.listen(serverPort, () => {
  console.log(`Listening on ${serverPort}`);
});
