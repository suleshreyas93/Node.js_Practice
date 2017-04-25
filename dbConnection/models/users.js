var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    email : {
        type : String
    }
})

var User = module.exports = mongoose.model("User",userSchema);

module.exports.getUser = function(user,callback){
    
    User.find(user,callback);
}

module.exports.addUser = function(user,callback){
    User.create(user,callback);
}

