
const express = require('express');
const router = express.Router();
const db = require('../db');

// add a new books
router.post('/', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let sername = req.body.sername;

  // validation
  try {
    db.query('INSERT INTO user(name, email,sername) VALUES(?,?,?)', [name, email, sername], (error, results, fields) => {
        console.log(results)
            return res.status(201).json(results);  
      })        
  } catch (error) {
    console.log(err);
        return res.status(400).send();
  }
      
});

module.exports = router;