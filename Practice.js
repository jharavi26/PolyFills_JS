const art1 = new Promise((resolve, reject)=>setTimeout(resolve, 1000, "FIRST"))
const art2 = new Promise((resolve, reject)=>setTimeout(resolve, 500, "SECOND"))
const art3 = new Promise((resolve, reject)=>setTimeout(reject, 300, "THIRD"))

Promise.race([art1, art2, art3]).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
