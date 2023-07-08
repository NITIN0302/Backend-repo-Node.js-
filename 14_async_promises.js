const { promises } = require('dns');
const fs = require('fs');

const getText = (path) => {
    return new promises((resolve,reject) => {
        fs.readFile(path,'utf8',(err,data) =>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

getText("/content/first.txt")
.then(result => console.log(result))
.catch((err) => console.log(err))