var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 4567;

app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.header("Access-Control-Allow-Origin", "*") 
  res.sendFile('/index');
});

server.listen(port, function(){
  console.log('server running on port ' + port);
});