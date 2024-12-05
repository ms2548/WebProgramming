const express = require('express');

const app = express();

app.get('/',(req,res,next) => {
    res.status(200).send('<h1>Welcome --- from Root</h1>');});

app.get('/login',(req,res,next) => {
res.status(200).send('<h1>Welcome --- from Root!</h1>');});
    

app.listen(3000,()=>{
    console.log('Server listening on port 3000!!');
})
