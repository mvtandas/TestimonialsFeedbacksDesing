var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex2 = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("text-1");
  var dots = document.getElementsByClassName("testimonial");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dark", "");
}
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dark";

}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("text-2");
  var dots = document.getElementsByClassName("feedback");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dark", "");
}
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dark";

}

function rudrSwitchTab(rudr_tab_id, rudr_tab_content) {

	var x = document.getElementsByClassName("tabcontent");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; 
	}
	document.getElementById(rudr_tab_content).style.display = 'block'; 
 

	var x = document.getElementsByClassName("selector");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].className = 'selector clear'; 
	}
	document.getElementById(rudr_tab_id).className = 'selector clicked';
}