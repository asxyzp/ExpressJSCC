/*
    Making an Express server which serves static files
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
//use() is used when we are using middlewares
app.use(express.static(path.join(__dirname,'public')));

app.listen(port,()=>{
    console.log(`APP IS ONLINE ON PORT ${port}`);
});