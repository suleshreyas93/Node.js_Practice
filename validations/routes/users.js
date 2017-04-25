var express = require("express");
var router = express.Router();

//Display submitted data on user's page
router.post("/",function(req,res){

    req.checkBody("fnm","First Name is required").notEmpty();
    req.checkBody("lnm","Last Name is required").notEmpty();
    req.checkBody("email","Email is required").isEmail();

    var errors = req.validationErrors();

    if(errors)
    {
        res.render("home",{
            errors : errors
        });
       // console.log("ERRORS")
    }
    else
    {
        var newUser = [

            {

            firstName : req.body.fnm,
            lastName : req.body.lnm,
            email : req.body.email
            }
        ] 
        
        

        res.render("users",{
            users : newUser
        });
    }
})

module.exports = router