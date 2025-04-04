const myPromise = new Promise((resolve, reject)=>{
  let pizzaArrived = true;
  setTimeout(()=>{
    if(pizzaArrived){
      resolve("Pizza Recieved")
    }
    reject("Did not get yet")
  },2000);
  })

myPromise.then((res)=>console.log(res))
.catch((err)=>console.log("error is:",err));