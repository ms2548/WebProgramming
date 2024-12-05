const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hi! My name us GU-MinSun</h1>")
    res.end("<h1>Hello World !")});
server.listen(1000,()=>{
    console.log("server listens on port 1000 !")
});
