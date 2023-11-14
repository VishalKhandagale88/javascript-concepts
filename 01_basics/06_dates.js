// Dates
// 13 chai aur code
let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(typeof date);
// months start with 0 in java script
let createdDate = new Date(2023,0,23);
console.log(createdDate);
console.log(createdDate.toDateString());

let date1 = new Date("01-14-20223");
console.log(date1.toDateString());

// time stamps
let timeStamps = Date.now();
console.log(timeStamps);
console.log(date.getDate());
let customizeDate = date.toLocaleDateString('default',{
    weekday:"long" 
})
console.log(customizeDate);