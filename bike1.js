// Get elements
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slide = document.querySelector(".carousel-slide");
let index = 0;

// Image array
const images = document.querySelectorAll(".carousel-slide img");
const totalImages = images.length;

// Function to move to the next image
function nextSlide() {
    if (index === totalImages - 1) {
        index = 0; // Reset to first image when reaching the end
    } else {
        index++;
    }
    updateSlidePosition();
}

// Function to move to the previous image
function prevSlide() {
    if (index === 0) {
        index = totalImages - 1; // Go to the last image when at the start
    } else {
        index--;
    }
    updateSlidePosition();
}

// Update the position of the slide
function updateSlidePosition() {
    const offset = -index * 100;
    slide.style.transform = `translateX(${offset}%)`;
}

// Event listeners for buttons
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const forumButton = document.querySelector(".forum-link");
    if (forumButton) {
        forumButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "forum.html"; // Replace with correct path if needed
        });
    }
});

