const arr = [2,1,4,5,6,1];
function sort(arr){
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr.length-i-1; j++){
  if(arr[j]> arr[j+1]){
    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
  }
}
}
return arr;
}

console.log(sort(arr));

const result = arr.sort((a,b)=>b-a);
console.log(result);
