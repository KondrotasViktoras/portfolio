// Toggle icon navbar
let menuIcon = document.querySelector("#burger");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
  navbar.classList.toggle("active");
};

// Scroll section
window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Active navbar links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href='#" + id + "']")
        .classList.add("active");

      // Active sections for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // Sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", top > 100);

  // Remove toggle icon and navbar when click navbar links (scroll)
  if (menuIcon.classList.contains("fa-xmark")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    navbar.classList.remove("active");
  }
};

// document.body.addEventListener("mousemove", function (event) {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;

//   // Calculate brightness based on mouse position
//   const brightness = (mouseX / window.innerWidth) * 100;

//   // Apply the new background color to the body
//   document.body.style.background = `hsl(240, 100%, ${brightness}%)`; // Adjust the hue and saturation as per your preference
// });
