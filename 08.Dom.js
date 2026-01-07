let elm = document.getElementById("art1");                       //Returns a one Element 
elm.style.color = "green";
console.log(elm);

//The HTMLCollection is live means that it is automatically updated when the DOM tree in the document changes.
//Note that the HTMLCollection is an array-like object.

let head = document.getElementsByClassName("header");                  // Returns a HTML LiveCollections
console.log(head[0].textContent);

let qs1 = document.querySelector(".desc")                      //document.querySelector Returns first matching element.
console.log(qs1.textContent);                                                                                            


let qs2 = document.querySelectorAll(".desc")                   //document.querySelectorAll return static nodelist of all Matches .
qs2.forEach(p =>console.log(p.textContent));


// Traversing in Dom 

let parent = document.querySelector(".child");
console.log(parent.parentNode);

let currentNode = document.querySelector(".current")
let nextSibling = currentNode.nextElementSibling;
console.log(nextSibling);

let previousSibling = currentNode.previousElementSibling;
console.log(previousSibling);

let parentNode = document.querySelector("#menu");
let child = parentNode.firstChild;
let childElement = parentNode.firstElementChild;
console.log(child);
console.log(childElement);

let lastChildElement = parentNode.lastElementChild;
let lastChild = parentNode.lastChild;

console.log(lastChild);
console.log(lastChildElement);

let children = parentNode.children;
console.log(children);

