
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 70
  });
}

if (typeof Typed !== "undefined") {
  new Typed("#typed", {
    strings: [
      "Software Developer",
      "Python Developer",
      "Full Stack Developer",
      "Web Developer"
    ],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1400,
    loop: true,
    smartBackspace: true
  });
}


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}


const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  let currentSection = "home";

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= 150) {
      currentSection = section.id;
    }
  });

  links.forEach(link => {
    const isActive = link.getAttribute("href") === `#${currentSection}`;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("load", updateActiveLink);


const contactForm = document.getElementById("contactForm");

const recipientEmail = "jirageniranjan21@gmail.com";

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Hello Niranjan,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );

    window.location.href =
      `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  });
}





























// // Typing Animation
// let typed = new Typed("#typed", {
//     strings: ["Web Developer", "Designer", "Freelancer"],
//     typeSpeed: 100,
//     backSpeed: 50,
//     loop: true
// });

// // Highlight navbar link on scroll
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".navbar ul li a");

// window.addEventListener("scroll", () => {
//     let current = "";
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100;
//         if (pageYOffset >= sectionTop) {
//             current = section.getAttribute("id");
//         }
//     });
//     navLinks.forEach(link => {
//         link.classList.remove("active");
//         if (link.getAttribute("href") === "#" + current) {
//             link.classList.add("active");
//         }
//     });
// });
