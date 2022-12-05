const http = require('http') 

const server = http.createServer((req,res)=>{
        // console.log(req)
        // res.write('Welcome to ')
        // res.end()
        if(req.url ==='/'){
            res.end('welcome to our home page ')
           
        }
        if (req.url === '/about') {
            // res.end('Here is our short History')
            res.end('Here is our short History ')
            
        }
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">Back to Home</a>
        `)
        // res.end()
    }
)
server.listen(5000) 