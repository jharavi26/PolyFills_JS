//Promise :-  A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// A Promise is in one of these states:

//   1.Pending: initial state, neither fulfilled nor rejected.
//   2.fulfilled: meaning that the operation was completed successfully.
//   3.rejected: meaning that the operation failed.


let p1 = new Promise((resolve , reject)=>{
  let success = true;
 setTimeout(()=>{
  if(success){
    resolve("result")
  }
  else {
    reject("Error")
  }
 }, 1000);
})
p1.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(console.log("Process completed"));


//Promise Chaining :- Perform Series of asynchronous operation in a sequence where each operation in a sequence where each operation need result of previous one.

let p2 = new Promise((resolve, reject)=>{
  resolve(3);
})

p2.then((num)=>{
  console.log(num);
  return num*3;
})
.then((num)=>{
  console.log(num);
  return num*3;
})
.then((num)=>{
  console.log(num);
  return num*3;
})
.then((num)=>{
  console.log(num);
  return num*3;
}).catch((err)=>console.log("Error"));


const p21 = new Promise((resolve, reject)=>setTimeout(resolve, 2500, "First"));
const p31 = new Promise((resolve, reject)=>setTimeout(reject, 2000, "Second"));
const p41 = new Promise((resolve, reject)=>setTimeout(resolve, 3000, "Third"));

Promise.race([p21, p31, p41])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(console.log("Task completed"));


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