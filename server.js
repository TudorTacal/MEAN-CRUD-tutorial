/*jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
// The urlencoded method within body-prser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
var db;

MongoClient.connect("mongodb://tudor:Meantutorial10!@ds127429.mlab.com:27429/mean-tutorial", (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});



app.get('/', (req, res) => {
  db.collection('quotes').find().toArray(function(err,results) {
    if (err) return console.log(err);
    res.render('index.ejs', {quotes: results});
  });
});
// replaced the function with the arrow function
// Note: request and response are usually written as req and res respectively.

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});
// Express allows us to add middlewares like body-parser to our application with the use method.
// You’ll hear the term middleware a lot when dealing with Express. These things are basically plugins that
// change the request or response object before they get handled by our application.

app.put('/quotes', (req, res) => {
  
});
