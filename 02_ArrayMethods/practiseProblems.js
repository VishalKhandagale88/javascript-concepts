//Make an array of numbers that are doubles of the first array

const  arr = [2,3,5,5,6];
// map always takes a call back function
let ans = arr.map(double);

function double( value,index,arr ){
    return value*2;
}
console.log(ans);

// other method

let ans1 =arr.map((value,item,arr)=>{
    return value*2;
})
console.log(ans1);
console.log("---------------------------------------------------------------------------------");

/*
Convert to Uppercase:

Input: ['apple', 'banana', 'cherry']

Output: ['APPLE', 'BANANA', 'CHERRY'] 
*/

const str = ['apple', 'banana', 'cherry'];
let strToUpperCase =  str.map((value,index,arr)=>{
    return value.toUpperCase()
})
console.log(strToUpperCase);

console.log("---------------------------------------------------------------------------------");

/*
    Calculate the Length:

    Input: ['dog', 'cat', 'elephant']

    Output: [3, 3, 8]
*/ 

const animalArray = ['dog', 'cat', 'elephant']
const animalArrayLength = animalArray.map((value,index,arr)=>{
    return value.length;
})
console.log(animalArrayLength);

/*

Extract First Names:

Input: ['John Doe', 'Alice Smith', 'Bob Johnson']

Output: ['John', 'Alice', 'Bob']
*/

const names = ['John Doe', 'Alice Smith', 'Bob Johnson'];
const namesFirstLetter = names.map((value,index,arr)=>{
    const firstName = value.split(' ');
    return firstName[0];
})

console.log(namesFirstLetter);
