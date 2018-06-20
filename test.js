const highArray = require('./array');

function main(){
  highArray.SIZE_RATIO = 3;

  let arr = new highArray();

  //arr.push(13);

  
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);
  // console.log(arr);
  // console.log(arr.get(0));
  // console.log(arr.get(arr.length-1));
  // console.log(arr.pop());
  // console.log(arr);
  // arr.push(99);
  // console.log(arr);
}

main();