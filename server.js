"use strict"
const http = require('http');
const quotes = require('./quotes');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(quotes.randomQuote(quotes.quotesArray));
    res.end();
})

server.listen(3000);
