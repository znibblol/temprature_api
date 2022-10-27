require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;
const ip = "10.8.40.234";


// create routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://${ip}:${port}`);
});