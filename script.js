
/* Effect to add a shadow to the nav bar when scrolled */

document.addEventListener('DOMContentLoaded', function() {
    var headerNav = document.querySelector('.header__nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            headerNav.classList.add('scrolled');
        } else {
            headerNav.classList.remove('scrolled');
        }
    });
});