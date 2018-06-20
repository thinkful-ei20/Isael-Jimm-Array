const memory = require('./memory');

class highArray {
  constructor(){
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value){
    this.resize(this.length + 1);
    memory.set(this.ptr + this.length, value);
    this.length++;//try to put this first to see what happens
  }


}





module.exports = highArray;
