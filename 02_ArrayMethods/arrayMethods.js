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