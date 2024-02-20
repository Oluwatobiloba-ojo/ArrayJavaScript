const {isSafe} = require("../src/regex");


test("test that if the password has uppercase but no lowercase return false", ()=>{
    let password = "ABAYOMI";
    expect(isSafe(password)).toBe(false);
})

test("test that if the password has uppercase and lowercase return false if length is below 6", ()=>{
    let password = "Aba";
    expect(isSafe(password)).toBe(false);
});

test("test that if the length is 6 upward but no uppercase", ()=>{
    let password = "password";
    expect(isSafe(password)).toEqual(false);
});

test("test that if the length is 6 upward and their is no small letter it return false", ()=>{
    let password = "PASSWORD1@";
    expect(isSafe(password)).toEqual(false);
});

test("test that is if there is no special character it return false", ()=>{
    let password = "Password13";
    expect(isSafe(password)).toEqual(false);
});

test("test that if it is all complete return true", ()=>{
    let password = "Password12@";
    expect(isSafe(password)).toEqual(true);
})

test("test that if the password validation has lower case, upper case, special character but the length is less than 6", ()=>{
  let password = "Pa12@"  
  expect(isSafe(password)).toEqual(false);
})

