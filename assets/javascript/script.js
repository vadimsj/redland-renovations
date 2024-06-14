/* -- Function to display the content on the page as it enters into the viewport -- */

/* (Code implemented following the Beyond Fireship tutorial) */
    // Create a new IntersectionObserver instance with a callback function
    const observer = new IntersectionObserver(function(entries) {
        // For each entry observed by the IntersectionObserver
        entries.forEach(function(entry) {
            // Log the entry to the console for debugging purposes
            console.log(entry);
            // If the observed element is intersecting with the viewport
            if (entry.isIntersecting) {
                // Add the "show" class to the observed element
                entry.target.classList.add("show");
            } else {
                // If the observed element is not intersecting with the viewport
                // Remove the "show" class from the observed element
                entry.target.classList.remove("show");
            }
        });
    });

    // Select all elements with the class "hidden"
    const hiddenElements = document.querySelectorAll(".hidden");

    // For each hidden element, observe it with the IntersectionObserver
    hiddenElements.forEach(function(el) {
        observer.observe(el);
    });

/* -- */


/* -- Function to add a shadow to the nav bar when the header is scrolled -- */

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the header element
    const header = document.querySelector(".header");

    // Variable to track whether the header is scrolled or not
    let isHeaderScrolled = false;

    // Add a scroll event listener to the window
    window.addEventListener("scroll", () => {
        // Check if the current scroll position is greater than 0
        const scrolled = window.scrollY > 0;

        // If the current scroll position is different from the previous state,
        // toggle the "scrolled" class on the header element accordingly
        if (scrolled !== isHeaderScrolled) {
            isHeaderScrolled = scrolled;
            header.classList.toggle("scrolled", scrolled);
        }
    });
});


/* -- Hero image zoom-on-scroll effect -- */

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

// Add throttling to the scroll event listener to improve performance
let isScrolling = false;

window.addEventListener("scroll", function() {
    if (!isScrolling) {
        // Set isScrolling to true to prevent multiple event triggers
        isScrolling = true;

        // Request animation frame to improve performance
        requestAnimationFrame(function() {
            // Call the handleScroll function
            handleScroll();

            // Reset isScrolling after the scroll event has been processed
            isScrolling = false;
        });
    }
});


/* -- Function to close the menu when a navbar link is clicked -- */

function closeMenuOnClick() {
    // Get the hamburger menu checkbox element
    const checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
    
    // Get all navbar links
    const navbarLinks = document.querySelectorAll(".navbar-link a");

    // Add click event listener to each navbar link
    navbarLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Close the menu by unchecking the checkbox
            checkbox.checked = false;
        });
    });
}

// Call the function to close the menu when a navbar link is clicked
closeMenuOnClick();


// Call the function to add event listeners to navbar links
closeMenuOnClick();


/* -- Function to set either phone number or email to be required in the form -- */

function toggleRequiredFields() {
    // Get the email and phone input elements
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("telephone");

    // Determine if either email or phone is empty
    const isEmailEmpty = emailInput.value.trim() === "";
    const isPhoneEmpty = phoneInput.value.trim() === "";

    // Toggle the required attribute based on the other field's value
    emailInput.required = isPhoneEmpty;
    phoneInput.required = isEmailEmpty;
}

/* -- Function to change theme color meta tag when hamburger menu is open -- */

function changeThemeColor() {
    // Select the hamburger menu checkbox
    const checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
    
    // Select the theme color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    
    // Check if both checkbox and themeColorMeta exist
    if (checkbox && themeColorMeta) {
        // Function to update theme color meta tag
        function updateThemeColor() {
            // Change content attribute of theme color meta tag based on checkbox state
            themeColorMeta.setAttribute("content", checkbox.checked ? "#fff" : "#e2e0d4");
        }

        // Add event listener to checkbox
        checkbox.addEventListener("change", updateThemeColor);

        // Add event listener to each navbar link
        const navbarLinks = document.querySelectorAll(".navbar-link a");
        navbarLinks.forEach(link => {
            link.addEventListener("click", function() {
                // Change content attribute of theme color meta tag to default color when a link is clicked
                themeColorMeta.setAttribute("content", "#fff");
            });
        });

        // Update theme color initially
        updateThemeColor();
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
hideOnScroll(".main-headline", 0.75); // Example threshold percentage: 75%
hideOnScroll(".headline-services", 0.6); 
hideOnScroll(".frame__cta-bar", 0.85); 
hideOnScroll(".headline-roofing", 0.85);
hideOnScroll(".headline-rendering", 0.85);
hideOnScroll(".rendering", 0.85);
hideOnScroll(".headline-kitchen", 0.85);
hideOnScroll(".headline-gardening", 0.85);
hideOnScroll(".gardening", 0.85);
hideOnScroll(".headline-fencing", 0.85);
hideOnScroll(".headline-heating", 0.85);
hideOnScroll(".heating", 0.85);
hideOnScroll(".headline-driveways", 0.85);
hideOnScroll(".frame__usp-bar", 0.85); 
hideOnScroll(".section__about-us .frame", 0.8);
hideOnScroll(".frame__toggle-img", 0.77);
hideOnScroll(".gallery-grid", 0.84);


/* -- Function to animate logo when nav links and primary cta button clicked" -- */

document.addEventListener("DOMContentLoaded", function() {
    // Function to trigger logo animation
    function triggerLogoAnimation() {
        // Trigger animation by adding a CSS class to all logo elements
        document.getElementById("light-letter-1").classList.add("animate-logo-light-1");
        document.getElementById("dark-letter-1").classList.add("animate-logo-dark-1");
        document.getElementById("light-letter-2").classList.add("animate-logo-light-2");
        document.getElementById("dark-letter-2").classList.add("animate-logo-dark-2");

        // Remove the animation classes after the animation completes
        setTimeout(function() {
            document.getElementById("light-letter-1").classList.remove("animate-logo-light-1");
            document.getElementById("dark-letter-1").classList.remove("animate-logo-dark-1");
            document.getElementById("light-letter-2").classList.remove("animate-logo-light-2");
            document.getElementById("dark-letter-2").classList.remove("animate-logo-dark-2");
        }, 1500); // Adjust the timing to match the duration animation (1.5s)
    }

    // Add event listener to <a> elements in the header
    var headerLinks = document.querySelectorAll("header a");
    headerLinks.forEach(function(link) {
        link.addEventListener("click", triggerLogoAnimation);
    });

    // Add event listener to elements with class .btn--primary-cta
    var primaryCtaButtons = document.querySelectorAll(".btn--primary-cta");
    primaryCtaButtons.forEach(function(button) {
        button.addEventListener("click", triggerLogoAnimation);
    });
});

  
  
