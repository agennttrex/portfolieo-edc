 //carousel
 const carouselContent = document.querySelector('.carousel-content');
 const carouselSlides = document.querySelectorAll('.carousel-slide');
 const carouselTotalSlides = carouselSlides.length;
 let currentSlide = 0;

 function showSlide(slideIndex) {
     if (slideIndex < 0) {
         currentSlide = carouselTotalSlides - 1;
     } else if (slideIndex >= carouselTotalSlides) {
         currentSlide = 0;
     } else {
         currentSlide = slideIndex;
     }
     const slideWidth = carouselSlides[currentSlide].offsetWidth;
     carouselContent.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
 }

 //Auto slide
 setInterval(() => {
     showSlide(currentSlide + 1);
 }, 3000);

 //toggle
 const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-theme');
});

//Animations
gsap.from("#H", {
x: "-100%",
duration: 1.5,
ease: "power2.out"
});

gsap.from("#h", {
x: "100%",
duration: 1.5,
ease: "power2.out"
});