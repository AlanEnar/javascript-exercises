const sumAll = function(a, b) {
    // Use ternary operators to assign biggest to "bigNum" and smallest 
    // to "smallNum"
    let smallNum = a < b ? a : b;
    let bigNum = b > a ? b : a;

    let finalSum = 0;

    for (var i = smallNum; i <= bigNum; i++){
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
