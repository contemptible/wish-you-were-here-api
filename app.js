require('dotenv').config();

const { CLIENT_ORIGIN } = require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const themeParks = require('themeparks');
const $ = require('jquery');
const weather = require('./weather.js');
const attractions = require('./attractions.js');

const app = express();


app.use(cors({
  origin: CLIENT_ORIGIN
}));


app.get('/weather/:zip', (req, res) => {
  weather(req.params.zip)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.log(err);
    });
});


app.get('/attractions/:rideID', (req, res) => {
  attractions(req.params.rideID)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.log(err);
    });
});


app.listen(process.env.PORT || 8080, () => {
  console.log("The app is listening...");
});