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

// Arrow function 
number.forEach((item,index,arr)=>{
    console.log(item);
})