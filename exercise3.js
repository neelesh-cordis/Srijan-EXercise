/*
This program is for Exercise 3
It parses development.log and generates a Report
*/
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('development.log')
});

var masterObj = {}
lineReader.on('line', function (line) {

    if (check(line)) {
        line = line.replace(/\s\s+/g, ' ');
        line = line.trim()
        tokenize(line)
    }
});
lineReader.on('close', function () {
    console.log("Parsing Over. Below is the Report")
    let controllers = Object.keys(masterObj);
    controllers.map(x => {
        let actions = Object.keys(masterObj[x])
        actions.map(y => {
            console.log(`${x} => ${y} action ran ${masterObj[x][y]} times`)
        })
    })
});
check = (x) => {
    return x.indexOf("Processing by ") !== -1;
}

tokenize = (x) => {
    let [controller, action] = x.split(" ")[2].split("#")
    if (masterObj.hasOwnProperty(controller)) {
        if (masterObj[controller].hasOwnProperty(action)) {
            masterObj[controller][action] += 1;
        } else {
            masterObj[controller][action] = 1;
        }
    } else {
        masterObj[controller] = {}
        masterObj[controller][action] = 1
    }
}