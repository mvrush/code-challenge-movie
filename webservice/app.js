// The following lines basically write your own server. Console.log is what causes it to log down there in the terminal window.
const http = require('http');

const routes = require('./routes'); // since this is not a global module we add the local path to routes.js with ./ and you can also drop the .js from routes.

console.log(routes.someText); // This line is to test our server connection. Our text held in routes.js should show up in the console. If it does, your server is running.

const server = http.createServer(routes); // tells Node to just execute the function stored in the 'const = routes' above.

server.listen(3000);