// Menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const closeMenu = document.querySelector(".close-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  // Toggle mobile menu
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
  });

  // Close mobile menu
  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  });

  // Close menu when clicking on a link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = ""; // Re-enable scrolling
    });
  });

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate header height for offset
        const headerHeight = document.getElementById("header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Add scroll event to change header background
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(5, 3, 32, 0.2)";
      header.style.padding = "0px";
      header.style.borderBottom = "0px";
    } else {
      // header.style.backgroundColor = "rgba(30, 139, 255, 1)";
      header.style.backgroundColor = "var(--primary-dark)";
      header.style.boxShadow = "none";
      header.style.padding = "calc(var(--spacing-unit) * 2) 0";
      header.style.borderBottom = "1px solid var(--primary-light)";
    }
  });

  // Add animations to elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".experience-item, .education-item, .certificate-item, .language-item, .skill-tag, .project-item, .contact-item"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  const elementsToAnimate = document.querySelectorAll(
    ".experience-item, .education-item, .certificate-item, .language-item, .skill-tag, .project-item, .contact-item"
  );

  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Run animation check on load and scroll
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);
});
