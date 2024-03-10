
/* Function to add a shadow to the nav bar when the header is scrolled */
document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

/* Function to display the content on the page as it enters into the viewport */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* Function to set either phone number or email to be required in the form */
function toggleRequiredFields() {
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("telephone");

  if (phoneInput.value.trim() !== "") {
    emailInput.removeAttribute("required");
    phoneInput.setAttribute("required", "required");
  } else if (emailInput.value.trim() !== "") {
    phoneInput.removeAttribute("required");
    emailInput.setAttribute("required", "required");
  } else {
    emailInput.setAttribute("required", "required");
    phoneInput.setAttribute("required", "required");
  }
}