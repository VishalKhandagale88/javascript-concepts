// forEach() 
const number = [1,2,3,4,5];
number.forEach(consoleItem);

function consoleItem(item,index,arr){
    console.log("Item");
    console.log(item);
    console.log("Index");
    console.log(index);
    console.log("Array");
    console.log(arr);
}

// Arrow function printing items
number.forEach((item,index,arr)=>{
    console.log(item);
})

// Arrow function to print the index of the item
console.log("Printing index");
console.log();
number.forEach((item,index,arr)=>{
    console.log(index);
})

console.log("printing array");
console.log();
number.forEach((item,index,arr)=>{
    console.log(arr);
})

console.log("---------------------------------------------------------------------------------");

// map function does not create new array infact it create a new array and will return so
// there will be no changes in the current array
console.log("map function");
const n1 = [1,3,4,4,5,2,5,6];
let mapArray = n1.map(double)

function double(value,index,arr){
    return value*2;
}
console.log(mapArray);

//

const products = [
    {
        name:'laptop',
        price:1000,
        count : 5
    },
    {
        name:'desktop',
        price:5000,
        count : 4
    },
    {
        name:'phone',
        price:2000,
        count : 3
    }
]

let productOfPrice=products.map(item => item.price * item.count)

// how to add new attribute and value with the existing array
let creatANewProce = products.map(item =>({
    name: item.name,
    totalPrice:item.count*item.price
}))

console.log(creatANewProce);
console.log("---------------------------------------------------------------------------------");
// Filter function
const num2 = [1,2,3,4,5,6]

// filter function will not change the array but create a new array
const evenNumberrArray  = num2.filter(isEven);
function isEven(value){
    return value%2===0;
}
console.log("Even number of array");
console.log(evenNumberrArray);

const evenNum =  num2.filter((value)=>{
    return value%2===0;
})
console.log();
console.log("Even num");
console.log(evenNum);
console.log("---------------------------------------------------------------------------------");

const people=[
    {
        name:"vishal",
        age:22
    },
    {
        name:"don",
        age:24
    },
    {
        name:"Neon",
        age:27
    },
    {
        name:"while",
        age:20
    },
    {
        name:"germ",
        age:10
    }
]

const ageAbove20 = people.filter((person)=>{
    return person.age>21;
})
console.log(ageAbove20);

console.log("---------------------------------------------------------------------------------");
console.log("Reduce method");
// 4 reduce method

const number2 = [1,2,3,4,5];
//const total = number2.reduce(callback,initalValue)
// call back function recives 4 parameters accumulator, value, index, array

const total = number2.reduce(sum,0);
function sum (accumulator,value,index,arr){
    return accumulator+value;
}
console.log(total);
// accumulator value increases always after addding

// max value by using reduce method

const max = number2.reduce(callback,-Infinity);
function callback(accumulator,value){
    if(accumulator>value){
        return accumulator
    }else{
        return value;
    }
}
console.log(max);