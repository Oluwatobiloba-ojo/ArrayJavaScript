const {zero_at_the_end_index} = require('../src/zero_end');

test("test that the end result of [0, 4, 2, 0, 5] is going to be [4, 2, 5, 0, 0]",() =>{
    let input = [0, 4, 2, 0, 0, 0];
    let output = [4, 2,0, 0, 0,0];
    let expected = zero_at_the_end_index(input);
    expect(output).toEqual(expected);
});

test("test that the end result of [4, 0, 0, 5, 7] result will be [4, 5, 7, 0, 0]", ()=>{
    let input = [4, 0, 0, 5, 7];
    let output = [4, 5, 7, 0, 0];
    let expected = zero_at_the_end_index(input);
    expect(output).toEqual(expected);
});
