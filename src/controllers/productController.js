const path = require('path');
const cervezasOferta = require('../data/cervezasOferta');

const controllerProduct = {
    id: (req,res) => {
        const id = req.params.id;
        res.render('products',{cerveza:cervezasOferta[id]}); 
    },
    noId: (req,res) => {
        res.render('products'); 
    }
}

module.exports = controllerProduct;