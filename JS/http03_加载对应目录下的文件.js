let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', function (req, res) {
    let url = req.url
    
    if (url === '/') {
        fs.readFile('./www/index.html', function (err, date) {
            if (err) {
                res.end('404 not found');
                return
            }
            res.end(date)
        })
    } else if (url === '/a.txt') {
        fs.readFile('./www/a.txt', function (err, date) {
            if (err) {
                res.end('404 not found');
                return
            }
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end(date)
        })
    }else if (url === '/index.html') {
        fs.readFile('./www/index.html', function (err, date) {
            if (err) {
                res.end('404 not found');
                return
            }
            res.end(date)
        })
    }else if (url === '/apple/login.html') {
        fs.readFile('./www/apple/login.html', function (err, date) {
            if (err) {
                res.end('404 not found');
                return
            }
            res.end(date)
        })
    }else {
        res.end('404')
    }
})

server.listen(3000, function () {
    console.log('server is running.....');
    
})