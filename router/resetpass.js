const express = require('express');
const router = express.Router();
    // * router
const db = require('../db');
const encode = require('../router/encode');

router.put("/", async (req, res) => {
    try { 
        const email = req.body.email;
        const password = req.body.password;
        let passwordhash = await encode.encryptPassword(password)
        db.query('UPDATE user SET `password` = ? WHERE email = ?', [passwordhash,email],(err, results, fielde) => {
            console.log(results)
            
                return res.status(201).json('Password changed successfully.');
            
        })
    } catch(err) {
        console.log(err);
        return res.status(400).send();
    }
})

module.exports = router;