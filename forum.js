document.addEventListener("DOMContentLoaded", function() {
    const faqButtons = document.querySelectorAll(".faq-toggle");
    const faqContents = document.querySelectorAll(".faq-content");

    // Loop through all FAQ toggle buttons and add click event listeners
    faqButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Toggle the clicked content
            toggleContent(index);
        });
    });

    // Function to toggle visibility of FAQ content
    function toggleContent(index) {
        // Get the corresponding content
        const content = faqContents[index];

        // Toggle 'active' class on clicked FAQ content
        content.classList.toggle("active");

        // Close other contents
        faqContents.forEach((otherContent, idx) => {
            if (idx !== index) {
                otherContent.classList.remove("active");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the 'Forum' link inside the navigation using its class
    const forumButton = document.querySelector(".home-link");
    
    // Check if the element exists (if it does, add event listener)
    if (forumButton) {
        forumButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior (no page reload)
            
            // Redirect to the forum page
            window.location.href = "code.html"; // Make sure the path is correct (relative path)
        });
    }
});
