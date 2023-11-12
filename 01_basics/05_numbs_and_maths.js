// 12 chai aur code
const num = 400;
const balance = new Number(10);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2)); // this metheod will give precision value ex : 100.00
const otherNumber = 33.555;
console.log(otherNumber.toPrecision(4)); //precision will return a string
const thousand = 1000000;
console.log(thousand.toLocaleString('en-IN'));

//------------------------------------------------------------------------------------------------
console.log("Math classs");

console.log(Math);
console.log(Math.abs(-22)); // will give the absolute value of a number
console.log(Math.round(4.3)); // round of the value
console.log(Math.ceil(4.3));  // this will return the value of top 
console.log(Math.floor(4.2)); // floor will return the value which is round of and down
console.log(Math.min(3,2,4,0,1,)); // this will return the min value
console.log(Math.random()); // this will return the value between 0 and 1
console.log((Math.random()*10)+1);

console.log("Random number ",Math.floor(Math.random()*10));
const min =  10 ;
const max = 20 ;
