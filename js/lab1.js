var image = document.getElementById("my-image");
var button = document.getElementById("my-button");
var header = document.getElementById("header-text");
var body = document.getElementById("my-body");

button.addEventListener("click", changeImage);
body.addEventListener("wheel", changeBackground);

function changeImage(){
    image.src = "img/nocake.jpg";
    image.alt = "goodbye cake";
    header.innerHTML = "You ate the cake!";
    button.remove();
}

function changeBackground(){
    body.style.backgroundColor = "rgb(255,0,0)";
}   

