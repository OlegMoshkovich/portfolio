var fs = require('fs');
var express = require("express");
var app = express();

var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var bodyParser= require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'drive-nodejs-quickstart.json';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());







app.get('/', function(req,res){
       res.sendfile(__dirname + '/public/hello.html');
});

app.get('/hello', function(req,res){
      res.sendfile(__dirname+'/public/hello.html');
});

// app.get('/hc', function(req,res){
//        res.sendfile(__dirname + '/public/hc.html');
// });

app.get('/radial', function(req,res){
        res.sendfile(__dirname + '/public/sample_radial hierarchy.html');
});

app.get('/hc-dependencies', function(req,res){
        res.sendfile(__dirname + '/public/hc-dependencies.html');
});

// app.get('/hc-analytics', function(req,res){
//        res.sendfile(__dirname + '/public/hc-analytics.html');
// });

// app.get('/edgeBinding', function(req,res){
//        res.sendfile(__dirname + '/public/edgeBinding.html');
// });

// app.get('/tutorial', function(req,res){
//        res.sendfile(__dirname + '/public/d3-tutorial.html');
// });

// app.get('/simplechart', function(req,res){
//        res.sendfile(__dirname + '/public/simple_chart.html');
// });

app.get('/hcs-ecosystem-current', function(req,res){
        res.sendfile(__dirname + '/public/hcs-ecosystem-current.html');
});

app.get('/hcs-ecosystem-future', function(req,res){
        res.sendfile(__dirname + '/public/hcs-ecosystem-future.html');
});

app.get('/hcs', function(req,res){
        res.sendfile(__dirname + '/public/hcs.html');
});

app.get('/important', function(req,res){
        res.sendfile(__dirname + '/public/hc_important.html');
});

app.post('/important',parseUrlencoded, function(req,res){
        
        var input = req.body;
console.log("i am hitting post endpoint");
res.json();
    
    
});


app.get('/google', function(req,res){
        res.sendfile(__dirname + '/public/google.html');
});
app.get('/google_chart', function(req,res){
        res.sendfile(__dirname + '/public/google_chart.html');
});







app.listen(process.env.PORT, process.env.IP, function(){
  console.log(" I am listening on some port");
});

