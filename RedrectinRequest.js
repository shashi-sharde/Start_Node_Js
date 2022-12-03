const http=require("http");
const fs= require("fs");

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    console.log(url);

    if (url==='/'){
        res.write("<html>");
        res.write("<head><title>Enter messege</title></head>");
        res.write("<body><form action ='/message' method='POST'> <input type='text' name='message'><button type='submit'>Send</button></form></body>")
        res.write("</html>");
        return res.end();
    
    
    
    }   
    if(url==='/message' && method==='POST'){
        fs.writeFileSync("messege.txt", "Dummy msg");
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }

})
server.listen(3000);

