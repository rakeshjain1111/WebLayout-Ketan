
let slideIndex =1;
displySlides(slideIndex);

function nextSlide(n){
    displySlides(slideIndex += n);
}



function displySlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    console.log(slides);
    if(n>slides.length){slideIndex = 1;}
    if(n<1){
        slideIndex = slides.length}
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

let clk =document.getElementsByClassName("next11").click();
setTimeout(clk,1000);