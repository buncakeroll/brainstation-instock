const express = require("express");
const cors = require("cors");

const serverPort = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(serverPort, () => {
  console.log(`Listening on ${serverPort}`);
});
