const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Incoming HTTP Request -> ${req.url}`);

    res.writeHead(200, {
        'content-type': 'text/html',
    });
    if ( req.url === '/cats'){
        res.write('<h1>Cats!</h1>')
    }else{
        res.write(`<h1>Hello from NodeJS Web Server!!!</h1>`);
    }
    

    res.end();
    
});

server.listen(2000);
