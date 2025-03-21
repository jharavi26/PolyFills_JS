const person = {
  name : "Ravikumar",
  lastName : "Jha" , 
}

function fullname (age , city){
  console.log(`Name is ${this.name} & lastName is ${this.lastName} & age is ${age} & live in ${city} `)
}

fullname.call(person , 27 , "Mumbai");

// Call PolyFills 
 
Function.prototype.myCall = function(context , ...args){
  if(typeof this !== "function"){
    throw new console.error(this + "It is not Callable");
  }

  context.fn = this;
  context.fn(...args);

}

fullname.myCall(person, 26 , "Delhi")


//Apply Polyfills

Function.prototype.myApply = function(context , args = []){
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
Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " can not be bound");
  }

  const fn = this;
  return function(...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

const newFunc = fullname.myBind(person, 21, "Banglore");

newFunc(); 


//Debounce 

function debounce(func , delay){
  let timer ;
  return function(...args){
  const context = this;
  clearTimeout(timer);

  timer = setTimeout(() =>func.apply(context, args) , delay);
}
}

function art (){
  console.log("Art")
}

const debounceLog = debounce(art, 1000)

debounceLog();
debounceLog();
debounceLog();
