const http = require('http');
const server=http.createServer((request,response)=>{
    console.log(request.url,request.method,request.headers); // we are giving request to the server and finding out the details 
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>My first page</title></head>");
    response.write("<body><h1>Hello from my node.js Server!</h1></body>");
    response.write("</html>")
    response.end();
})

server.listen(3000);