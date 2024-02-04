// let string = "hey"
// let num = 3


const repeatString = function(string,num) {
    if (num < 0) {
        return "ERROR"
    }
    let myString = ""
    for (let i = num; i > 0; i--){
        myString = myString.concat(string)
    }
    return myString
};

// Do not edit below this line
module.exports = repeatString;
