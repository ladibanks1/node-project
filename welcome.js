const fs = require("fs");
fs.readFile("welcome.txt" , (err , data) => {
    err ? console.log(err) : console.log(data.toString())
})