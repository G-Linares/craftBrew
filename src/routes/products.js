const express = require('express');
const controllerProducts = require('../controllers/productController');

let router = express.Router();

router.get('/:product', controllerProducts.index );

module.exports = router;