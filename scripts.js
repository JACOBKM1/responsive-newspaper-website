// Select hamburger and nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the visibility of the nav menu on small screens
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle'); // Add animation for the hamburger menu
});

// Close the menu and navigate to the section when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Hide the menu
        hamburger.classList.remove('toggle'); // Reset hamburger animation
    });
});
