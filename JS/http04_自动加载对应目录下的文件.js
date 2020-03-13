let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', function (req, res) {
    let url = req.url
    
    let filePath = 'index.html'
    if (url !== '/') {
        filePath = url
    }
    fs.readFile('www' + filePath, function (err, data) {
        if (err) {
            return res.end('404 not found')
        }
        res.end(data)
    })

})

server.listen(3000, function () {
    console.log('server is running.....');
    
})