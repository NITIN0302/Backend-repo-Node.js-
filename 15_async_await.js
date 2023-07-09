const fs = require('fs');

const getdata = (path) => {
    return new Promise((resolve,reject) =>{
        fs.readFile(path,'utf8',(err,result) =>{
            if(err)
                reject(err);
            else
                resolve(result);
        })
    })
}

const start = async () => {
    try
    {
        const first = await getdata("./content/first.txt");
        const second = await getdata("./content/first.txt");
        console.log(first);
        console.log(second);
    }
    catch(error)
    {
        console.log(error);
    }
}

start()