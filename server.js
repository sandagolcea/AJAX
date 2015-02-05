var app = require('express')();
var server = require('http').createServer(app);
var port = 4567;

var sleep=require('sleep');

app.get('/', function(req, res){
  sleep.sleep(2);
  res.header("Access-Control-Allow-Origin", "*") 
  res.json(new Date);
});

server.listen(port, function(){
  console.log('server running on port ' + port);
});