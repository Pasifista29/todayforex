var express = require('express')
var app = express();
var PORT = 9000
var router1 = express.Router();
var router2 = express.Router();
var router3 = express.Router();

router1.get('/',function(req,res,next){
    console.log("User Router Working");
    res.send("This is my home page");
})

router2.get('/admin',function(req,res,next){
    console.log("Admin Router Working");
    res.send("This is my admin page");
})

router3.get('/student',function(req,res,next){
    console.log("Student Router Working");
    res.end("This is my student page");
})

app.use(router1);
app.use(router2);
app.use(router3);

app.listen(PORT,function(err){
    if(err)console.log(err)
    console.log("server listening on PORT: ",PORT);
})