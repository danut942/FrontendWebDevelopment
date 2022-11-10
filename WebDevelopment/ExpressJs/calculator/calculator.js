const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req,res){
    res.sendFile(__dirname + "/index.html");
});


app.get("/bmiCalculator", function (req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/", function(req,res){
    // console.log(req.body);
    // console.log(req.body.num1);
    // res.send("Thanks");

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is" + result)
})

app.post("/bmiCalculator", function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var resultBMI = weight / (height * height);
    res.send("Yout BMI is " + resultBMI);
})
app.listen("3000", function (req,res){
    console.log("The app started on port 3000");
});