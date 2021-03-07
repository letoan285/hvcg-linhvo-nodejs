const fs = require('fs');
const http = require('http');
// const express = require('express');
// // npm modules
// // module

// // commonJS
// // nodejs builtin module
// const path = require('path');
// const os = require('os');

// // self declare module
// const myProduct = require('./product');

// // console.log(path.extname());
// http.createServer(function(req, res){
//     fs.readFile('home.html', function(err, data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8000);

// fs.writeFile('myfile.txt', 'Good Bye', function(err){
//     if(err) throw err;
//     console.log('Saved');
// });

// fs.appendFile('myfile.txt', 'Good Bye', function(err){
//     if(err) throw err;
//     console.log('Saved');
// });

// a
// fs.unlink('myfile.txt', function(err){
//     if(err) throw err;
//     console.log('File is deleted');
// });
// fs.rename

// fs.writeFileSync('myfile.txt', 'Good Bye', function(err){
//     if(err) throw err;
//     console.log('Saved');
// });

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(8000, 'localhost',() => {
    console.log('Server is runing on port 8000')
})