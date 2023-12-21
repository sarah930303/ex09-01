// slideshow.js

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlideshows');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) { 
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}

function startAutoSlides() {
  showSlides(slideIndex); // 載入時顯示第一張輪播圖片
  setInterval(function() {
    plusSlides(1);
  }, 3000); // 每3秒自動更新
}

startAutoSlides(); // 在載入時就開始自動輪播
