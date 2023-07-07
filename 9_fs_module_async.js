const fs = require('fs');

fs.readFile('./content/first.txt','utf8',(err,result) =>{
    if(err)
      return;
    console.log(result);
} )

fs.writeFile('./content/first.txt',"Hello it's me Nitin",(err,result) =>{
    if(err)
    {
        return;
    }
    const data = fs.readFile('./content/first.txt','utf8',(err,result) =>{
        if(err)
          return;
        console.log(result);
    })
});


// we have to write the callback function in asyncronous file server module