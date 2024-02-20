function changing_zero(input){
    for(let inner in input){
        if(search(input[inner]))input[inner] = populateZero(input[inner]);
    }
    return input;
};

function search(arr){
    for(let value in arr){
        if(arr[value] === 0) return true;
    }
    return false;
};

function populateZero(array){
    for(let index in array){
        array[index] = 0;
    }
    return array;
};

module.exports = {changing_zero};
