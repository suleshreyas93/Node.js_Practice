var express = require("express");
var bodyParser = require("body-parser");
var exhbs = require("express-handlebars");
var expressValidator = require("express-validator");
var path = require("path");

//Init app
var app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//View Engine
app.set("views",path.join(__dirname,"views"));
app.engine("handlebars",exhbs({defaultLayout : "main"}));
app.set("view engine","handlebars");

//Set Static Folder
app.use(express.static(path.join(__dirname,"public")));

//Global Variables
app.use(function(req,res,next){
    res.locals.errors = null;
    next();
})

//Express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//Configure Routes
var configureRoutes = require("./routes");
configureRoutes(app);

app.listen(3000,function(){
    console.log("Server running on port 3000...");
})