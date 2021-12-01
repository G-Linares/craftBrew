const path = require('path');
const cervezas =require('../data/cervezas');
const cervezasNuestras = require('../data/cervezasNuestras');
const reviews = require('../data/reviews');

const controllerMain = {
    home: function(req,res){
        //res.sendFile(path.resolve(__dirname,'../views/index.html'));
        res.render('index',{cervezas, cervezasNuestras,reviews});
    },
    about: (req,res) => {
        res.render('about');
    }
};

module.exports = controllerMain;