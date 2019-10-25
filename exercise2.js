/*
This program is from Exercise 2.
IT reads data from sample.txt sorts it and writes it into append.txt
*/
var fs = require("fs");
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('sample.txt')
});

var masterObj = {}
lineReader.on('line', function (line) {
    line = line.replace(/\s\s+/g, ' ');
    line = line.trim()
    const numbers = line.split(" ")
    numbers.map(x => {
        if (!masterObj.hasOwnProperty(x)) {
            masterObj[x] = 1
        }
        else {
            masterObj[x] += 1;
        }
    })
});

lineReader.on('close', function () {
    var stream = fs.createWriteStream("append.txt", { flags: 'a' });
    console.log("Starting Write to append.txt ", new Date().toISOString());
    var keys = Object.keys(masterObj);
    keys.forEach(function (item, index) {
        let str = ``;
        for (let i = 0; i < masterObj[item]; i++) {
            if (!i) {
                str = str + item
            }
            else {
                str = str + " " + item;
            }
        }
        stream.write(str + " ");
    });
    console.log("Write Finished ...", new Date().toISOString());
    stream.end();
})

