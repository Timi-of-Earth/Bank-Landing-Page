const navLinks = document.querySelectorAll(".nav-links li");
function menu() {
    document.getElementById("nav").classList.toggle("active");
    
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 5 + 3}s';
    });
}