//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema ({
    email:String,
    password:String
});

const secret = "Thisisourlittlesecret";
userSchema.plugin(encrypt,{secret: secret, encryptedFields: ["password"]});

const User = new mongoose.model("User", userSchema);

app.get("/",function(req,res){
    res.render("home");
});

app.get("/login",function(req,res){
    res.render("login");
});

app.get("/register",function(req,res){
    res.render("register");
});

// register an user and render page if registered successfully
app.post("/register", function(req,res){
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save();
    res.render("secrets")
});

// check if we have user created and login
app.post("/login", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    async function runFindUser(){
        const foundUser = await User.findOne({email: username});

        if (foundUser.password === password){
            res.render("secrets");
        }
    }

    runFindUser().catch(console.dir);

    // ============================================ deprecated

    // User.findOne({email: username},function(err,foundUser){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         if (foundUser) {
    //             if (foundUser.password === password){
    //                 res.render("secrets");
    //             }
    //         }
    //     }
    // })

});





app.listen(3000,function(){
    console.log("Server started on port 3000.");
})