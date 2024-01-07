// Get a reference to the navbar element
var navbar = document.querySelector('header');

// Listen for the scroll event
window.addEventListener('scroll', function () {
    // Check if the user has scrolled down more than a certain amount (e.g., 50 pixels)
    if (window.scrollY > 50) {
        // If yes, add a class to make the navbar transparent
        navbar.classList.add('scrolled');
    } else {
        // If not, remove the class to make it transparent
        navbar.classList.remove('scrolled');
    }
});


const togglebtn = document.querySelector('.toggle-btn');
const icon = document.querySelector('.toggle-btn i');
const dropdown = document.querySelector('.dropdown');

togglebtn.onclick = function (){
    dropdown.classList.toggle('open');
}