// *************************
// NAVIGATION
// *************************

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// *************************
// SET CURRENT YEAR IN FOOTER
// *************************

const currentYear = new Date().getFullYear();
const element = document.querySelector(".current-year");

element.textContent = currentYear;

// *************************
// Smooth scrolling
// *************************

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    // Scroll to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Scroll to section
    if (href.startsWith("#"))
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });

    // Close navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// *************************
// Sticky navigation
// *************************

const heroSection = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entry) => {
    if (!entry[0].isIntersecting) {
      document.body.classList.add("sticky");
      return;
    }
    document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSection);
