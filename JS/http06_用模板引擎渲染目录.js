
let http = require('http')
let fs = require('fs')
let template = require('art-template')

let server = http.createServer()

server.on('request', function (req, res) {
    let url = req.url

    fs.readFile('../HTML/catalog.html', function (err, data) {  
        if (err) {
            return res.end('404 Not Found')
        }
        //1.如何得到 wwwDiir 目录列表的文件名和目录名
        
        fs.readdir('../JS/www', function (req, files) {  
            if (err) {
                return end('Can Not Find The www dir')
            }
            //使用模板引擎
            let htmlStr = template.render(data.toString(), {
                files: files
            })
            
            //响应
            res.end(htmlStr)
        })
      
        //2如何将得到的文件名和目录名替换到catalog.html 中去
    })
})

server.listen(3000, function () {
    console.log('server is running....');
})

