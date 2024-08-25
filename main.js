const http = require("http")
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end('<h1>Hello Node!!!!</h1>\n')
    console.log("Server Running at http://localhost:3000")
}).listen(3000)
