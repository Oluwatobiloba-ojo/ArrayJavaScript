const {count_character} = require("../src/count_character");

test("test for when a string containing character return the characters as key and number of time a charcter occur as value", ()=>{
    let value = "semicolon.africa";
    let expected = {'s': 1, 'e': 1, 'm': 1, 'i': 2, 'c': 2, 'o': 2, 'l': 1, 'n': 1, '.': 1, 'a': 2, 'f': 1, 'r': 1};
    let result = count_character(value);
    
    expect(result).toEqual(expected);
});

test("test for when a string containing mosquito return the characters as key and number of time a charcter occur as value", ()=>{
    let value = "mosquito";
    let expected = {'m': 1, 'o': 2, 's': 1, 'q': 1, 'u': 1, 'i': 1, 't': 1};
    let result = count_character(value);
    
    expect(result).toEqual(expected);
});
