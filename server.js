/*jshint esversion: 6 */
const express = require('express');
const app = express();

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
  console.log("Heloooo!");
});
