var config = require("./config");
Object.assign(process.env, config[process.argv[2]]);
const express = require("express");
const multer=require("multer");
const bodyParser = require('body-parser');
const app = express();
var jsonparser=bodyParser.json();
var urlencoded=bodyParser.urlencoded({extended:false});
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");


var upload=multer({
    dest:'./public/uploads'}).single('profilePhoto');



app.get("/", (req, res) => {
    res.render("home");
});
app.post('/profile-upload', function(req, res) {
    console.log('hi');
   /* upload(req, res, function(err) {
        if(err) {
            console.log('Error Occured');
            console.log(err);
            return;
        }
        console.log(req.file);
       // res.end('Your File Uploaded');
        console.log('Photo Uploaded');
    })*/
});
/*
app.post('/durga',urlencoded,(req,res)=>{
        //res.json({name:"hello"})

    console.log(req.body);
})
*/
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`server is running ${process.env.HOST}:${process.env.PORT}`);
})