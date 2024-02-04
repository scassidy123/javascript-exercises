const reverseString = function(string) {
    let givenString = string.split("")
    let reverseIt = givenString.reverse()
    let joinIt = reverseIt.join("")
    return joinIt
};

// Do not edit below this line
module.exports = reverseString;
