// 1)Import required Modules

const http = require("http");

// 2)Define Request Handler

const requestHandler = (req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("Hello World");
};

// 3)Create a Server

const server = http.createServer(requestHandler);

// 4)Start the server

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`The server is running on the  http://localhost:${PORT}`);
});
