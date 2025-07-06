function add(a, b) { return a + b } ;   

function sub(a, b) { return a - b };

// commonjs
// module.exports = {
//     add,
//     sub 
// };

// es module
export {add, sub};

export function add1(a, b) { return a + b } ;   
export function sub1(a, b) { return a - b };

export default function multiply(a, b) { return a * b }
