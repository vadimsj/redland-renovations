/* -- Function to display the content on the page as it enters into the viewport -- */
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

/* -- Function to add a shadow to the nav bar when the header is scrolled -- */
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

/* -- Hero image zooming effect -- */
// Define a function to handle the scroll event
function handleScroll() {
    // Get the hero image element
    const heroImage = document.querySelector(".hero-img");

    // Calculate the scale factor based on the scroll position
    const scaleFactor = 1 + window.scrollY * 0.0005; // Adjust multiplier for desired zoom effect

    // Apply the scale transformation to the hero image using CSS transform property
    heroImage.style.transform = `scale(${scaleFactor})`;

    // Determine if the user has scrolled beyond a certain threshold
    const isZoomedIn = window.scrollY > 100; // Adjust scroll position threshold as needed

    // Toggle the zoom-in class based on the scroll position
    heroImage.classList.toggle("zoom-in", isZoomedIn);
}

// Add scroll event listener to the window and call the handleScroll function
window.addEventListener("scroll", handleScroll);

/* -- Function to close the menu when a navbar link is clicked -- */
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

/* -- Function to set either phone number or email to be required in the form -- */
function toggleRequiredFields() {
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("telephone");

    emailInput.required = phoneInput.value.trim() === "";
    phoneInput.required = emailInput.value.trim() === "";
}

/* -- Function to change theme color meta tag when hamburger menu is open -- */
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


/* -- Function to hide elements on scroll -- */
function hideOnScroll(selector, thresholdPercentage) {
    // Select all elements that match the selector
    const elements = document.querySelectorAll(selector);

    // Loop through each element
    elements.forEach(element => {
        // Define the scroll event listener for each element
        window.addEventListener("scroll", () => {
            // Get the top and bottom positions of the viewport
            const viewportTop = window.scrollY + 3 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 3rem from the top to account for navbar
            const viewportBottom = viewportTop + window.innerHeight;

            // Get the top and bottom positions of the element relative to the viewport
            const bounding = element.getBoundingClientRect();
            const elementTop = bounding.top + window.scrollY;
            const elementBottom = elementTop + bounding.height;

            // Calculate the threshold for fading out the element based on the provided percentage
            const threshold = viewportBottom - ((viewportBottom - viewportTop) * thresholdPercentage);

            // Check if the element is below the threshold
            if (elementBottom < threshold) {
                // Add the fade-out class to trigger the opacity transition
                element.classList.add("fade-out");
            } else {
                // Remove the fade-out class to reset the opacity
                element.classList.remove("fade-out");
            }
        });
    });
}

// Call the function with different selectors for each element and threshold percentages
hideOnScroll(".main-headline", 0.75); // Example threshold percentage: 80%
hideOnScroll(".hero-img", 0.72); 
hideOnScroll(".headline-services", 0.60); 
hideOnScroll(".frame__cta-bar", 0.85); 
hideOnScroll(".headline-roofing", 0.8);
hideOnScroll(".headline-rendering", 0.8);
hideOnScroll(".headline-kitchen", 0.8);
hideOnScroll(".headline-gardening", 0.8);
hideOnScroll(".headline-fencing", 0.8);
hideOnScroll(".headline-heating", 0.8);
hideOnScroll(".headline-driveways", 0.8);
hideOnScroll(".frame__usp-bar", 0.85); 
hideOnScroll(".section__about-us .frame", 0.8);
hideOnScroll(".frame__toggle-img", 0.72);
hideOnScroll(".gallery-grid", 0.85);


