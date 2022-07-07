const express = require('express');
const router = express.Router();
const db = require('../db');

    // * Select user
router.get('/', (req, res) => {
    try {
        db.query('SELECT * FROM user', (err, results,fielde) => {
            console.log(results)
            return res.send({data: results});
        })
    } catch(err) {
        console.log(err);
        return res.status(400).send();
    }
});
    // * Select user ID
router.get('/:id', (req,res) => {
    let id = req.params.id;

    try {
        db.query('SELECT * FROM user WHERE id = ?', id ,(err, results,fielde) => {
            console.log(results)
            return res.send({data: results});
        })
    } catch(err) {
        console.log(err);
        return res.status(400).send();
    }
});
    // * Select user email
router.post('/email', async (req, res) => {
    let email = req.body.email;
    try {
        db.query('SELECT * FROM `user` WHERE email = ?', [email], (err, results, fielde) => {
            console.log(results)
            return res.send({data: results});
        })
    } catch(err) {
        console.log(err);
        return res.status(400).send();
    }
});
    // * Edit user
router.put('/edit', (req,res) => {
    try {
        let id = req.body.id
        let name = req.body.name;
        let sername = req.body.sername;
        let email = req.body.email;
        let password = req.body.password;
        let age = req.body.age;
        let position = req.body.position;
        let birthday = req.body.birthday;
        let phone = req.body.phone;
        let imge = req.body.imge;
        
        db.query('UPDATE user SET name = ?, sername = ?, email = ?, password = ?, age = ?, position = ?, birthday = ?,phone = ?, imge = ? WHERE id = ?', 
        [name, sername, email, password, age, position, birthday, phone, imge, id ], (err, results, fields) => {
            console.log(results);    
            return res.status(201).json("Finished editing.");
            })
            
    } catch(err) {
        console.log(err);
        return res.status(400).send();
    }
});
    // * Delete user
router.delete('/delete', async (req, res) => {
    let id = req.body.id;
    try {
        db.query('DELETE FROM user WHERE id = ? ', [id], async (error, results, fielde) => {
            console.log(results);
            return res.send(201).json('You have successfully deleted your user ID.')
        })
    } catch (error) {
        console.log(err);
        return res.status(400).send();
    }
})
module.exports = router;