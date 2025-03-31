// Callback Example :- 

function sum(a,b,cb){
  let result = a+b;
  cb();
  return result;
}

function show() {
  console.log("art")
}

console.log(sum(2,3,show));

//Nested Callback

function process1(cb){
  setTimeout(() => {
    console.log("Process 1 Compeleted");
    cb(); 
  }, 500);
}

function process2(cb){
  setTimeout(()=>{
    console.log("Process 2 Compeleted");
    cb();
  }, 500)
}

function process3(cb){
  setTimeout(()=>{
    console.log("Process 3 Compeleted");
    cb();
  }, 500)
}

process1(()=>{
  process2(()=>{
    process3(()=>{
      console.log("All Process Complted")
    })
  })
})



// using Promise

function step1() {
  return new Promise((resolve) => setTimeout(() => {
  setTimeout(() => {
    console.log("Step 1 complete");
    resolve();
  }, 1000)}))
}

function step2() {
  return new Promise((resolve) => setTimeout(() => {
  setTimeout(() => {
    console.log("Step 2 complete");
    resolve();
  }, 1000)}))
}

function step3() {
  return new Promise((resolve) => setTimeout(() => {
  setTimeout(() => {
    console.log("Step 3 complete");
    resolve();
  }, 1000)}))
}



  step1()
  .then(step2)
  .then(step3)
  .then(()=> console.log("All Steps Done using Promise"))


//using Async Await 

// async function runProcesses() {
//   await step1();
//   await step2();
//   await step3();
//   console.log("All Processes Completed");
// }

// runProcesses();




