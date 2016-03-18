var express = require('express');
var bodyParser = require('body-parser')
var pg = require('pg');
var app = express();
var conString = (process.env.DATABASE_URL || "postgres://fhirbase:fhirbase@localhost/crudsample");

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json())

app.get('/', function(request, response) {
  response.render('index'); });

var db = function (q, p, resp){
  pg.connect(conString, function(err, client, done) {
    if(err) 
      return resp.send('error fetching client from pool'+ err); 
    client.query(q, p, function(err, result) {
      done();
      if(err) 
        return resp.send('error running query' + err);
      resp.send(result.rows);
    });
  });
}

app.get('/items', function(request, response) {
  db('SELECT * FROM items order by id desc;', [], response)});

app.post('/items', function(request, response) {
  db('insert into items (data) values($1);', [request.body], response) });

app.delete('/items', function(request, response) {
  db('truncate table items;', [], response) });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port')); });

