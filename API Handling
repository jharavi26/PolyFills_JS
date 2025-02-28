function getData(){
  fetch("https://picsum.photos/v2/list")
  .then((res)=>res.json())
  .then((res)=>{
    const data = res.map((item)=>(
    `<span><img src = ${item.download_url} width="200px">
  </span>`
  ))
document.getElementById("output1").innerHTML = data  
})
}

function getData1(){
  fetch("https://picsum.photos/v2/list")
  .then((res)=>res.json())
  .then((res)=>{
    if(res.length>0){
    const data = `<span><img src = ${res[0].download_url} width="200px"></span>`
    document.getElementById("output1").innerHTML = data 
}})
}

const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    const success = true; // Change this to false to test rejection
    setTimeout(() => {
      if (success) {
        resolve('Operation successful!');
      } else {
        reject('Operation failed.');
      }
    }, 2000); // Simulate 2 seconds delay
  });
  myPromise
  .then(result => {
    console.log(result); // Runs if the promise is fulfilled
  })
  .catch(error => {
    console.log(error); // Runs if the promise is rejected
  });

const pizzaOrder = new Promise((resolve, reject) => {
    const pizzaArrived = true; // Simulating success
  
    setTimeout(() => {
      if (pizzaArrived) {
        resolve('Pizza is here!'); // Success
      } else {
        reject('No pizza today!'); // Failure
      }
    }, 2000); // Wait 2 seconds
  });
  
  // How to use the promise
  pizzaOrder
    .then(message => {
      console.log(message); // If fulfilled, this runs
    })
    .catch(error => {
      console.log(error); // If rejected, this runs
    });
  

    let promise = new Promise(function(resolve, reject) {
      resolve(5);
    });
    
    promise
      .then((result)=>{
        console.log(result); // Output: 5
        return result * 2;
      })
      .then((result )=>{
        console.log(result); // Output: 10
        return result + 5;
      })
      .then((result)=>{
        console.log(result); // Output: 15
      });
    
const art1 = new Promise((resolve, reject)=> setTimeout(resolve, 1000, "First"))
const art2 = new Promise((resolve, reject)=> setTimeout(reject, 1000, "Second"))
const art3 = new Promise((resolve, reject)=> setTimeout(resolve, 2000, "Third"))

Promise.allSettled([art1, art2, art3])
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(function() {
  console.log("The promise is complete!");
});

