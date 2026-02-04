

//scroll to contact
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  }
  //our company image activation
  let slides;
  let currentSlide = 0;
  let slideInterval;
  
  document.addEventListener("DOMContentLoaded", function () {
  
      slides = document.querySelectorAll(".about-slider .slide");
  
      showSlide(currentSlide);
  
      slideInterval = setInterval(nextSlide, 3000);
  
      document.querySelector(".slider-arrow.left").addEventListener("click", () => {
          prevSlide();
          resetInterval();
      });
  
      document.querySelector(".slider-arrow.right").addEventListener("click", () => {
          nextSlide();
          resetInterval();
      });
  });
  
  function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
  }
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }
  
  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }
  
  function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000);
  }

//our service read more toggle

//auto close and smooth toggle
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".read-toggle").forEach(button => {

        button.addEventListener("click", function () {

            const currentCard = this.closest(".future-cards");

            // Close other cards
            document.querySelectorAll(".future-cards").forEach(card => {
                if (card !== currentCard) {
                    card.classList.remove("active");
                    const btn = card.querySelector(".read-toggle");
                    if (btn) btn.textContent = "Read More";
                }
            });

            const isOpen = currentCard.classList.contains("active");
            currentCard.classList.toggle("active");

            this.textContent = isOpen ? "Read More" : "Read Less";

            // ✅ AUTO SCROLL WHEN EXPANDING
            if (!isOpen) {
                setTimeout(() => {
                    currentCard.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 300); // wait for expand animation
            }
        });
    });
});

//PROJECT COUNTER
document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    const animate = (counter) => {
        const target = +counter.dataset.target;
        let current = 0;
        const speed = 120;

        const update = () => {
            const inc = Math.ceil(target / speed);
            if (current < target) {
                current += inc;
                if (current > target) current = target;
                counter.textContent = current;
                requestAnimationFrame(update);
            }
        };

        update();
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });   // 👈 lower threshold (important)

    counters.forEach(counter => observer.observe(counter));

});


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const btn = document.getElementById("sendBtn");
    const successMsg = document.getElementById("successMessage");
    const errorMsg = document.getElementById("errorMessage");

    btn.innerText = "Sending...";
    btn.disabled = true;

    // fake delay (real site la backend response)
    setTimeout(() => {
        successMsg.style.display = "block";
        errorMsg.style.display = "none";
        btn.innerText = "SEND MESSAGE";
        btn.disabled = false;
        this.reset();
    }, 1500);
});






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

