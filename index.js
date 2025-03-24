const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Incoming HTTP Request');

    res.write(`<h1>Hello from NodeJS Web Server</h1>`);

    res.end();
    
});

server.listen(2000);
