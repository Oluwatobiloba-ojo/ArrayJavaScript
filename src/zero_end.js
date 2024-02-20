function zero_at_the_end_index(input){
    let output = loop(input.length);
    let count = 0;
    input.forEach(element => {
        if(element != 0)output[count++] = element;
    });
    return output;
}

module.exports = {zero_at_the_end_index};


function loop(length){
    let result = new Array();
    for(let count = 0; count < length; count++){
        result.push(0);
    }
    return result;
}


function zero_end(input){
    for(let value in input){
        if(value === input.length -1) break;
        if(input[value] === 0){
            let index = Number(value)+1;
            while(input[index] === 0 && index !== input.length-1){
                //console.log(index)
                index++;
            }
            console.log(index);
            let non_zero_element = input[index];
            input[index] = input[value];
            input[value] = non_zero_element;  
        }
    }
    return input;
}
let result = [0, 4, 2, 0, 5];
console.log(zero_end(result));

