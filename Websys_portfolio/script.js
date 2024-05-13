document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        event.preventDefault();
  
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  
    // Toggle visibility of the navbar on small screens
    var navbarToggle = document.getElementById('navbarToggle');
    if (navbarToggle) {
      navbarToggle.addEventListener('click', function() {
        var navbar = document.getElementById('myNavbar');
        if (navbar) {
          navbar.classList.toggle('w3-show');
        }
      });
    }
  });
  