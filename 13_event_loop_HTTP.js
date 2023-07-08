const http = require('http');

const server = http.createServer((req,res) => {
    console.log("request event");
    if(req.url === '/')
    {
        res.end("Hello World");
        return;
    }
    if(req.url === '/about')
    {
        res.end("Hello from about");
        return;
    }
})

server.listen(5000,()=>{
    console.log("Server is Listening: 5000");
});