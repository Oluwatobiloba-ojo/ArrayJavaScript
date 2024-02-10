function count_letter(letter, value){
    let counter = 0;
    for (const item of value) {
        if (item === letter) counter += 1;
    }
    return counter;
}

function count_character(value){
    let dict = {};
    for (const letter of value) {
        let number_of_times = count_letter(letter, value);
        dict[String(letter)] = number_of_times;
    }
    return dict;
};

module.exports = {count_character};
