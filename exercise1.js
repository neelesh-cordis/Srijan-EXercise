/*
This program is for Exercise 1
It calculates actual distance covered for faulty Odometer
*/
var actual = -1;
var reading = -1;

calculate = (distorted) => {
    while (true) {
        actual += 1;
        reading = getNext(reading)
        if (reading === distorted) {
            break;
        }

    }
    return actual
}

check = (x) => {
    return String(x).indexOf("4") !== -1;
};

getNext = (x) => {
    let temp = x + 1;
    if (check(temp)) {
        for (let i = 0; i > -1; i++) {
            if (String(temp).indexOf("4") !== -1) {
                temp += 1;
            }
            else {
                break;
            }
        }

    }
    return temp;

}
console.log("Calculating ........")
var res = calculate(56287)
console.log("Done Calculating ...", res)