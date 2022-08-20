const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

app.use("/api/v1", (req, res) => {
  res.json({ message: "API is up and running..." });
});

app.listen(port, () =>
  console.log(`Server is listening on port http://localhost:${port}`)
);
