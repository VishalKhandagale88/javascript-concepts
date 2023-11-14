// 14 Arrays
// array is object in js
// objects are resizable we dont have to give size of the array while declaring
 
const array = [0,1,2,3,4,5];
const names = ["vishal","sam","mike","nikhil"];

console.log(array);
console.log(names);

// Array methods
// All array methods are coverd in 02_ArrayMethods folder
const games = ["GTA vice city","MineCraft","League of legends","Fortnite","Portal","Temple Run 2"]

names.push(games);
console.log(names[4][1]);

// spread operator
// all elements will be spreaded in one array
const sameNames = ["vishal","sam","mike","nikhil"];
const spreadArray = [...sameNames,...games];
console.log(spreadArray);

// spreading an array
const array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(array1.flat(Infinity));