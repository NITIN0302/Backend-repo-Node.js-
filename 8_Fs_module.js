const fs = require('fs');

const content = fs.readFileSync('./content/first.txt','utf8');

console.log(content);

fs.writeFileSync('./content/first.txt','It is good today');

const content2 = fs.readFileSync('./content/first.txt','utf8');

console.log(content2);
