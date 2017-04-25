var express = require("express");
var router = express.Router();

//Display Users
router.post("/",function(req,res){
    
    var firstName = req.body.fnm;
    var lastName = req.body.lnm;
    var university = req.body.uni;
    var major = req.body.major;

    var users = [

        {
            fnm : firstName,
            lnm : lastName,
            uni : university,
            major : major
        }

    ]
    

    res.render("users",{
        users : users
       
    })
})

module.exports = router;