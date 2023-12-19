function toggleMenu(){
    // Toggle the mobile menu
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Get all the project slides
let slides = document.querySelectorAll('.item'); 
let index = 0;

// Function to show the next slide
function next(){
    if(index + 1 < slides.length){
        // Hide the current slide
        slides[index].classList.add('inactive');
        index = (index + 1);
        // Show the next slide
        slides[index].classList.remove('inactive');
    }
}

// Function to show the previous slide
function prev(){
    if((index - 1) >= 0){
        // Hide the current slide
        slides[index].classList.add('inactive');
        index = (index - 1);
        // Show the previous slide
        slides[index].classList.remove('inactive');
    }
}
