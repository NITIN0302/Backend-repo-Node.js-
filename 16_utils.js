const fs = require('fs');
const util = require('util')

//promisefy function in util module will convert readfile function in promise

const readFilepromise = util.promisify(fs.readFile); 
const writeFilepromise = util.promisify(fs.writeFile);


const start = async () => {
    try{
    const first = await(readFilepromise('./content/first.txt','utf8'));
    await writeFilepromise('./content/first.txt',"This is promise by utils");
    console.log(first);
    }
    catch(error){
        console.log(error);
    }
}

start()