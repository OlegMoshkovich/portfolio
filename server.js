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
app.use(bodyParser.json());



app.get('/hello', function(req,res){
      res.sendfile(__dirname+'/public/hello.html');
});
app.get('/analytics', function(req,res){
      res.sendfile(__dirname+'/public/analytics.html');
});

app.post('/analytics',parseUrlencoded, function(req,res){
        var input = req.body;
        console.log(input);
        var inputData = [input.data, input.time];
        res.json(inputData);
        
});

app.get('/boss', function(req,res){
        res.sendfile(__dirname + '/public/zekazec.html');
});

app.get('/radial', function(req,res){
        res.sendfile(__dirname + '/public/sample_radial hierarchy.html');
});

app.get('/hc-dependencies', function(req,res){
        res.sendfile(__dirname + '/public/hc-dependencies.html');
});


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
        console.log(input);
        var inputData = [input.branch, input.node, input.link];
        res.json(inputData);
});

app.get('/61B', function(req,res){
        res.sendfile(__dirname + '/public/hc_61B_map.html');
});

app.post('/61B',parseUrlencoded, function(req,res){
        var input = req.body;
        console.log(input);
        var inputData = [input.branch, input.node, input.link];
        res.json(inputData);
});


app.get('/google', function(req,res){
        res.sendfile(__dirname + '/public/google.html');
});
app.get('/google_chart', function(req,res){
        res.sendfile(__dirname + '/public/google_chart.html');
});


app.get('/test', function(req,res){
        res.sendfile(__dirname + '/public/jsonTest.html');
});


app.listen(process.env.PORT, process.env.IP, function(){
  console.log(" I am listening on some port");
});

