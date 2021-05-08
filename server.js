const express = require('express');
const app = express();

const kdrama = require('./mocks/kdrama.json');
const vehicles = require('./mocks/vehicles.json');

// heartbeats endpoint get to check if express server is 
//  sending data
app.get('/heartbeats', (req, res) => {
  res.json({
    "is" : "working"
  })
  // res.send("hi I am alive!")
});

app.get('/kdrama', (req, res) => {
  res.json(kdrama)
});

app.get('/vehicles', (req, res) => {
  res.json(vehicles)
});

// listen at port 8080
app.listen('8080', () => {
  console.log("The server is running at port 8080!");
});