const http = require('http');
const server=http.createServer((request,response)=>{
    const url=request.url;
    
    if (url==='/home'){
        response.write("<html>");
        response.write("<head><title>Enter Messege</title></head>");
        response.write("<body><h1>Welcome Home!</h1></body>");
        response.write("</html>")
        return response.end();
        

    }
    if (url==='/about'){
        response.write("<html>");
        response.write("<head><title>Enter Messege</title></head>");
        response.write("<body><h1>Welcome to my about us page!</body>");
        response.write("</html>")
        return response.end();

    }
    if (url==='/Node'){
        response.write("<html>");
        response.write("<head><title>Enter Messege</title></head>");
        response.write("<body><h1>Welcome to my Node.js server!</h1></body>");
        response.write("</html>")
        return response.end();
        

    }
    
    
})
server.listen(3000);