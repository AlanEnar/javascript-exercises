const reverseString = function(string) {
    let reversedString = "";

    for (var i = string.length; i--;){
        reversedString = reversedString.concat(string[i]);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
