const http = require('http');

const server = http.createServer((req, res)=>{
   res.write("Ritesh sute")
   res.end()
});

server.listen(8000);


if(url === '/home'){
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Welcome Home</h1></body>');
   res.write('</html>');
   return res.end()
}
if (url === '/about'){
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Welcome to About Us page</h1></body>');
   res.write('</html>');
   return res.end()
}  
if(url === '/node'){
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Welcome to my Node Js project</h1></body>');
   res.write('</html>');
   return res.end()
}
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>');
   res.write('<body><h1>Hello From My Node.js Server!</h1></body>');
   res.write('</html>');
   res.end()
