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

console.log(replaceSpace('tauhida parveen'));
console.log(replaceSpace('www.thinkful.com /tauh ida parv een'));

console.log(replaceSpaceLoop('tauhida parveen'));
console.log(replaceSpaceLoop('www.thinkful.com /tauh ida parv een'));



