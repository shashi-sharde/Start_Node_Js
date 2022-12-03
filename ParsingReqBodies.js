const http=require("http");
const fs= require("fs");

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    

    if (url==='/'){

        fs.readFile("messege.txt", {encoding: "utf-8"}, (err,data)=>{
            if(err){
                console.log(err);
            }
        console.log("data from file" +data);
        res.write("<html>");
        res.write("<head><title>Enter messege</title></head>");
        res.write(`<body>${data}</body>`)
        res.write("<body><form action ='/message' method='POST'> <input type='text' name='message'><button type='submit'>Send</button></form></body>")
        res.write("</html>");
        return res.end();
    
    })
    
    }  
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on("data", (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on("end", ()=> {
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            fs.writeFile("messege.txt", message, (err)=>{
                res.statusCode=302;
                res.setHeader('Location', '/');
                return res.end();

            });
            
        })
        
        
    }

})
server.listen(3000);

