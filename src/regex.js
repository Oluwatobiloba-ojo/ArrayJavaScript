function isSafe(password){
    if(password.length < 6) return false;
    let pattern = /^([A-Z]+[a-z]+[0-9]+[\W]+)$/;
    return pattern.test(password);
}

module.exports = {isSafe};

let pat = /^([A-Z]+)([a-z]+)([0-9]+)([\W]+)$/
console.log(pat.test("Password12@"));
