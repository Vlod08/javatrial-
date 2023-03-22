const http = require('http');

function serveron(req,res)
{
    if (req.url === '/')
    {
        res.write('welcome to our home page');
        res.end();
    }
    else
    {
        res.write('<h1>Oops!</h2>');
        res.end();

    }
    

}

const server = http.createServer((req,res)=>serveron(req,res)



    /*console.log(req);
    res.write("trying to resolve");
    res.end();*/);
server.listen(7000);
