const arr = [10,11,5,7,82];   

//Mutatating Methods :- 

arr.push(31);                             //Add Element last in array 
arr.pop();                                 //Remove last elemnt in array  
arr.unshift(26);                           //Add Elemnt in starting  
arr.shift();                               //Remove Element from starting    
arr.reverse();                           //Reverse the Array   
arr.sort((a,b)=>a-b);                    //Sort the Array                                         
console.log(arr);


//Higher Order Array Function 

console.log(arr.some(num=>num>10));
console.log(arr.every(num=>num>10));
console.log(arr.map((item)=>item+2));

const arr2 = [7,9,12,13,84]
console.log(arr2.filter(item=>item>10))
console.log(arr2.reduce((num,acc)=>num+acc,0))

arr2.fill(31);
console.log(arr2);

const arr3 = [10,12,32,31,89];
arr3.splice(0,1,43,143);
arr3.splice(3);
console.log(arr3);

const arr4 = [11,12,32,432,56,89];
console.log(arr4.find((Element)=>Element === 12));
console.log(arr4.findIndex((Element)=>Element === 89));

// Non-Mutating Array :-

const arr5 = [11,22,33,44,55,66];
console.log(arr5.slice(1,4));
console.log(arr5.slice(2));
console.log(arr5.slice(-3));
console.log(arr5.slice(1,-3));
console.log(arr5);

console.log(arr5.includes(33));                //Checks if an array contains a value.
console.log(arr5.indexOf(55));                 //Returns the first index of a value.



