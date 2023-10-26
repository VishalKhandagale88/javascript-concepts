//Make an array of numbers that are doubles of the first array

const  arr = [2,3,5,5,6];
// map always takes a call back function
let ans = arr.map(double);

function double( value,index,arr ){
    return value*2;
}
console.log(ans);