const express = require('express');
const router = express.Router();
const SensorData = require('../model/api');

router.get('/', (req, res) => {
    const data = SensorData.find({} , (err, data) => {
        if(err) {
            console.log(err);
            res.json({success: false, message: err});
        } else {
            res.json({success: true, data: data});
        }
    });
});


// Use only for removing test data
router.get('/deleteAll', (req, res) => {
    const data = SensorData.find({}, (err, data) => {
        if(err) {
            consol.log(err);
        } else {
            const id_arr = data.map(element => element._id);
            id_arr.forEach(element => {
                SensorData.deleteOne({_id: element}, (err) => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Deleted");
                    }
                });
            });
        }
    }).then(response => {
        res.json({success: true, message: "Deleted all data"});
    })});

router.post('/add', (req, res) => {
    const {dev_id, location, temp, hum} = req.body;
    const dateTime = new Date(Date.now()).toISOString();
    const newData = new SensorData({dev_id: dev_id, location: location, temp: temp, hum: hum, time: dateTime});
    newData.save()
    .then(response => {
        res.status(201);
        res.json({success: true,
            data: response
        });
    })
    .catch(err => {
        res.status(500);
        res.json({success: false,
            message: err.message
        });
    })
});

module.exports = router;