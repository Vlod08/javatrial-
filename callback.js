//testing call back functions

function loop (callback){
    for (let i=0;i<100;i++)
    {
        console.log(i);
    }
    callback();
}

loop(()=>{
    console.log("loop complete");
});

