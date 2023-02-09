const express = require('express');
const router = express.Router();
const barControllers = require('../controllers/barControllers')

router.post('/where',barControllers.BarWhere);
router.post('/create',barControllers.BarCreate);
router.post('/update',barControllers.BarUpdate);
router.post('/delete',barControllers.BarDelete);
module.exports = router