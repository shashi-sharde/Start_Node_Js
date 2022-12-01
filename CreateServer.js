const http = require('http');
const server=http.createServer((request,response)=>{
    console.log("Shashi");
})

server.listen(3000);