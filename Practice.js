function search(arr){
  for(let i=0; i<arr.length; i++){
    for(j=0; j<arr.length-i-1; j++){
      if(arr[j]> arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
 
  return arr;
}

console.log(search([43,278,30,31,10]))
