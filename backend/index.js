const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const express = require("express");
const DB_URI = config.mongoose.url;
mongoose
  .connect(`${DB_URI}`, {
    useNewUrlParser: true,

  })
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to connect to DB"));

app.listen(`${config.port}`, () =>
  console.log(`App is running on port :: ${config.port}`)
);
