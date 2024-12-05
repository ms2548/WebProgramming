const express = require('express');

const app = express();

app. use((req,res,next) => {
    res.status(200).send('<h1>Welcome!</h1>');});

app.listen(app.get(3000),()=>{
    console.log('Server listening on port 3000');
})
