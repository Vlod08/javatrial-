const eventClass = require('events');

const fs = require('fs');

const customEvent = new eventClass();

path ="./text_folder/text.txt";

const stream = fs.createReadStream(path,{highWaterMark : 5,encoding:"utf8"});


stream.on("open",(data)=> {
    console.log(data);
});

