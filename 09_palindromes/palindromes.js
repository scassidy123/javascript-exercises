const palindromes = function (string) {
    //Remove caps
    let stringNoCaps = string.toLowerCase()

    //Remove punctuation
    let getStringNoSpaces = stringNoCaps.replace(/[^\w\s]|[\s]|_/g, '');

    //Convert to string
    let getArray = getStringNoSpaces.split('')

    //Copy and reverse our array
    let getRerverseCopyArray = getArray.toReversed()

    //Converts back to string so we can compare and see if they are ===

    return getArray.join('') == getRerverseCopyArray.join('') ? true : false
};

// palindromes("A car a man a marac'a")
// Do not edit below this line
module.exports = palindromes;
