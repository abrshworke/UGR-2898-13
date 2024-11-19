const express = require('express');
const router = express.Router();
const profileControll = require('../controllers/profileControll')

router.get('/', profileControll.index);

module.exports = router;