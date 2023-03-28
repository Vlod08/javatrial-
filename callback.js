const http  = require('http');

const server =  http.createServer((req,res)=>{

    if(req.url === '/' )
    {
        res.write("request succeded");
        res.end();
    }
    else{
        res.write("looking for a non existant page");
        res.end();
    }
});

try
{
    server.listen(500000000)
}catch(err)
{
    console.log("captured error : "+ err);
}
finally{
    console.log("what shoul i do");
} 


