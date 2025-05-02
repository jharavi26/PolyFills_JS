const get = async()=>{
  const p =new Promise((resolve, reject)=>{
    resolve(31);
  })
  return p;
}

console.log(get());
