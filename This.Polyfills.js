const person = {
  name : "Ravikumar",
  lastName : "Jha" , 
}

function fullname (age , city){
  console.log(`Name is ${this.name} & lastName is ${this.lastName} & age is ${age} & live in ${city} `)
}

fullname.call(person , 27 , "Mumbai");

// Call PolyFills 
 
Function.prototype.myCall = function(context = {} , ...args){
  if(typeof this !== "function"){
    throw new Error(this + "It is not Callable");
  }

  context.fn = this;
  context.fn(...args);

}

fullname.myCall(person, 26 , "Delhi")


//Apply Polyfills

Function.prototype.myApply = function(context = {}, args = []){
  if(typeof this !== "function"){
    throw new console.error(this + "It is not Callable");
  }

  if(!Array.isArray(args)){
    throw new TypeError("CreateListFromArray like called on non-object");
  }

  context.fn = this;
  context.fn(...args);

}

fullname.myApply(person, [22, "Surat"])

//Bind polyfills 

// Bind polyfill
const person2 = {
  name : "Ravikumar",
  LastName : "Jha",
}

function greet(city){
  console.log(`${this.name} & lastName is ${this.LastName} & live in ${city}`)
}


Function.prototype.myBind = function(context = {}, ...args){
  if(typeof this !== "function"){
    throw new Error("This is not Bounded")
  }

  context.fn = this;
   return function(...newArgs){
    context.fn(...args, ...newArgs)
   };
};

const newFunc = greet.myBind(person2, "Mumbai");
newFunc();



