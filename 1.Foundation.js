// DataType :- Number , String , Boolean , null, undefined , symbol, Bigint

//Var : Function Scope 
//let & const : Block Scope

//Falsy Value : 0, false, "" , null , undefined , NaN , -0

console.log([] == false);    // Empty array Convery into "" which is also false Value.

//Type coercion in JavaScript is the process of converting a value from one type to another automatically (implicit coercion) or manually (explicit coercion).

// Explicit Conversion 

String(123);                                // convert number into string "123"
Number("456");                              // convert string into Number 456
Boolean(0);                                // convert number into Boolean false
parseInt("42")                             // 42
  

//Implicit Conversion :- Automatically done by JavaScript Engine.

console.log(0 == false);                                      // true  (false → 0)
console.log("0" == false);                                    // true  ("0" → 0, false → 0)
console.log(null == undefined);                               // true (special case in JS spec)
console.log([] == false);                                     // true  ([] → "" → 0, false → 0)
console.log([] == 0);                                         // true  ([] → "" → 0)
console.log([1] == 1);                                        // true  ([1] → "1" → 1)
console.log([1,2] == "1,2");                                  // true  (toString of array)
console.log({} == "[object Object]");                         // true (toString of object)
console.log(NaN == NaN);                                       // false (NaN is never equal to itself)




// Function : A block of reusable code designed to perform a specific task.

// 1. Function Declaration : Way to define Function.
// 2. Calling Function : execute the call inside that function .
// 3.Function Expression : define a function as value & assign it to a variable. 
// 4.Annoymous Function : Without Name & used as argument or callback.
// 5. Immediately Invoked Function : execute as soon as they are defined.


// Parameters vs Arguments
//Parameters: Variables listed in function definition
//Arguments: Values passed when calling the function

function Sum(a, b){                                    // a & b function Parameters
  return a+b;
}
console.log(Sum(2,3));                                 // 2 & 3 function Arguments

//Function Expression 
const add = function (a, b){
  return a+b;
}
console.log(add(31,3));

//IEFF Function 
(function() {
  console.log("IIFE executed!");
})();


// Arrow function 

const mul = (r,s)=>{
  return r * s;
}
console.log(mul(31, 26));

const divide = (c,d)=>c/d;                      // If function body is a single return statement, you can omit {} and return.

console.log(divide(6,2));


const Greet = ()=>"Hello Ravi";
console.log(Greet());

const cube = (n)=>n*n*n;               // Way to write in a single statement .
console.log(cube(5));
