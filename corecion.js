console.log([] + {});
console.log({} + {});
console.log([] == []);
console.log({} == {});
console.log({} == []);

console.log(5 + +"3");            // 5=3 = 8
console.log(5 + -"2");            // 5-2 = 3

console.log({} == false);            // false
console.log([] == false);            // True

console.log(null === undefined)
console.log(null == undefined)

console.log(undefined == NaN);

console.log(false == NaN)


//Pre-Increment :- Increments the value first, then returns the updated value.
//Post-Increment :- Returns the current value first, then increments it.

let x = 1;
console.log(x++ + x++ + x++ - x++ + x); //7 (1,2,3-4+5)


console.log("5" - -"2" + "3")   // 73




