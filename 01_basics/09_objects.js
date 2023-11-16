// chai aur code 17

const user = new Object(); //--> this is a single ton object

const user1 ={} //  this is not a single ton object , it is a object literal

const user2 ={
    email : "vishal@gamil.com",
    fullName:{
        userFullName:{
            firsName:"Vishal",
            lastName:"Khandagale"
        }
    }
}
const obj1 = {
    1:"a",2:"b"
}
const obj2 ={
    3:"c",4:"d"
}
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

const obj4 = {...obj1,...obj2} // this is combining object using spread operator
console.log(obj4);
console.log(Object.keys(obj1)); // this is give all the keys and return array
console.log(Object.values(obj1)); // this is give all the values and return array
console.log(Object.entries(obj1)) // this will return key value pair in form of array