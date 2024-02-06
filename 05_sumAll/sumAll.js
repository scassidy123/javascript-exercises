const sumAll = function(num1, num2) {
    array = []
    if (num1 < 0 || num2 < 0) { return "ERROR"}
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) { return "ERROR" }
    if (num1 > num2) {
        let holdForASecond = num1
        num1 = num2
        num2 = holdForASecond
    }

        for (let i = num1; i <= num2; i++) {
            array.push(i)    
        }
        
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum
};
sumAll(10,1)
// Do not edit below this line
module.exports = sumAll;
