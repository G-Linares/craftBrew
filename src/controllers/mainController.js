const path = require('path');
const cerveza =require('./cervezas');

const controllerMain = {
    home: function(req,res){
        //res.sendFile(path.resolve(__dirname,'../views/index.html'));
        res.render('index',{cerveza});
    },
    about: (req,res) => {
        res.render('about');
    }
};

module.exports = controllerMain;