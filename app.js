const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => console.log('Server mounted on port 3000'));

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/index.html'));
});