// const http = require('http');
// const index = require('./index.js');

import http from 'http';
import index from './index.js';
import { appendFile } from 'fs';

const cb = (request, response) =>{
    response.writeHead(200,{'Content-Type':'text/plain'})
    const cows = index.cows()[0];
    response.end(cows);
}
let type= index.os.type();
let platform= index.os.platform();
let version= index.os.version();
console.log(type);

const app = http.createServer(cb);
appendFile('message.txt', `${type,platform,version}`, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
app.listen(1234);
console.log('listening on 1234');


