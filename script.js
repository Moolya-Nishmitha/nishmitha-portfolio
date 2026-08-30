/* =========================
   TERMINAL STATUS
========================= */

const terminal =
    document.querySelector(".terminal-body");

const messages = [
    "scanning systems...",
    "analyzing network...",
    "checking vulnerabilities...",
    "collecting evidence...",
    "status: building..."
];

let messageIndex = 0;


function updateTerminal() {

    const statusLine =
        terminal.querySelector(".success");

    statusLine.textContent =
        messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

}


setInterval(updateTerminal, 2500);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
