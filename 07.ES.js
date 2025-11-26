// a ?? b → returns a unless a is null or undefined. If a is null or undefined, returns b.

//export default for single export
//export for multiple named exports

console.log(false ?? 26);
console.log(null ?? 26);
console.log(undefined ?? 26);
console.log("Ravi" ?? 26);

// a || b → returns a unless a is falsy (false, 0, '', NaN, null, undefined). If a is falsy, returns b.

console.log(false || 26);
console.log(null || 26);
console.log(undefined || 26);
console.log("Ravi" || 26);

//Template Literals
let user = "ART";
console.log(`${user}`)

//Destructing Assignment 

const [r, s, t = 31] = [11,22];
console.log(r,s,t);

const{name , age} = {name : "Ravi", age : 26};
console.log(name);

//Spread Operator : expands arrays/objects

const arr = [21,31];
const arr2 = [...arr, 51];
console.log(arr2);

//Rest Operator : collects Remaining Elements

function result (a, ...num){
  return num.reduce((acc, num)=>acc+num, a)
}
console.log(result(1,2,3,4,5));

