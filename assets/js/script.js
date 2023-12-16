var sliderMain =document.querySelector('.slider-main');
let item = sliderMain.getElementsByClassName('item');

function next(){
    sliderMain.append(item[0]);
}

function prev(){
    sliderMain.prepend(item[item.length-1]);
}

setInterval(next,3000)



// ====PRELOADER

var loader = document.getElementById("preloader");
window.addEventListener("load",()=>{
    loader.style.display="none";
});