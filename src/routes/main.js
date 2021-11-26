const express = require('express');
const controllerMain= require('../controllers/mainController');

let router = express.Router();

router.get('/', controllerMain.home);

module.exports = router;