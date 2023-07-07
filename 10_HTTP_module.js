const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/')
    {
        res.end("Welcome to the home page");
        return;
    }
    if(req.url === '/about')
    {
        res.end("Here are some of our information");
        return;
    }
    res.end(`
    <h1>OOPS!</h1>
    `)
    
    res.write("Welcome to the home page");
    res.end()
})

server.listen(3000);