const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

let mainRoute = require('./src/routes/main.js');
let productRoute = require('./src/routes/product.js')

app.listen(port, function(){
    console.log(`Servidor en puerto ${port}`);
})

app.set('view engine','ejs');
app.set('views', (path.join(__dirname, '/src/views')));

app.use(express.static(path.join(__dirname, './public')));

app.use('/', mainRoute);
app.use('/product', productRoute);
