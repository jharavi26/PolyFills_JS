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

//undefined is when memory is allocated for the variable, but no value is assigned yet.
// If an object/variable is not even declared/found in memory allocation phase, and tried to access it then it is Not defined
// Not Defined !== Undefined

// Lexical Environment = local memory + lexical env of its parent. Hence, Lexical Environement is the local memory along with the lexical environment of its parent
// Lexical: In hierarchy, In order

// Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value.


// Shadowing Variable - If one has same named variable outside the block, the variable inside the block shadows the outside variable. This happens only for var.

var a = 100;
{
  var a = 10; // same name as global var
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10, 

//Closure :- JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent. 

// Advantages of Closure 
// Module Design Pattern 
// Currying 
// Memoization
//setTimeout
//Encapsulation

// Disadvantages of Closure:
// Over consumption of memory
// Memory Leak
// Freeze browser