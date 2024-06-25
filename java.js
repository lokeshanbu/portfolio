//hoisting 
console.log(greet);
console.log(x);
var x = 9;
function greet(){
    console.log("Hello World");
}  
const z = 10;
console.log(z);

console.log(greet);
let greet1 = () => {
    console.log("Hello World");
}
// greet();
console.log(greet1);