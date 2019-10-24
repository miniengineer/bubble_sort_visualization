const express = require("express");

const path = require("path");

// Initializing express
const app = express();

// Create a port
const port = process.env.PORT || 4000;

// Have it serve up the index.html file
app.use(express.static(path.join(__dirname)));

// The PORT that our server sits on
app.listen(port, function() {
  console.log("Bubble sorting app listening on " + port + "!");
});
