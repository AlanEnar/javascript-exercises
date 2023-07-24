const removeFromArray = function(array, item1, item2) {
    let cleanArray = [];

    for (var i = 0; i < array.length; i++){
        if (array[i] !== item1 && array[i] !== item2){
            cleanArray.push(array[i]);
        }
    }

    return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
