"use strict";

// [START gae_node_request_example]
const express = require("express");
const secretHelper = require("./secretHelper");
const isRunningOnGoogleCloud = process.env.GOOGLE_CLOUD_SHELL !== undefined;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!").end();
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("isRunningOnGoogleCloud: %s", isRunningOnGoogleCloud);
  if (isRunningOnGoogleCloud) {
    secretHelper.accessSecretVersion();
  }
});
// [END gae_node_request_example]

module.exports = app;
