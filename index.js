// Import libraries
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tempratureRoutes = require('./src/routes');

// Initiate express
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use('/api', tempratureRoutes);

// Connect to database
mongoose.connect(`mongodb://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true });

// Variables
const port = process.env.PORT || 3000;
const ip = "10.8.40.234";

// create routes
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://${ip}:${port}`);
});