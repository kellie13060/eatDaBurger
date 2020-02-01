var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//links the public directory and uses it. 
app.use(express.static("public"));

//parse body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlbar
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("veiw engine", "handlebars");

//import routes and give server access
var routes = require("./controller/burgers_controller.js");

app.use(routes);

//start server
app.listen(PORT, function() {
    //console log that the server has started
    console.log("Server listening on: http://localhost:" + PORT);
});