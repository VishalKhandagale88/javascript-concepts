// how to changing the content of an element
let paraElement =  document.querySelector(".content");

// changing the content by usning function
function changeContent(){
    paraElement.innerHTML = "hello this content got changed"
    paraElement.style.color = "red";
    paraElement.style.fontSize = "30px"
}