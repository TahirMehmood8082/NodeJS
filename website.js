const fs = require('fs')
const http = require('http')
const port = process.env.PORT || 3000 ;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200
        res.end('<h1>This is CodeWithHarry </h1> <p> Hey this is home awesome</p>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200
        res.end('<h1>About CodeWithHarry </h1> <p> Hey this is about awesome</p>')
    }
    else if(req.url == '/hello'){
        res.statusCode = 200
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else{
        res.statusCode = 404
        res.end('<h1>Page Not Found </h1> <p> Hey this page is not found on this server</p>')
    }
})

server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})