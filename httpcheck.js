const http = require('http');
const port =3000

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write("Hello from HTTP module\n")
        res.write("Default page")
        res.end();
    }
    else if(req.url==='/home'){
        res.write("<h1>This is home page</h1>")
        res.end();
    }
});

server.on('connection',(socket)=>{
    console.log('New connection created');
});

server.listen(port);
console.log(`Listening on port ${port}`);

// Listening on port 3000
// New connection created
// New connection created
