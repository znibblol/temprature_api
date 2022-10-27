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
// router.get('/deleteAll', (req, res) => {
//     const data = SensorData.find({}, (err, data) => {
//         if(err) {
//             consol.log(err);
//         } else {
//             const id_arr = data.map(element => element._id);
//             id_arr.forEach(element => {
//                 SensorData.deleteOne({_id: element}, (err) => {
//                     if(err) {
//                         console.log(err);
//                     } else {
//                         console.log("Deleted");
//                     }
//                 });
//             });
//         }
//     });
// });

router.post('/add', (req, res) => {
    const dateTime = new Date(Date.now()).toISOString();
    const newData = new SensorData(req.body, dateTime);
    newData.save()
    .then(response => {
        res.status(401);
        res.json({success: true,
            data: response
        });
    })
    .catch(err => {
        res.json({success: false,
            message: err.message
        });
    })
});

module.exports = router;