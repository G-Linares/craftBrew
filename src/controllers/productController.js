const path = require('path');
const { send } = require('process');

const controllerProduct = {
    index: (req,res) => {
        res.sendFile(path.join(__dirname,'../views/products.html'));
    },
    id: (req,res) => {
        res.send("Aqui va la vista de un item")
    }
};

module.exports = controllerProduct;