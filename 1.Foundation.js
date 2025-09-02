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




// Function : Block of code 