
var slideIndex1 = 1;
showSlides1(slideIndex);

var slideIndex2 = 1;
showSlides1(slideIndex);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

/ Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var myCarousel = document.getElementById("myModal");
  var slides = myCarousel.querySelectorAll("mySlides");
  var dots = myCarousel.querySelectorAll("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  captionText.innerHTML = dots[slideIndex1-1].alt;
}

function showSlides2(n) {
  var i;
  var myCarousel = document.getElementById("myModal2");
  var slides = myCarousel.querySelectorAll("mySlides");
  var dots = myCarousel.querySelectorAll("demo");
  var captionText = document.getElementById("caption2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
  captionText.innerHTML = dots[slideIndex2-1].alt;
}
