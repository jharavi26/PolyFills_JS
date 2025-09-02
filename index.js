  let timer = 0;
  document.getElementById("input").addEventListener("keydown" , ()=>{
    clearTimeout(timer);
  timer = setTimeout(function(){
    let inputValue = document.getElementById("input").value;
    document.querySelector(".output").innerText = inputValue
  } , 1000)
  })


let lastExecutionTime = 0;
const delay = 1000;
document.getElementById("input2").addEventListener("input", ()=>{
  const currentTime = Date.now();
  if(currentTime - lastExecutionTime >  delay)
  {
    inputValue2 = document.getElementById("input2").value;
    document.querySelector(".output2").innerText = inputValue2;
    lastExecutionTime = currentTime;
  }
})


document.getElementById("grand").addEventListener("click" , ()=>{
  console.log("GrandParent Clicked")
},);

document.getElementById("parent").addEventListener("click" , ()=>{
  console.log("Parent Clicked")
},);

document.getElementById("child").addEventListener("click" , (e)=>{
  console.log("Child Clicked");
  e.stopPropagation();
},);

// Event Delegation :- Event delegation is a technique where a single event listener is added to a parent element instead of multiple listeners on individual child elements.

document.getElementById("button-container").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    console.log("Button Clicked:", event.target.textContent);
  }
});

