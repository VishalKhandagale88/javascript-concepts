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

const store = [
    {
        product:"laptop",
        value:1000,
        count:3
    },
    {
        product:"desktop",
        value:1500,
        count:4
    },
    {
        product:"mobile",
        value:500,
        count:10
    }
]

const totalValueStore = store.reduce((accumulator,item)=>accumulator+(
    item.value * item.count
),0)
console.log(totalValueStore);
console.log("---------------------------------------------------------------------------------");
// 5 slice
const number3 = [1,2,3,4,5]
const numberSlice = number3.slice(1,4);
// slice method returns the shallow copy of the array
// original array will not be changed
// the last index is exculded
console.log(number3);
console.log(numberSlice);

// --------------------------------------------------------------------------
const participants = ['florin','Ivan','liam','jai','patrik'];
const winners = participants.slice(0,3);
console.log(winners);
console.log("---------------------------------------------------------------------------------");
// 6 splice
// splice will change the existing array
// splice method is used to remove the elements or replacing the elements in the existing array
console.log("splice() method");
const number4 = [1,2,3,4,5];
const deleted = number4.splice(2,3,6,7,78,8);
console.log(number4);
console.log(deleted);
console.log("---------------------------------------------------------------------------------");
console.log("Sort() method");
const names = ["florin","liam","jai","ivan"]
// sort method changes the existing elements in the array
names.sort();
console.log(names);

const number5 = [74,18,10,5,84,24,105];

number5.sort(compareFunction)
function compareFunction(a,b){
    // < 0 ..... a will come first
    // > 0 ..... b will come first
    // 0   ..... nothing will be changed
    return a-b;
}

const  products1 = [
    {
        name:"laptop",
        price:1000
    },
    {
        name:"desktop",
        price:1500
    },{
        name:"phone",
        price:500
    }
]
products1.sort((a,b)=>{
    return a.price - b.price;
});

console.log(products1);
console.log("---------------------------------------------------------------------------------");
console.log("Array concet method");
// array concat method allows us to concat two or more arrays
// and new array will be returned
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

console.log("---------------------------------------------------------------------------------");
// adding more than one array
// concat method will create shallow copy of array
const arr4 = [7,8,9];
const arr5 = arr1.concat(arr2,arr4);
console.log(arr5);
console.log("---------------------------------------------------------------------------------");
console.log("fill method");
// we can fill all the elements in the array with that particular parameter which is passed in array

const arr6 = [2,3,4,5];
arr6.fill(0);
console.log(arr6);
// fill(number_to_be_filled,from_index,till_index)
// fill method will modify the existing array

const arr7 = [4,5,6,7,8,9,1,2];
arr7.fill(0,3,7);
console.log(arr7);
console.log("---------------------------------------------------------------------------------");