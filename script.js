$(document).ready(function() {
    
    $('.mobile-menu-icon').click(function() {
        $('.nav-links').toggle();
    });

    
    $('.dropdown > a').click(function(e) {
        if ($(window).width() < 768) {
            e.preventDefault();
            $(this).siblings('.dropdown-menu').toggle();
        }
    });
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

$('.next').click(function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

$('.prev').click(function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});


setInterval(function() {
    $('.next').click();
}, 5000);


$('a[href^="#"]').on('click', function(event) {
    const target = this.hash;
    if (target) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    }
});

document.getElementById("chatbot-icon").addEventListener("click", function() {
    var chatbot = document.getElementById("chatbot");
    chatbot.style.display = "block";
  });
  
  document.getElementById("chatbot-close").addEventListener("click", function() {
    var chatbot = document.getElementById("chatbot");
    chatbot.style.display = "none";
  });
  
  
  window.addEventListener("click", function(event) {
    var chatbot = document.getElementById("chatbot");
    var chatbotIcon = document.getElementById("chatbot-icon");
  
    if (!chatbot.contains(event.target) && !chatbotIcon.contains(event.target)) {
      chatbot.style.display = "none";
    }
  });
  