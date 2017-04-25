var infoRoutes = require("./info");
var userRoutes = require("./users");

var constructorMethod = function(app){
    app.use("/",infoRoutes);
    app.use("/users",userRoutes);
}

module.exports = constructorMethod