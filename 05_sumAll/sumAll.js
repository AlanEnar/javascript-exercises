const sumAll = function(a, b) {
    // Use ternary operators to assign biggest to "bigNum" and smallest 
    // to "smallNum"
    let smallNum = a < b ? a : b;
    let bigNum = b > a ? b : a;

    if (smallNum < 0){
        // We only need to check the small number, because if any negative arguments
        // are passed, the small number must be negative.
        return "ERROR";
    }

    let finalSum = 0;

    for (var i = smallNum; i <= bigNum; i++){
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
