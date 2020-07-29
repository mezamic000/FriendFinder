//Dependencies - series of npm packages that will be used 
var express = require("express");
var path = require("path");
var fs = require("fs")

// Express Configuration
var app = express();

// Initial port
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});