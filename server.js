var express = require("express");

var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
       res.sendfile(__dirname + '/public/hello.html');
});

app.get('/hello', function(req,res){
      res.sendfile(__dirname+'/public/hello.html');
});

app.get('/hc', function(req,res){
       res.sendfile(__dirname + '/public/hc.html');
});

app.get('/radial', function(req,res){
       res.sendfile(__dirname + '/public/radial.html');
});

app.get('/hc-dependencies', function(req,res){
       res.sendfile(__dirname + '/public/hc-dependencies.html');
});


app.listen(process.env.PORT, process.env.IP, function(){
  console.log(" I am listening on some port");
});