let currenDate=new Date();
let currentYear=currenDate.getFullYear(); 
document.getElementById("date").textContent=currentYear;

// /Hamburger function/
   document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu a"); // Select all links

    // Toggle menu on hamburger click
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Remove active class to hide menu
        });
    });
});
// hamburger function ends here

document.addEventListener("DOMContentLoaded", function () {
       const homeLink = document.querySelector('nav ul li a[href="#home"]');

       function disableHomeLink() {
        if (window.scrollY < 50) { // If near the top of the page
            homeLink.classList.add("disabled");
            homeLink.style.pointerEvents = "none"; // Disable clicking
            homeLink.style.opacity = "0.5"; // Reduce opacity to show it's inactive
        } else {
            homeLink.classList.remove("disabled");
            homeLink.style.pointerEvents = "auto"; // Enable clicking
            homeLink.style.opacity = "1"; // Restore opacity
        }
    }

       window.addEventListener("scroll", disableHomeLink);
       disableHomeLink(); // Call on page load
   });




//  image changing function  
   const images = [
           "image/Hp1.jpeg",
           "image/IndianOil.jpeg",
           "image/Mahindra.jpeg",
           "image/independence.JPG"
       ];

       function changeImage() {
           const randomIndex = Math.floor(Math.random() * images.length);
           document.getElementById("image-container").style.backgroundImage = `url('${images[randomIndex]}')`;
       }

       // Change image every 3 seconds (3000 milliseconds)
       setInterval(changeImage, 1500);

       // Set initial image on page load
       changeImage();
    // image changing function ends here

       function sendEmail(event) {
        event.preventDefault(); // Prevents actual form submission
    
        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
    
        // Construct mailto link
        const mailtoLink = `mailto:your@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
    
        // Open email client
        window.location.href = mailtoLink;
    
        // Show confirmation message (optional)
        document.getElementById("confirmation-message").style.display = "block";
    }
       document.querySelector(".contact-form form").addEventListener("submit", function(event) 
       {
           event.preventDefault();
           document.getElementById("confirmation-message").style.display = "block";
       });

       document.querySelectorAll("nav ul li a").forEach(anchor => {
   anchor.addEventListener("click", function(event) {
       event.preventDefault();
       const targetId = this.getAttribute("href").substring(1);
       const targetSection = document.getElementById(targetId);

       if (targetSection) {
           targetSection.scrollIntoView({
               behavior: "smooth",
               block: "start"
           });
       }
   });
});
