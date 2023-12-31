let marks =  20
console.log(marks);
console.log(typeof marks);  // type of number

let myName = "vishal";
console.log(typeof myName); // type of string

let numberValue = Number(marks);
console.log("numberValue varible type is : ",typeof numberValue);

let num = Number("22skm");
console.log("num varible is of type : ", typeof num); // this will return NaN

let num1 = Number(null);
console.log("num1 is of type : ",num1); // this will give 0 as converted value
//---------------------------------------------------------------------------------
// 7 and 8 video s content need to understand  from chai aur javascript
//-------------------------------------------------------------------------------

// there are two types of data typs
// 1 . Primitive this are call by value means we will get the value that is associated
// with that varibale 
// 7 primitive types : String, Number, Boolean , null , nudefined, symbol, BigInt
// symbol is used to make value unique
// 
// 2 . Reference type (or) non primitive data types
// Arrays , Object , functions
// javascript is a dynamically types language
const score = 10;
const decimalNum = 10.2;
const isLoggedIn = false;
const outSideTemp =  null;

// array
const names = ["vishal","lokesh","raja","lohith"];
// object  
const myObj  = {
    name:"vishal",
    job :"Full stack developer"
}

// function 
// we can store function in a variable in javascript
const myFun =  function() {
    console.log("Hello world");
}


//-----------------------------------------------------------------------------------------
//10 chai aur code

// Two types of memories 
// 1 .  stack memory 
// stack memory used in all primitive types
let name = "vishal"
let anotherName = name // here we are geeting the copy of the value
anotherName = "khandagale" 
console.log(name);
console.log(anotherName);

// 2 . Heap memory (Non-primitive) --> we will get the referce of the original value
// if we change any thing original value will get changed
 
const user1 = {
    name:"vishal",
    age:22
}

const user2 = user1; // here we will get the referece of the user1 object we will not get the copy of  user1 object
user2.age = 20; // so this will change the value in both the variables
console.log(user1.age);
console.log(user2.age);