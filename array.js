const Memory = require('./memory');

class highArray {
  constructor(){
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value){
    this.resize(this.length + 1);
    Memory.set(this.ptr + this.length, value);
    this.length++;//try to put this first to see what happens
  }

  resize(len){
    let oldPtr = this.ptr;
    let newPtr = Memory.allocate(len);
    if(newPtr === null){
      throw new Error('Out of memory');
    }
    Memory.copy(newPtr, this.ptr, this.length);
    Memory.free(this.ptr);
    this.ptr = newPtr;
  }
}





module.exports = highArray;
