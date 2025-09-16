// Object : -an object is a collection of key-value pairs.

//Using new Object 

const car = new Object();
car.brand = "Tesla";
car.model = "Model S";
console.log(car.brand); // Tesla


const person = {
  name : "Art",
  Age : 31,
  Location : "Mumbai",
  drive :  function(){
    console.log("Driving")
  }
};

const p1 = person
p1.drive();
console.log(p1.Age);


const number = {a:10 , b:20, c:30}
console.log(number.b);                                 //dot operator
console.log(number["a"]);                              // using Bracket

number.d = 30;                                            // add new
number.a = 50;                                            // update

console.log(number);

console.log("a" in number);                                 // true
console.log(number.hasOwnProperty("c"));                    // true


//Object Methods

const user = {
  name : "Ravikumar",
  age : 26,
  education : "Master",
}

console.log(Object.keys(user));                             // Response in array Format 
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.freeze(user));                        // Make a object Immutabale 
console.log(Object.seal(user));                          // changes in only existing Property 


// Copy of Object 

// Shallow Copy :- Copies the first level properties of the object. If the property value is a primitive → new copy is created.If the   property value is a reference (object/array) → only the reference is copied (not the actual object). So changes in the nested object affect both copies.

// 1. Using assign Method 

const obj1 = {a : 10, b : 20, d : {c : 30} }
const obj2 = Object.assign({}, obj1);
obj2.d.c = 31
console.log(obj2);

// 2.Using Spread Operator 

const obj3 = {...obj1};
console.log(obj3);


//Deep copy of Object - Changes in nested objects will not affect the original. 

const obj4 = JSON.parse(JSON.stringify(obj1));
obj4.d.c = 30;
console.log(obj1);
console.log(obj4)




