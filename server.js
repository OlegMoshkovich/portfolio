var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'drive-nodejs-quickstart.json';






var express = require("express");

var app = express();

app.use(express.static('public'));

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

app.get('/google', function(req,res){
        res.sendfile(__dirname + '/public/google.html');
});






app.listen(process.env.PORT, process.env.IP, function(){
  console.log(" I am listening on some port");
});

