
// 1)Import required Modules

const http = require("http");
const url = require("url");
// 2)Define Request Handler

const requestHandler = (req, res) => {
    const passedUrl = url.parse(req.url, true);
    const queryParameters = passedUrl.query;

    res.writeHead("200",{"content-type": "text/plain"});
    res.end(`Not Found the Product`);
};

// 3)Create a Server

const server = http.createServer(requestHandler);

// 4)Start the server

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`The server is running on the  http://localhost:${PORT}`);
});



