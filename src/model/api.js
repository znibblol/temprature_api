const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SensorData = new Schema({
    dev_id: String,
    location: String,
    temp: Number,
    hum: Number,
    time: Date
});

module.exports = mongoose.model('SensorData', SensorData);