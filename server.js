/*jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
app.use(bodyParser.urlencoded({extended: true}));
// The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.


//  The first thing we want to do is to create a server
//  where browsers can connect to. We can do so with the help of a
//  listen method provided by Express:
app.listen(3000, function () {
  console.log("listening on 3000");
});

// That’s a good sign. It means we can now communicate to our express server through the browser.

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // Note: __dirname is directory that contains the JavaScript source code.
});
// replaced the function with the arrow function
// Note: request and response are usually written as req and res respectively.

app.post('/quotes', (req, res) => {
  console.log(req.body);
});
// Express allows us to add middlewares like body-parser to our application with the use method.
// You’ll hear the term middleware a lot when dealing with Express. These things are basically plugins that
// change the request or response object before they get handled by our application.
