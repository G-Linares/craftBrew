const path = require('path');
const cervezas = require('../data/cervezas');

const controllerProduct = {
    id: (req,res) => {
        const id = req.params.id;
        res.render('products',{cerveza:cervezas[id]}); 
    },
    noId: (req,res) => {
        res.render('products'); 
    }
}

module.exports = controllerProduct;