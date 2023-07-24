const repeatString = function(string, num) {
    let newString = "";
    newString.concat("testing")
    for (var i = num; i--;){
        newString = newString.concat(string);
    }
    console.log(newString);
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
