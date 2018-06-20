const memory = require('./memory');

class highArray {
  constructor(){
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }

}





module.exports = highArray;
