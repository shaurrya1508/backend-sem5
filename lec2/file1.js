console.log("from file1.js");
function add(a, b) {
    return a + b; 
}
function subtract(a, b) {
    return a - b;
}   
module.exports.add = add;
module.exports.subtract = subtract;
const file2 = require("./file2.js");
console.log(file2);
