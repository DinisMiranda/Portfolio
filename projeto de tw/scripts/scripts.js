document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    
    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.opacity = '0';
        });
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.opacity = '1';
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
    
    showSlides();
});