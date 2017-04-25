var express = require("express");
var User = require("../model/users");
var router = express.Router();

//Get users page
router.get("/",function(req,res){
    User.getUser(function(err,callback){
        if(err){
            throw err
        }
        
        res.render("users",{
          callback : callback
        })
        
    })
});

router.post("/",function(req,res){
    
    req.checkBody("fnm","First Name is required").notEmpty();
    req.checkBody("lnm","Last Name is required").notEmpty();
    req.checkBody("email","Email invalid").isEmail();

    var errors = req.validationErrors();

    if(errors)
    {
        res.render("home",{
            errors : errors
        })
    }
    else
    {
        var newUser = {
            first_name : req.body.fnm,
            last_name : req.body.lnm,
            email : req.body.email
        }
        User.addUser(newUser,function(err,newUser){
            if(err){
                throw err
            }
        })
        res.redirect("users");
        
    }
    
})
module.exports = router;