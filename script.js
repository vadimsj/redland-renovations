
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

/* Function to auto format mobile phone numbers to start with +44 */
function formatPhoneNumber() {
    let phoneNumberInput = document.getElementById("telephone");
    let phoneNumberValue = phoneNumberInput.value;

    // Remove any non-digit characters
    let formattedNumber = phoneNumberValue.replace(/[^\d+]/g, '');

    // Check if the phone number starts with "07" and has exactly 11 digits
    if (/^07\d{9}$/.test(formattedNumber)) {
        // Replace "07" with "44"
        formattedNumber = formattedNumber.replace(/^07/, "44");
    }

    // Update the input field value
    phoneNumberInput.value = formattedNumber;
  }

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