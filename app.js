const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, function(){
    console.log(`Servidor montado en puerto 3000`);
});

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/index.html'));
});