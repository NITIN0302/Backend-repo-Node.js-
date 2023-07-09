const fs = require('fs').promises

const start = async () => {
    try{
        const first = await fs.readFile('./content/first.txt','utf8');
        await fs.writeFile('./content/first.txt'," 18It's me Nitin.",{flag:'a'});
        console.log(first)
    }
    catch(error)
    {
        console.log(error);
    }
}

start()