const express = require('express');
const router = express.Router();
const db = require('../db');
const random = require('./otpRandom');

router.post('/',(req,res) => {
    try {
        let email = req.body.email;
        db.query(" SELECT * FROM user WHERE email = ? ", [email], async (error, results_email, fields) => {
        // console.log(results_email)
        let user_id = results_email[0].id;
        // console.log(user_id)
        let myotp = await random.myOtp();
        // console.log(myotp)
        let ref = await random.makeid()
        // console.log(ref)
            
        db.query(" INSERT INTO otp(otp, user_id, ref) VALUE(?,?,?)",[myotp,user_id,ref ],async (error,results_otp,fields) => {
            console.log(results_otp) 
        if (results_email.length > 0) {
            return res.status(201).json(results_otp);
        } else {
            return res.status(201).json("Err: This email could not be found in the system, please try again.")
        }
        })
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
    
})

router.post('/check', (req,res) => {
    try {
        let otp = req.body.otp;
        let status = req.body.status;
        db.query(" SELECT * FROM otp WHERE otp = ? ", [otp], async (error, results_otp, fields) => {
            console.log(results_otp)
        db.query("INSERT INTO otp(status) VALUE(?)", [status], async (error, results_status, fields) => {
            // console.log(results_status)
            
        if (results_otp.length > 0) {
            return res.status(201).json(results_otp);
        } else {
            return res.status(201).json("Err: Invalid OTP code, please try again.")
        }
        }) 
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
})
   
   
module.exports = router;