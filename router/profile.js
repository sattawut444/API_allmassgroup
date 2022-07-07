// ดึงรูป
const express = require('express');
const router = express.Router();
const db = require('../db');

router.put('/', (req,res) => {
    try {
        let id = req.body.id
        let name = req.body.name;
        let sername = req.body.sername;
        let age = req.body.age;
        let position = req.body.position;
        let birthday = req.body.birthday;
        let phone = req.body.phone;
        let imge = req.body.imge;
        

        db.query('UPDATE user SET name = ?, sername = ?, age = ?, position = ?, birthday = ?,phone = ?, imge = ? WHERE id = ?', [name, sername, age, position, birthday, phone, imge, id ], (err, results, fields) => {
            console.log(results);    
            return res.status(201).json(results);
            })
            
    } catch(err) {
        console.log(err);
        return res.status(400).send();
    }
})

module.exports = router;
