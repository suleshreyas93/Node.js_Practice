var express = require("express");
var bodyParser = require("body-parser");
var exhbs = require("express-handlebars");
var path = require("path");

//Init app
var app = express();

//View Engine
app.set("views",path.join(__dirname,"views"));
app.engine("handlebars",exhbs({defaultLayout : "layout"}));
app.set("view engine","handlebars");

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//Set Static Folder
app.use(express.static(path.join(__dirname,"public")));

//Configure Routes
var configRoutes = require("./routes");
configRoutes(app);

app.listen(3000,function(){
    console.log("Server running on port 3000...");
})