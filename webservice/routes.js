// This is our routes.js file


const { request } = require('http');


// Following is my 'requestHandler()' function
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method; // We need this to look for the method used (GET or POST).
    
    // For now, I'm just making sure that the browser can receive data from the Node.js server.
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from Matt\'s Node.js Server!<h1></body>');
    res.write('</html>');
    res.end();
};

exports.handler = requestHandler; // This exports our 'requestHandler()' function.
exports.someText = 'Some hard coded text'; // sends this text to check if our server is running.