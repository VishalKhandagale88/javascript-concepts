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


console.log("map function");
const n1 = [1,3,4,4,5,2,5,6];
n1.map(double)

function double(value,index,arr){
    return value*2;
}
console.log(n1);