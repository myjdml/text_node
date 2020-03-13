let os = require('os')
console.log(os.cpus());
console.log(os.totalmem());


let http = require('http');
//新建服务器
let server = http.createServer();
//请求成功执行函数
//需要接受两个参数
//request获取客户端的请求信息
//response给客户端发送响应消息
server.on('request', function (req, res) {
    console.log('收到客户端请求，路径是：' + req.url);

    console.log('请求我的客户端的地址是' +req.socket.remoteAddress + req.socket.remotePort);
    

    //response 有一个方法write 给客户端发送响应数据
    //write可以使用多次，但是要end结束
    // res.write('hello')
    // res.end()
    //请求不同路径时响应不同结果
    if (req.url === '/login') {
        res.end('login')
    }else if (req.url === '/index') {
        res.end('index')
    }else if (req.url === '/product') {
        let products = [
            {
                name: "iphoneX",
                prise: "5000"
            },
            {
                name: "mi 10",
                prise: "3999"
            },
            {
                name: "mi 10 pro",
                prise: "4999"
            },
            {
                name: "mix alpha",
                prise: "19999"
            }
        ]

        res.end(JSON.stringify(products))
    } else {
        res.end('404')
    }
})
//绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('服务器启动成功');
})

//path 处理路径
//os 获取设备星信息