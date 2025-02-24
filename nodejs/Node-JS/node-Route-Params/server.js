
// 1)Import required Modules

const http = require("http");
const url = require("url");
// 2)Define Request Handler

const requestHandler = (req, res) => {
    const passedUrl = url.parse(req.url, true);
    const passedUrlComponent = passedUrl.pathname.split("/").filter(Boolean);
    if(passedUrlComponent[0]==="products" && passedUrlComponent[1] )
    {
        const productId = passedUrlComponent[1];
        res.writeHead("200",{"content-type": "text/plain"});
        res.end(`Product Id is : ${productId}`);
    }
    else{
        res.writeHead("200",{"content-type": "text/plain"});
        res.end(`Not Found the Product`);
    }
};

// 3)Create a Server

const server = http.createServer(requestHandler);

// 4)Start the server

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`The server is running on the  http://localhost:${PORT}`);
});



