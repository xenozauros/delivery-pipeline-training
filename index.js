var newrelic = require('newrelic');

var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();
var conString = process.env.DATABASE_URL || "postgres://crudtest:crudtest@localhost/crudtest";
console.log("DB config: ", conString );


app.locals.newrelic = newrelic;
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json());

var db_init = "CREATE TABLE IF NOT EXISTS items (id serial PRIMARY KEY , data JSON);";

exports.init_db = function(cb){
  pg.connect(conString, function(err, client, done) {
      console.log("INIT DB");
      console.log("Connected to DB", process.env.DATABASE_URL);
      if(err) {
        console.log('error fetching client from pool', err);
      }
      client.query(db_init, [], function(err, result) {
          if(err) {
            console.log("ERROR", 'error running query' , err);
          }else {
            console.log("INIT DB is finished");
            if (cb) { cb(); }
          }
          done();
      });
  });
}

var db = function (q, p, resp){
    console.log("SQL:", q);
    pg.connect(conString, function(err, client, done) {
        if(err)
            return resp('error fetching client from pool'+ err);
        client.query(q, p, function(err, result) {
            done();
            if(err)
                return resp('error running query' + err);
            resp(result.rows);
            return null;
        });
        return null;
    });
};

app.get('/', function(request, resp) {
    console.log("GET /");
    resp.render('index');
});

exports.items = function (req, cb){
   db('SELECT * FROM items order by id desc;', [], cb);
};

exports.create = function (req, cb){
    db('insert into items (data) values($1) returning *;', [req.body], cb);
};

exports.truncate = function (req, cb){
  db('truncate table items;', [], cb);
};

app.get('/items', function(request, resp) {
    console.log("GET /items");
    exports.items(request, function(x){ resp.send(x); });
});

app.post('/items', function(request, resp) {
    console.log("POST /items", request.body);
    exports.create(request, function(x){ resp.send(x); });
});

app.delete('/items', function(request, resp) {
    console.log("DELETE /items");
    exports.truncate(request, function(x){ resp.send(x); });
});

app.listen(app.get('port'), function() {
    exports.init_db(function(){});
    console.log('Server is running on port', app.get('port'));
});

