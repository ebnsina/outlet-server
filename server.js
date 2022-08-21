const { readdirSync } = require("fs");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const connectToDB = require("./libs/db");

connectToDB();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(cors());

readdirSync("./routes").map((route) =>
  app.use("/api/v1", require(`./routes/${route}`))
);

app.use("/", (req, res) => {
  res.json({
    message: "API is up and running...",
  });
});

app.listen(port, () =>
  console.log(`Server is listening on port http://localhost:${port}`)
);
