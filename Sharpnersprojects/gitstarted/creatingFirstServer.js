const http = require('http');

const server = http.createServer((req, res)=>{
   res.write("Ritesh sute")
   res.end()
});

server.listen(3000);