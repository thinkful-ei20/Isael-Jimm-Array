const highArray = require('./array');

function main(){
    highArray.SIZE_RATIO = 3;

    let arr = new highArray();

    arr.push(13);

    console.log(arr);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr.get(0));
}

main();