//Map Polyfills

const array = [1,2,3,4,5]

Array.prototype.myMap = function(Callback)
{
  let result = [];
  for(let i =0 ; i<this.length; i++)
  {
    result.push(Callback(this[i] , i , this))
  }

  return result ;
}

const newArray = array.myMap((num)=>num*2);
console.log(newArray);

//Filter 

Array.prototype.myFilter = function(Callback){
  const result = [];
  for(let i = 0 ; i<this.length ; i++)
  {
    if(Callback(this[i], i , this))
    {
      result.push(this[i])
    }
  }
  return result;
}

const filterArray = array.myFilter((num)=>num>2);
console.log(filterArray);


//Reduce 

Array.prototype.myReduce = function(Callback , initialValue){
  let accumulator = initialValue !==undefined ? initialValue : this[0];
  let startIndex = initialValue !==undefined ? 0 : 1;

  for(let i = startIndex ; i< this.length ; i++)
  {
    accumulator = Callback(accumulator , this[i], i , this)
  }

  return accumulator;
}

const reduceArray = array.myReduce((num, acc)=>acc+num, 0);
console.log(reduceArray);

