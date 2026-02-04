
// ===============================
// HAMBURGER MENU TOGGLE
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const icon = hamburger.querySelector("i");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");

        if (nav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Close menu on link click
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            hamburger.classList.remove("active");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });

});

const sections = document.querySelectorAll("section, header[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

document.querySelectorAll(".slider").forEach(slider => {
        
    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelectorAll(".dot");

    if (slides.length < 2) return;

    let index = 0;
    let interval = null;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slides[i].classList.add("active");
        if (dots[i]) dots[i].classList.add("active");
    }

    slider.addEventListener("mouseenter", () => {
        interval = setInterval(() => {
            index = (index + 1) % slides.length;
            showSlide(index);
        }, 1500);
    });

    slider.addEventListener("mouseleave", () => {
        clearInterval(interval);
        index = 0;
        showSlide(index);
    });

});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function () {

        const target = this.getAttribute("href");

        // Mobile view only
        if (window.innerWidth <= 900) {
            document.querySelector(".nav").classList.remove("active");
            document.querySelector(".hamburger").classList.remove("active");

            // Small delay so menu closes smoothly
            setTimeout(() => {
                window.location.href = target;
            }, 300);
        }
    });
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function (e) {

        if (window.innerWidth <= 900) {
            e.preventDefault(); // stop instant jump

            const target = this.getAttribute("href");

            // Close menu smoothly
            document.querySelector(".nav").classList.remove("active");
            document.querySelector(".hamburger").classList.remove("active");

            // Wait for animation, then move
            setTimeout(() => {
                window.location.href = target;
            }, 350); // match CSS transition
        }
    });
});
