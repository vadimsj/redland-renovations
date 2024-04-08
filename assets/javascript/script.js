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

// Function to close the menu when a navbar link is clicked
function closeMenuOnClick() {
    // Get all navbar links
    const navbarLinks = document.querySelectorAll(".navbar-link a");

    // Loop through each navbar link
    navbarLinks.forEach(link => {
        // Add click event listener to the link
        link.addEventListener("click", () => {
            // Close the menu by unchecking the checkbox
            const checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
            checkbox.checked = false;
        });
    });
}

// Call the function to add event listeners to navbar links
closeMenuOnClick();

/* Function to set either phone number or email to be required in the form */
function toggleRequiredFields() {
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("telephone");

    emailInput.required = phoneInput.value.trim() === "";
    phoneInput.required = emailInput.value.trim() === "";
}

/* Function to change theme color meta tag when hamburger menu is open */
function changeThemeColor() {
    // Select the hamburger menu checkbox
    const checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
    
    // Select the theme color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    
    // Select all navbar links
    const navbarLinks = document.querySelectorAll(".navbar-link a");

    // Check if both checkbox and themeColorMeta exist
    if (checkbox && themeColorMeta) {
        // Add event listener to checkbox
        checkbox.addEventListener("change", function() {
            // Change content attribute of theme color meta tag based on checkbox state
            themeColorMeta.setAttribute("content", this.checked ? "#eee" : "#fff");
        });

        // Add event listener to each navbar link
        navbarLinks.forEach(link => {
            link.addEventListener("click", function() {
                // Change content attribute of theme color meta tag to default color when a link is clicked
                themeColorMeta.setAttribute("content", "#fff");
            });
        });
    } else {
        console.log("Required elements not found.");
    }
}

// Call the function to initiate the event listener
changeThemeColor();
