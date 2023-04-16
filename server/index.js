const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send({
    message: "Test Message",
  });
});

app.listen(3001);
