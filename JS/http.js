let http = require('http')
let fs = require('fs')
let url = require('url')

http
  .createServer(function (req, res) {

      let parthObj = url.parse(req.url, true)
      

      let pathname = parthObj.pathname
      

      if (pathname === '/') {
          fs.readFile('./public/index.html', function (err, data) {  
              if (err) {
                  return res.end('404 Not found')
              }



              res.end(data)
          })
      } else if (pathname.indexOf('/public/') === 0 ) {
           fs.readFile('.' + pathname, function (err, data) {  
               if (err) {
                  return res.end('404 Not found')
               }
               res.end(data)
           })
      } else if (pathname === '/file') {
        console.log(parthObj);
      } else if (pathname === '/text') {
        console.log(parthObj);
      } else {
          res.end('<h1>404 Not Found</h1>')
      }
  })
  .listen(3000, function () {  
      console.log('server is running....');
      
  })