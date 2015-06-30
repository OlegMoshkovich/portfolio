var express = require("express");

var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
       res.sendfile(__dirname + '/public/hello.html');
});

app.get('/hello', function(req,res){
      res.sendfile(__dirname+'/public/hello.html');
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log(" I am listening on some port");
});