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

