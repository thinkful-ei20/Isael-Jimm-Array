//URLify a string

function replaceSpace(str){
  return str.replace(/\s/g, '%20');
}

function replaceSpaceLoop(str){
  let firstHalf = '';
  let secondHalf;
  let prevSpace = 0;
  let result;

  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === ' ') {
      let temp = str.slice(prevSpace,i) + '%20';
      firstHalf += temp;
      secondHalf = str.slice(i+1);
      prevSpace = i + 1;
      result = firstHalf  + secondHalf;
    }
  }
  return result; 
}

// console.log(replaceSpace('tauhida parveen'));
// console.log(replaceSpace('www.thinkful.com /tauh ida parv een'));

// console.log(replaceSpaceLoop('tauhida parveen'));
// console.log(replaceSpaceLoop('www.thinkful.com /tauh ida parv een'));

const filterArray = (arr, filterNum) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < filterNum){
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

let testArray = [1,2,3,4,5,6,7,8,9];
filterArray(testArray, 5);
// console.log(testArray);

function MaxSumInArr(arr){
  let highestSum = 0;
  let currentSum = 0;

  for(let i = 0; i < arr.length; i++){
    currentSum += arr[i];
    if(currentSum > highestSum){
      highestSum = currentSum;
    }
  }

  return highestSum;
}

console.log(MaxSumInArr([4,6,-3,5,-2,1]));
