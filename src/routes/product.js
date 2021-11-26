const express = require('express');
const productController = require('../controllers/productController');

let router = express.Router();

router.get('/', productController.index);
router.get('/:id', productController.id);

module.exports = router;