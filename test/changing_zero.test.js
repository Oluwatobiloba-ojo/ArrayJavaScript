const {changing_zero} = require("../src/changing_zero_element_to_zero");

test("test that the inner array having zero will be change to zero in all the element", ()=>{
    let input = [[0, 5], [2, 3]];
    let output = [[0, 0], [2, 3]];
    let result = changing_zero(input);
    expect(result).toEqual(output);
});

test("test that inner array having a zero element all the element in the inner array will change to zero", ()=>{
    let input = [[2, 3], [1, 0], [5, 3]];
    let output = [[2, 3], [0, 0], [5, 3]];
    let result = changing_zero(input);
    expect(result).toEqual(output);
})
