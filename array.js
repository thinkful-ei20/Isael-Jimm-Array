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

  resize(len){
    let oldPtr = this.ptr;
    let newPtr = memory.allocate(len);
    if(newPtr === null){
      throw new Error('Out of memory');
    }
    memory.copy(newPtr, this.ptr, this.length);
    memory.free(this.ptr);
    this.ptr = newPtr;
  }
}





module.exports = highArray;
