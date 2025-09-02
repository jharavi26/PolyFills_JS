//Currying :-Currying is a process in which a function, instead of taking all arguments at once, takes them one at a time and returns a new function that takes the next argument.

function multiplication(a){
  return function (b){
    return function (c){
      return a*b*c
    }
}
}

console.log(multiplication(3)(4)(5));

//Debouncing in Javascript :-Debouncing is a performance optimization technique used in JavaScript to limit the rate at which a function executes, especially for events that fire rapidly. 


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

