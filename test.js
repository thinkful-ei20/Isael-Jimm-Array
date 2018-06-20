const highArray = require('./array');

function main(){
  highArray.SIZE_RATIO = 3;

  let arr = new highArray();

  arr.push(3);
  console.log(arr);
  //the length is 1, mem address is 0 and the capacity is 1
  
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);
  // the length is 6, mem address is 15, and the capacity is 6
  //the length get increased by one everytime you push a new element to the array
  //the ptr is 15 because the array got resized 5 multiple times.
  //capacity hasnt grows by one everytime we push an element to the arr

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  // the length is 3, mem address is 15, and the capacity is 6
  //the length was decreased by 3 because we used the pop method 3 times reducing the length every call
  //the memory address is still 15 because we didnt need to resize the arr
  //the capacity is still 6 because we didnt need to resize the arr

  // console.log(arr.get(0));
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.push('tauhida');
  // console.log(arr.get(0));
  //The result is NaN because float64Array only supports numbers;

  // console.log(arr);
  // console.log(arr.get(0));
  // console.log(arr.get(arr.length-1));
  // console.log(arr.pop());
  // console.log(arr);
  // arr.push(99);
  // console.log(arr);
}

main();