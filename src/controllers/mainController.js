const path = require('path');

const controllerMain = {
    home: function(req,res){
        res.sendFile(path.resolve(__dirname,'../views/index.html'));
    }
};

module.exports = controllerMain;