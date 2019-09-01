var slideIndex = 1;

showSlidesByClick(slideIndex);

function showSlidesByClick(n) {
    var i;
    var slides = document.getElementsByClassName("slideImg");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none" ;
    }
    for (i=0; i< dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
    showSlidesByClick(slideIndex += n);
}

function currentSlide(n) {
    showSlidesByClick(slideIndex = n);
}

showSlides();
function showSlides() {
    slideIndex++;
    showSlidesByClick(slideIndex);
    setTimeout(showSlides, 6000);
}
