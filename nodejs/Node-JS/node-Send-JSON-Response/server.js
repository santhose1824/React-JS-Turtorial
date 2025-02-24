
// 1)Import required Modules

const http = require("http");
const url = require("url");
// 2)Define Request Handler

const requestHandler = (req, res) => {
    const data ={
        id:"123",
        name:"Santhose",
        email:"santhosehm@gmail.com"
    };
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(data));
};

// 3)Create a Server

const server = http.createServer(requestHandler);

// 4)Start the server

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`The server is running on the  http://localhost:${PORT}`);
});



