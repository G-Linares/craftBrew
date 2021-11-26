const express = require('express');
const app = express();
const path = require('path');
let productRoute = require('./src/routes/products.js');
let mainRoute = require('./src/routes/main.js');

app.listen(process.env.PORT || 3000, function(){
    console.log(`Servidor en puerto 3000`);
})

app.use(express.static('public'));

app.use('/', mainRoute);

app.use('/product',productRoute);