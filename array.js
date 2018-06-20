const Mem = require('./memory');
const Memory = new Mem();

class highArray {
  constructor(){
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
    this._capacity = 0;
  }

  push(value){
    this._resize(this.length + 1);
    Memory.set(this.ptr + this.length, value);
    this.length++;//try to put this first to see what happens
    if(this.length > this._capacity){
      this._capacity++;
    }
  }

  pop(){
    const popped = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return popped;
  }

  _resize(len){
    if(len <= this._capacity){
      return;
    }
    let newPtr = Memory.allocate(len);
    if(newPtr === null){
      throw new Error('Out of memory');
    }
    Memory.copy(newPtr, this.ptr, this.length);
    Memory.free(this.ptr);
    this.ptr = newPtr;
  }

  get(index){
    return Memory.get(this.ptr + index);
  }

}

module.exports = highArray;

// 1.
