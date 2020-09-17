/*
    Making a basic server app using Express
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    //send() is sending either of the two messages below
    //This is because you can't call twice for the same request
    //To send multiple responses use res.write()
    res.send('👋 HELLO, WORLD!');
    res.status(500).send(`URL SENT : http://localhost:${5000}`+req.url);
    
});
app.listen(port,()=>{
    console.log(`APP IS ONLINE ON PORT ${port}`);
});