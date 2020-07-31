const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
    res.render("index");
});
router.get("/login",function(req,res){
    res.render("login",{page:"login"});
});
router.get("/signup",function(req,res){
    res.render("signup",{page:"signup"});
});

module.exports = router;