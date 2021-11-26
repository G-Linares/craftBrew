const path = require('path');

const controllerProducts = {
    index: function(req,res){
        res.sendFile(path.resolve(__dirname,'../views/products.html'));
    }
};

module.exports = controllerProducts;