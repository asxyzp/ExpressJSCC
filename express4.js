/*
    Making an Express server which serves JSON output
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const members = require('./members');

//We can send JSON file using res.json()
app.get('/api/members',(req,res)=>{
    res.json(members);
});

app.listen(port,()=>{
    console.log(`APP IS ONLINE ON PORT ${port}`);
});