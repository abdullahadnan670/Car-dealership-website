const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
if (nextButton) {
    nextButton.addEventListener('click', function() {
        window.location.href = 'realbike2.html'; 
    });
}
if (previousButton) {
    previousButton.addEventListener('click', function() {
        window.location.href = 'realbike1.html'; 
    });
}

const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(menuItem => {
        const submenu = menuItem.nextElementSibling; // Get the corresponding submenu

        // Toggle submenu visibility on click
        menuItem.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Hide all submenus when clicking outside
    document.addEventListener('click', function(event) {
        menuItems.forEach(menuItem => {
            const submenu = menuItem.nextElementSibling; // Get the corresponding submenu
            if (!menuItem.contains(event.target) && !submenu.contains(event.target)) {
                submenu.style.display = 'none'; // Hide the submenu
            }
        });
    });