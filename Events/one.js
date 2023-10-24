document.querySelector(".blog").addEventListener("click", function(event){
    console.log(event);
    // console.log("Blog is clicked");
    event.stopPropagation();
},false)

document.querySelector(".images").addEventListener("click",function(event){
    console.log("images clicked");
    // console.log(event);
},false)


// about target and parentNode and removing the parent node
// 1. target
// 2. parentNode
// 3. tagName
document.querySelector(".images").addEventListener("click",function(event){
    console.log(event.target.parentNode);
    console.log(event);
    if(event.target.tagName==='IMG'){
        let removeImage = event.target.parentNode;
        removeImage.remove();
    }

})