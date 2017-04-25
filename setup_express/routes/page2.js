var express = require("express");
var router = express.Router();


var users = [
    {
        Name : "Shreyas Sule",
        University : "Stevens Institute of Technology",
        Age : "23"
    },
    {
        Name : "Virendra Vyas",
        University : "University of Illnois Chicago",
        Age : "23"
    },
    {
        Name : "Chinmay Keskar",
        University : "Northeastern University Boston",
        Age : "24"
    }
]
router.get("/",function(req,res){
    res.render("page2",{
        users : users
    });
})

module.exports = router;