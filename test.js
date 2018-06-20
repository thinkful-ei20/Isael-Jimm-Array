const highArray = require('./array');

function main(){
    highArray.SIZE_RATIO = 3;

    let arr = new highArray();

    arr.push(13);

    console.log(arr);
}

main();