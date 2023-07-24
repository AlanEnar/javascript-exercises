const repeatString = function(string, num) {
    // Generate error to prevent infinite loop wiht negative input
    if (num < 0){
        return "ERROR";
    }

    let newString = "";

    for (var i = num; i--;){
        newString = newString.concat(string);
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
