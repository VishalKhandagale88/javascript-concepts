// forEach() 
const number = [1,2,3,4,5];
number.forEach(consoleItem);

function consoleItem(item,index,arr){
    console.log(`${index}: ${item}`);
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

const mapResult = n1.map((value,index,arr)=>{
    return value*2;
})
console.log(mapResult);

const products = [
    {
        name:'laptop',
        price:1000,
        count : 5
    },
    {
        name:'TV',
        price:5000,
        count : 7
    },
    {
        name:'phone',
        price:2000,
        count : 9
    }
]

let productPriceArray=products.map(product => product.price * product.count)
console.log(productPriceArray);
// how to add new attribute and value with the existing array
let newProductArray = products.map(item =>({
    name: item.name,
    totalPrice:item.count*item.price
}))
console.log(newProductArray);
console.log("---------------------------------------------------------------------------------");
// Filter function
const num2 = [1,2,3,4,5,6]

// filter function will not change the array but create a new array
const evenNumberrArray  = num2.filter(isEven);
function isEven(value){
    return value%2===0;
}
console.log(evenNumberrArray);

const evenNum =  num2.filter((value)=>{
    return value%2===0;
})
const oddNumberArray = num2.filter(number=>{
    return number%2!=0;
})
console.log(oddNumberArray);

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
        name:"Tim",
        age:24
    },
    {
        name:"Stive",
        age:27
    },
    {
        name:"Mark",
        age:20
    },
    {
        name:"Elon",
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
const participants = ['vishal','tim','jobs','jai','mark'];
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
console.log("Number 5  is here");
console.log(number5);

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
// 10
// includes
// returns true or false
const names1 =["Florin",'ivan','liam'];
const result =  names1.includes("ivan");
console.log(result);
console.log("---------------------------------------------------------------------------------");
// 11 
// join(seperator) method 
const countries = ["India","USA","England"]
const countriesResult = countries.join(" ");
// in join method we can give any seperator
const countriesResult1 = countries.join("-")
console.log(countriesResult1);
console.log(countriesResult);
console.log("---------------------------------------------------------------------------------");
//12
// reverse() method
// reverse() method will reverse the chnage the existing array
const number6 = [1,2,3,4,5];
number6.reverse();
console.log(number6);
console.log("---------------------------------------------------------------------------------");

const string1 = 'coding is fun';
const reverseString = string1.split('').reverse().join('');
console.log(reverseString);
//13
// push method
// push method add elements in array 
// changes the existing array
const number7 = [12,23,4,4,5,5,6];
number7.push(1,2,2,3,3);
console.log(number7);
console.log("---------------------------------------------------------------------------------");

// 14
// pop method
// pop method will remove the last element from the array
const number8  = [2,3,3,5,5,5];
number8.pop();
console.log(number8);

console.log("---------------------------------------------------------------------------------");
// 15 
// unshif method
// this method will add element at the starting of the array
const number9 = [2,3,3,5,5,5,];
number9.unshift(-1);
console.log(number9);
console.log("---------------------------------------------------------------------------------");
// 16 
// shift method
// this will remove the element at the stating 
const number10 = [0,2,3,4,5,5,6,];
number10.shift();
console.log(number10);
console.log("---------------------------------------------------------------------------------");
// 17
// indexOf method 
const names2 = ['florin','ivan','liam'];
const idx =names2.indexOf('ivan');
console.log(idx);
console.log("---------------------------------------------------------------------------------");
console.log("lastIndexOf()");
const names3 = ['florin','ivan','liam','jay','florin']
const lastIndex = names3.lastIndexOf('florin');
console.log(lastIndex);
console.log("---------------------------------------------------------------------------------");
// 18 
// every() method
// study later
console.log("every() method study later");
console.log("---------------------------------------------------------------------------------");
//19 
// some() method
const number11 = [1,2,3,4,5];
const number11Res =  number11.some(greaterThanFour)
function greaterThanFour(item) {
    return item>4;
}
console.log(number11Res);
console.log("---------------------------------------------------------------------------------");
const person1 = [{
    name:'vishal',
    age:23
},{
    name:'reshma',
    age:22
},{
    name:'leo',
    age:20
},{
    name:'das',
    age:19
}
]

const personAge = person1.some(ageOfPerson);

function ageOfPerson(person1) {
    return person1.age>=20;
}
console.log(personAge);

console.log("---------------------------------------------------------------------------------");
// 20
const names4 = ['vishal','liam','muskan','ali','mach'];
const names4Res = names4.find(findVishal);

function findVishal(item) {
    return item === "vishal";
}
console.log(names4Res);

const person2 = [
    {
        name:"vishal",
        age : 23
    },{
        name:"lohit",
        age:22
    },{
        name:"sinzo",
        age:20
    },{
        name:"lamda",
        age:25
    }
]

const sinzo =  person2.find(findSinzo);
function findSinzo(item) {
    return item.name === "sinzo"
}
console.log(sinzo);
console.log("---------------------------------------------------------------------------------");
//21 findIndex() method
const number12 = [1,2,3,4,5];
const number12Res = number12.findIndex(findThree);
function findThree(value) {
    return value === 3;
}
console.log(number12Res);
console.log("---------------------------------------------------------------------------------");
//22 from()
// creates a shallow copy of of array from array or iterable object
const strNumber = '1234567890';
const strNumberResult = Array.from(strNumber);
// the above result will return the array of string
console.log(strNumberResult);
// to convert the string into actual number
const stringNumberResult1 = Array.from(strNumber,mapFunction);
function mapFunction(value){
    return Number(value);
}
console.log("number array");
console.log(stringNumberResult1);
// using map function

const stringNumberMapArrowFunction = Array.from(strNumber,value=>{
    return Number(value);
})
console.log("String number map arrow function");
console.log(stringNumberMapArrowFunction);

// removing duplicate values form the array 
const number13 = [1,2,3,3,3,2,2,4,5,6,5,5,3,8];
const uniqueValues = new  Set(number13);
console.log(uniqueValues);
const uniqueValuesArray = Array.from(new Set(number13));
console.log('Unique value array');
console.log(uniqueValuesArray);
// the same thing we can also do with strings as well
console.log("---------------------------------------------------------------------------------");
// 23 isArray() function
// isArray method id used to find whether the varible is type of Array or not
const name5 = ['vishal','tom','jam','jim','oswald'];
const string2 = "vishal";
const number14 = 15;
console.log(`name5 varible is of array type :  ${Array.isArray(name5)}`);
console.log(`string2 varible is of array type : ${Array.isArray(string2)}`);
console.log(`number14 varible is of array type : ${Array.isArray(number14)}`);