// The execution context is created in two phases.

// Memory creation phase - JS will allocate memory to variables and functions.
// Code execution phase

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

console.log(square2);
console.log(square4);


// Hoisting : Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

// console.log(r);                    // Reference Error 
// let r = 24;

console.log(s);                    // undefined
var s = 26;     


greet();                                                  // Function Hoisting with Default Parameter
function greet(Name = "Ravi"){
  console.log("Hi, " +  Name)
}

