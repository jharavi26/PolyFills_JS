Function.prototype.MyCall = function(context = {} , ...args){
  if(typeof this !== "function"){
    throw new Error(This + "It is not a callable")
  }
  context.fn = this;
  context.fn(...args);
}


const person  = {
  name : "Ravi",
}

const person2  = {
  name : "Art",
}

function print(){
  console.log(this.name)
}

print.MyCall(person2);