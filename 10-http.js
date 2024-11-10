const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Thiết lập header
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>Server Error</h1>');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>Server Error</h1>');
            } else {
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end(`
            <h1>Oops</h1>
            <p>We can't seem to find the page you're looking for</p>
            <a href="/">Back to Home</a>
        `);
    }
});

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
