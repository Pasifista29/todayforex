const http = require('http')
const fs = require('fs')
const port = 3000
const server = http.createServer(function(req,res){
    res.writeHead(200,{'x-content-type':'text/html'});
    fs.readFile('exp2.html',function(error,data){
        if(error){
            res.write(404)
            res.write('Error: File not Found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port,function(error){
    if(error){
        console.log('something went wront',error);
    }
    else{
        console.log('Server is listening on PORT: ',port);
    }
})