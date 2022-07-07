const express = require('express');
const router = express.Router();
    // * import router
let db = require('../db');

router.post('/', (req,res) => {
    try {
        let user_id = req.body.user_id;         
        let latitude = req.body.latitude;       
        let longitude = req.body.longitude;     
        let date_time = req.body.date_time;     
        let status = req.body.status; // * รับสถาณะของ user (check-in , check-out)
        
        db.query("INSERT INTO checkin(user_id, date_time, latitude, longitude,status) VALUES(?,?,?,?,?)",[user_id, date_time, latitude, longitude,status], function(err, results, fields) {
            if (results != 0) {
                console.log("Check-in is complete.");
                console.log(results)
                return res.status(400).send(results);
            }
            return res.status(201).json("Err Check-in failed Please try again.")
        }
    )
} catch(err) {
    console.log(err);
    return res.status(400).send();
}
    
});
module.exports = router;