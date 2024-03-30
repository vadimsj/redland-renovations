/* Function to add a shadow to the nav bar when the header is scrolled */
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

/* Function to display the content on the page as it enters into the viewport */
/* (Code implemented following the Beyond Fireship tutorial) */
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(function(el) {
        observer.observe(el);
    });
/* -- */

/* Function to set either phone number or email to be required in the form */
function toggleRequiredFields() {
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("telephone");

    emailInput.required = phoneInput.value.trim() === "";
    phoneInput.required = emailInput.value.trim() === "";
}

/* Function to auto format mobile phone numbers to start with +44 */
function formatPhoneNumber() {
    const phoneNumberInput = document.getElementById("telephone");
    const phoneNumberValue = phoneNumberInput.value;

    // Remove any non-digit characters
    let formattedNumber = phoneNumberValue.replace(/[^\d+]/g, "");

    // Check if the phone number starts with "07" and has exactly 11 digits
    if (/^07\d{9}$/.test(formattedNumber)) {
        // Replace "07" with "+44"
        formattedNumber = formattedNumber.replace(/^07/, "+44");
    }

    // Check if the phone number starts with "44" and has exactly 12 digits
    if (/^44\d{10}$/.test(formattedNumber)) {
        // Replace "44" with "+44"
        formattedNumber = formattedNumber.replace(/^44/, "+44");
    }

    // Update the input field value
    phoneNumberInput.value = formattedNumber;
}

/* Function to change theme color meta tag when hamburger menu is open */
function changeThemeColor() {
    // Select the hamburger menu checkbox
    const checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
    
    // Select the theme color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    
    // Check if both checkbox and themeColorMeta exist
    if (checkbox && themeColorMeta) {
        // Add event listener to checkbox
        checkbox.addEventListener("change", function() {
            // Change content attribute of theme color meta tag based on checkbox state
            themeColorMeta.setAttribute("content", this.checked ? "#eee" : "#fff");
        });
    } else {
        console.log("Required elements not found.");
    }
}

// Call the function to initiate the event listener
changeThemeColor();


