let http = require('http')
let fs = require('fs')

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
            let content = ''
            files.forEach(function (item) {  
                content += `
                <tr>
                    <td><a href="">${item}</a></td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                `
            })
            //替换
            data = data.toString()
            data = data.replace('^_^', content)
            //响应
            res.end(data)
        })
      
        //2如何将得到的文件名和目录名替换到catalog.html 中去
    })
})

server.listen(3000, function () {
    console.log('server is running....');
})