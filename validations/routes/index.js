var homeRoutes = require("./home");
var userRoutes = require("./users");

var constructorMethod = function(app){
    app.use("/",homeRoutes);
    app.use("/users",userRoutes);
}

module.exports = constructorMethod