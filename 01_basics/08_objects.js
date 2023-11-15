// 16 chai aur code
// singleton --> if we create object with constructor then we will get a singleton



// object literals

const user = {
    name:"vishal",
    age:20,
    location:"Mumbai",
    email:"Vishal@gmail.com",
    isLoggedIn : true,
    lastLoggedIn :["Monday","Saturday"]
}
// how to access the object
console.log(user["name"]); // this is most recommanded

// freeze method from Object class will freeze the object and not let the updates that we made in object to propogate in object
Object.freeze(user); 
user.name="Vishal khandagale"
console.log(user);



const userOne = {
    name:"vishal khandagale",
    age:23,
    location:"Mumbai Maharastra",
    email:"Vishal.khandagale@gmail.com",
    isLoggedIn : true,
    lastLoggedIn :["Monday","Sunday"]
}
userOne.greet = function greetUser(){
    console.log(`Hello ${this.name}`);
}
console.log(userOne.greet());