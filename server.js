const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Hello from AWS Server ${process.env.MESSAGE}`,
  });
});

app.listen(8000, () => {
  console.log("Server is running");
});
