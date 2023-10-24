document.querySelector(".blog").addEventListener("click", function(event){
    console.log(event);
    console.log("Blog is clicked");
    event.stopPropagation();
},false)

document.querySelector(".images").addEventListener("click",function(event){
    console.log("images clicked");
    console.log(event);
},false)