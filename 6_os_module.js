
const os = require('os');

console.log(os.userInfo());
console.log(`this is the time in ${os.uptime()} in second`);
console.log(os.type());
console.log(os.release());
console.log(os.totalmem());
console.log(os.freemem());


// you can create an object of method also

const osinfo = {
    name: os.type(),
    release: os.release(),
    totalmen: os.totalmem(),
    freemem: os.freemem(),
}

console.log(osinfo);
