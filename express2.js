/*
    Sending a single file using express server
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const path = require('path');
const express = require('express');
const { request } = require('http');
const app = express();
const port = process.env.PORT || 5000;


//We can send a file using sendFile(file_path)
//But we have to make this for every request

//For index.html
app.get('/'||'/index.html',(req,res)=>{
    //sendFile() is used for sending a single file
    console.log(`${req.url} REQUESTED : ${__dirname}/index.html SENT.`);
    res.sendFile(path.join(__dirname,'public','index.html'));
});

//For about.html
app.get('/about.html',(req,res)=>{
    //sendFile() is used for sending a single file
    console.log(`${req.url} REQUESTED : ${__dirname}/${req.url} SENT.`);
    res.sendFile(path.join(__dirname,'public','about.html'));
});

//For style.css
app.get('/style.css',(req,res)=>{
    //sendFile() is used for sending a single file
    console.log(`${req.url} REQUESTED : ${__dirname}${req.url} SENT.`);
    res.sendFile(path.join(__dirname,'public','style.css'));
});

app.listen(port,()=>{
    console.log(`APP IS ONLINE ON PORT ${port}`);
});