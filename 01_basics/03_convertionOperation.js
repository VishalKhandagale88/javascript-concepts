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
