console.log("Hello World");

// commonjs
// const math = require("./math");
// console.log(math);
// console.log(math.add(1, 2));
// console.log(math.sub(1, 2));

// const {add, sub} = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// es module
import mul, {add, sub, add1, sub1} from "./math.js";
import randomColor from "randomcolor";

// node_modules, package-lock.json은 없어도 됨.

console.log(add(1, 2));
console.log(sub(1, 2));

console.log(add1(1, 2));
console.log(sub1(1, 2));
console.log(mul(3, 2));

console.log(randomColor());

