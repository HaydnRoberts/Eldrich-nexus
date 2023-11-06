let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // calculates the ammount of slides and only shows one slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // increase the slide counter to move the visible slide to the next one
    slideIndex++;
    // if it surpasses the slide ammount then it restarts its counter
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
