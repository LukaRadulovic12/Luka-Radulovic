const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  if (req.url === "/api/data") {
    res.writeHead(200);
    res.end(JSON.stringify("Hello"));
  }
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
