const fs = require('fs');
const { first } = require('lodash');

console.log("Starting first task");

fs.readFile("./content/first.txt",'utf8',(err,result) => {
    if(err){
        return err;
    }
    else{
        console.log(result);
        console.log("Callback completed");
    }
});

console.log("Completed Whole task");


// in this method

// starting first tack execute -> first

// then readFile method will go in webAPI 

// completed whole task execute -> second

// now the webAPI will send the readFile process in callback queue
// then the callback queue will send the process in call stack