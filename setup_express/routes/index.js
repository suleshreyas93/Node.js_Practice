var homeRoutes = require("./home");
var page2Routes = require("./page2");
var path = require("path");

var constructorMethod = (app) => {

    app.use("/",homeRoutes);
    app.use("/page2",page2Routes);
}

module.exports = constructorMethod;