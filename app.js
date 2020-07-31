var express = require("express");
var app = express();
const route = require("./routes/index");

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use("/",route);


var port = 3000;
app.listen(port, function(){
    console.log("Port Listening : " + port);
});