/*
    Making a middleware
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

//Logger middleware function which logs every request made
const logger = (req,res,next)=>{
    console.log(`${req.url} AT ${Date.now()}`);
    next();
};
app.use(logger);
app.use(express.static(path.join(__dirname,'public')));

app.listen(port,()=>{
    console.log(`APP IS ONLINE ON PORT ${port}`);
});