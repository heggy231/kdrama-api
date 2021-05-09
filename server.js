const express = require('express');
const app = express();

// fetch data and assign to value
const kdramas = require('./mocks/kdrama.json');
const vehicles = require('./mocks/vehicles.json');

// create a heartbeats endpoint get to check if express server is 
//  sending data
app.get('/heartbeats', (req, res) => {
  res.json({
    "is" : "working"
  })
  // res.send("hi I am alive!")
});

// test to see if I could send string to res.send()
app.get('/test', (req, res) => {
  res.send(`
    <body style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/rectangle-overlay.png), url('https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fwinter-calm-background.jpeg?v=1620561758843'); background-position: center center; background-repeat: no-repeat; background-attachment: fixed; background-size: cover; background-color: #5e6cd3b8">
      <h1>this is test!!</h1> <h1>this is test2!!</h1>
    </body>
  `);
});

app.get('/all', (req, res) => {
  let dramaHTML = kdramas.map((kdrama, index) => {
    return `
      <li id="result-drama-${index}" style="display:flex; align-items:center; flex-direction:column; align-content:space-between; justify-content:center; padding:0.2rem 0.5rem">
        <a style="font-size:2rem; font-family:fantasy; background: radial-gradient(#79265059, #a24da2, transparent); padding:0.5rem 1.2rem; margin-bottom: 0.3rem; text-decoration:none; font-weight:bold; border-radius:1.75rem; cursor:pointer; color:#FFFFFF;" href="${kdrama.homeURL}">${kdrama.title}</a>
        <img style="width: 26rem; border-radius: 1.75rem;"src="${kdrama.poster}" alt="${kdrama.title}">
        <video style="border-radius: 1.75rem; border:solid 1px purple; margin-top:0.5rem;" width="420" controls>
          <source src="${kdrama.ostvideo}" type="video/mp4">
        </video>
      </li>
    `;
  });
  res.send(`
    <body style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/rectangle-overlay.png), url('https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fwinter-calm-background.jpeg?v=1620561758843'); background-position: center center; background-repeat: no-repeat; background-attachment: fixed; background-size: cover; background-color: #5e6cd3b8">
      <div style="display:flex; padding:.5rem 1rem; align-items:center">
        <ul style="list-style:none; display:flex; align-items:baseline; flex-wrap:wrap; justify-content:center; align-content:space-around;">
          ${dramaHTML.join("")}
        <ul>
      </div>
    </body>
  `);
});

app.get('/channel', (req, res) => {
  // console.log(req.query);
  let dramaHTML = ["<h1>No Korean Dramas here!</h1>---<h2>Please specify which channel by passing it through the query parameter.</h2>"];
  // res.json(kdrama)
  // search term filtering query param channel
  if(req.query.channel) {
    const reqChannel = req.query.channel.toLowerCase();
    
    dramaHTML = kdramas.filter(kdrama => {
      return kdrama.channel.toLowerCase().indexOf(reqChannel) > -1;
    }).map( (kdrama, index) => {
      return `
        <li id="result-drama-${index}" style="display:flex; align-items:center; flex-direction:column; align-content:space-between; justify-content:center; padding:0.2rem 0.5rem">
          <a style="font-size:2rem; font-family:fantasy; background: radial-gradient(#79265059, #a24da2, transparent); padding:0.5rem 1.2rem; margin-bottom: 0.3rem; text-decoration:none; font-weight:bold; border-radius:1.75rem; cursor:pointer; color:#FFFFFF;" href="${kdrama.homeURL}">${kdrama.title}</a>
          <img style="width: 26rem; border-radius: 1.75rem;"src="${kdrama.poster}" alt="${kdrama.title}">
          <video style="border-radius: 1.75rem; border:solid 1px purple; margin-top:0.5rem;" width="420" controls>
            <source src="${kdrama.ostvideo}" type="video/mp4">
          </video>
        </li>
      `;
    });

    // if (dramaHTML.length === 0) {
    //   dramaHTML = ['Not Found'];
    // }
  }
  res.send(`
    <body style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/rectangle-overlay.png), url('https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fwinter-calm-background.jpeg?v=1620561758843'); background-position: center center; background-repeat: no-repeat; background-attachment: fixed; background-size: cover; background-color: #5e6cd3b8">
      <div style="display:flex; padding:.5rem 1rem; align-items:center">
        <ul style="list-style:none; display:flex; align-items:baseline; flex-wrap:wrap; justify-content:center; align-content:space-around;">
          ${dramaHTML.join("")}
        <ul>
      </div>
    </body>
  `);
});


app.get('/vehicles', (req, res) => {
  res.json(vehicles)
});

// listen at port 8080
app.listen('8080', () => {
  console.log("The server is running at port 8080!");
});