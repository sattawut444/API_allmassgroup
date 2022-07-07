
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtft = require('./jwt');
const db = require('../db');
const dotenv = require('dotenv');

// router.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));

// router.use(bodyParser.urlencoded({ extended: true}));
// router.use(bodyParser.json());

    // * login
router.post('/password', (req,res) => {
    try {
            let email = req.body.email;
            let password = req.body.password;
            db.query(" SELECT * FROM user WHERE email = ? ", [email], async (err, results, fields) => {
            // console.log(results)
        
            // console.log(tokenjwt)
            let email1 = results[0].email
            // console.log(email1)
            let passwordDB = results[0].password; // ดึง password จาก Database มาใส่ในตัวแปร
            // console.log(passwordDB)
            let login = await bcrypt.compare(password, passwordDB)
            // console.log(login)
            
            if (login != false) {
                let tokenjwt = await jwtft(email1);
                // console.log(tokenjwt)
                return res.status(200).json({data:results, TokenLogin: tokenjwt});
            } else {
                return res.status(200).json("Invalid email or password");
            }
            res.end()
            })
        } catch (error) {
        console.log(error);
        return res.status(400).send(error);
        }
        
})
    

//////////////////////////////////////////////////////    
//     const  text  = request.body; // ร้องขอข้อมูลผ่าน URL เป็นแบบ API เเละชุดข้อมูลเป็น JSON
    
//     let data = encode.encryptPassword (text.password); // ส่งข้อมูลที่รับเข้ามาไปยังไฟล์ encode.js เพื่อเข้ารหัส

//     console.log(data);
//     response.send(data); // ตอบกลับเป็นข้อมูลที่ผ่านการเข้ารหัส
// });
    // let username = req.body.username;
    // let password = req.body.password;
    // if (username && password) {
    //     db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(err, results, fields) {
    //         if (results.length > 0) {
    //             req.session.loggedin = true;
    //             req.session.username = username;
    //             return res.send({data:results});
    //         } else {
    //             response.send('Incorrect Username and/or Password');
    //         }
    //         res.end();
    //     })
    // } else {
    //     res.send('Please enter Username and Password');
    //     res.end();
    // }


// router.get('/home', function(req,res) {
//     res.sendFile(path.join(__dirname + '/home.html'));
// });

module.exports = router;