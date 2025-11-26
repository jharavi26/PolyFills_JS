let elm = document.getElementById("art1");                       //Returns a one Element 
elm.style.color = "green";
console.log(elm);

let head = document.getElementsByClassName("header");                  // Returns a HTML LiveCollections
console.log(head[0].textContent);

let qs1 = document.querySelector(".desc")                      //document.querySelector Returns first matching element.
console.log(qs1.textContent);                                                                                            


let qs2 = document.querySelectorAll(".desc")                   //document.querySelectorAll return nodelist of all Matches .
qs2.forEach(p =>console.log(p.textContent));