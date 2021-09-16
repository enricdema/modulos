// const http = require('http');
// const index = require('./index.js');

import http from 'http';
import index from './index.js';

const cb = (request, response) =>{
    response.writeHead(200,{'Content-Type':'text/plain'})
    const cows = index.cows()[0];
    response.end(cows);
}
const app = http.createServer(cb);

app.listen(1234);
console.log('listening on 1234');