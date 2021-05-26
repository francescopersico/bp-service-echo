const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
  const body = req.body;

  res.json(body);
});

app.listen(port);
