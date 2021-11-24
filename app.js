const express = require('express');
const app = express();
const path = require('path');
let productRoute = require('./routes/products.js');

app.listen(process.env.PORT || 3000, function(){
    console.log(`Servidor en puerto 3000`);
})

app.use(express.static('public'));



app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/index.html'));
});

app.use('/product',productRoute);