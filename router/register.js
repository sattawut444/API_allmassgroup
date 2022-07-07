
const express = require('express');
const router = express.Router();
let encode = require('./encode');
let db = require('../db');

    // * Register user
router.post('/user', async (req, res,) => {
    try {
        let { name,sername,email,password,age,position,birthday,phone } = req.body;
        let passwordhash = await encode.encryptPassword(password);
        db.query("INSERT INTO user(name,sername,email,password,age,position,birthday,phone) VALUES(?,?,?,?,?,?,?,?)",
            [name,sername,email,passwordhash,age,position,birthday,phone],(err, results, fields) => {
                console.log(results)
                if (err) {
                    console.log("err inserting in database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "New user create"})
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(400).send();
    }
});
    // * Register user
router.post('/admin', async (req, res,) => {
    try {
        let { name,sername,email,password,age,position,birthday,phone } = req.body;
        let passwordhash = await encode.encryptPassword(password);
        db.query("INSERT INTO admin(name,sername,email,password,age,position,birthday,phone) VALUES(?,?,?,?,?,?,?,?)",
            [name,sername,email,passwordhash,age,position,birthday,phone],(err, results, fields) => {
                console.log(results)
                if (err) {
                    console.log("err inserting in database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "New admin create"})
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(400).send();
    }
});
    // * Register user
// router.post('/supperadmin', async (req, res,) => {
//     try {
//         let { name,sername,email,password,age,position,birthday,phone } = req.body;
//         let passwordhash = await encode.encryptPassword(password);
//         db.query("INSERT INTO supper_admin(name,sername,email,password,age,position,birthday,phone) VALUES(?,?,?,?,?,?,?,?)",
//             [name,sername,email,passwordhash,age,position,birthday,phone],(err, results, fields) => {
//                 console.log(results)
//                 if (err) {
//                     console.log("err inserting in database", err);
//                     return res.status(400).send();
//                 }
//                 return res.status(201).json({ message: "New Supper Admin create"})
//             }
//         )
//     } catch(err) {
//         console.log(err);
//         return res.status(400).send();
//     }
// });
module.exports = router;
/////////////////////////////
    // let { name,sername,email,username,password,age,position,birthday,phone } = req.body;
    // let errors = false;
    
    // if ( name.length === 0 || email.length === 0 ) {
    //     errors = true;

    //     req.flash('error', 'Please complete important information.');

    // } else {
        
    // }
    


