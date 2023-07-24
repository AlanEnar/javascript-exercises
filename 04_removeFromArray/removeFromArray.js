const removeFromArray = function(array, ...items) {
    let cleanArray = [];

    for (let i = 0; i < array.length; i++){
        let skip = false;

        for (let j = 0; j < items.length; j++){
            if (array[i] === items[j]){
                // If an item in the array to be cleaned matches a black listed item, 
                // skip that item and go to the next iteration of the loop.
                skip = true;
                break;
            }
        }

        if (skip){
            // We need the extra variable, because putting the 'continue' in the
            // j loop wouldn't affect the i loop.
            continue;
        }

        cleanArray.push(array[i]);
    }

    return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
