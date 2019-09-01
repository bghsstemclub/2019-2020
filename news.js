var slideMeasure = 0;

function showSlides() {
    var index;
    var slides = document.getElementsByClassName("slide");
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }
    slideMeasure++;
    if (slideMeasure > slides.length) { slideMeasure = 1 }
    slides[slideMeasure - 1].style.display = "block";
    setTimeout("showSlides()", 4000); // Change image every 2 seconds
}

window.onload = showSlides;