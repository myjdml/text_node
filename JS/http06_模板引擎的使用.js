let http = require('http')
let fs = require('fs')
let template = require('art-template')

let server = http.createServer()

// server.on('request', function (req, res) {
//     let url = req.url

   
// })
server.listen(3000, function () {  
    console.log('server is running...');
})
fs.readFile('../HTML/tpl.html', function (err, data) {  
    if (err) {
       console.log('读取文件失败');
    }


    let ret = template.render(data.toString(), {
        name: 'Jack',
        age: '18',
        provence: '安徽',
        hobbies: [
            'code writting',
            'sing song',
            'playing'
        ]
    })
    console.log(ret);
})




