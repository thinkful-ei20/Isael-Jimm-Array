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

// console.log(MaxSumInArr([4,6,-3,5,-2,1]));


function mergeArrays(arr1, arr2){
  let arr1Index = 0;
  let arr2Index = 0;
  let result = [];
  for(let i = 0; i < arr1.length+arr2.length; i++){
    if(arr1Index >= arr1.length){
      result.push(arr2[arr2Index]);
      arr2Index++;
      console.log('end of arr1');
    } else if (arr2Index >= arr2.length){
      result.push(arr1[arr1Index]);
      arr1Index++;
      console.log('end of arr2');
    } else if(arr1[arr1Index] <= arr2[arr2Index]){
      result.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  return result;
}

// console.log(mergeArrays([1, 3, 6, 8, 11, 4], [2, 3, 5, 8, 9, 10, 12, 13, 14, 15]));

function replaceValueLoop(str, value){
  let firstHalf = '';
  let secondHalf;
  let prevSpace = 0;
  let result;

  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === value) {
      let temp = str.slice(prevSpace,i);
      firstHalf += temp;
      secondHalf = str.slice(i+1);
      prevSpace = i + 1;
      result = firstHalf  + secondHalf;
    }
  }
  return result ? result : str; 
}

function removeCharacters(string, values){
  for(let k = 0; k < values.length; k++){
    string = replaceValueLoop(string, values[k]);
  }
  
  return string;
}

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

function products(arr){
  let results = [];
  for(let k = 0; k < arr.length; k++){
    let result = 1;
    for(let i = 0; i < arr.length; i++){
      if(i !== k){
        result *= arr[i];
      }
    }
    results.push(result);
  }
  return results;
}

// console.log(products([1, 3, 9, 4]));

function twoDArr(arr){
  let xToSet0 = [];
  let yToSet0 = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === 0){
        xToSet0.push(j);
        yToSet0.push(i);
      }
    }
  }
  //console.log(xToSet0);
  //console.log(yToSet0);
  for(let k = 0; k < xToSet0.length; k++){
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(j === xToSet0[k]){
          arr[i][j] = 0;
        }
        if(i === yToSet0[k]){
          arr[i][j] = 0;
        }
      }
    }
  }
  console.log(arr);
}

twoDArr([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]);

function stringRotation(str1, str2){
  if(str1.length !== str2.length) return false;
  return (str1 + str2).includes(str2);
}

// console.log(stringRotation('amazon', 'azonma'));