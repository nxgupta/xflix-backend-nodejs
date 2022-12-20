const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const DB_URI = config.mongoose.url;
const options = config.mongoose.options
mongoose.connect(DB_URI, options)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(error => {
    console.log('Error occurred while connecting to MongoDB:', error);
  });

app.listen(config.port, () =>
  console.log(`Listening on port :: ${config.port}`)
);
