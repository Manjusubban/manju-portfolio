console.log('Portfolio loaded');
/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 500);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("open");
    navMenu.classList.toggle("open");

});


/* Close menu when clicking navigation */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("open");
        navMenu.classList.remove("open");

    });

});


/* =========================================
   HEADER SCROLL
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================
   SCROLL PROGRESS
========================================= */

const scrollProgress =
    document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        `${percentage}%`;

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingText =
    document.getElementById("typingText");

const roles = [
    "Full Stack Developer",
    "Laravel Developer",
    "PHP Developer",
    "React.js Developer",
    "Backend Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    !countersStarted
                ) {

                    countersStarted = true;

                    counters.forEach(counter => {

                        const target =
                            Number(
                                counter.dataset.target
                            );

                        let current = 0;

                        const increment =
                            Math.max(
                                1,
                                Math.ceil(target / 40)
                            );

                        const updateCounter = () => {

                            current += increment;

                            if (current >= target) {

                                counter.textContent =
                                    target;

                                return;
                            }

                            counter.textContent =
                                current;

                            requestAnimationFrame(
                                updateCounter
                            );
                        };

                        updateCounter();

                    });

                }

            });

        },
        {
            threshold: 0.5
        }
    );

const aboutSection =
    document.getElementById("about");

counterObserver.observe(
    aboutSection
);


/* =========================================
   SKILL BAR ANIMATION
========================================= */

const skillBars =
    document.querySelectorAll(
        ".skill-bar span"
    );

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        width;

                    skillObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.5
        }
    );

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            projectCards.forEach(card => {

                const category =
                    card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove(
                        "hide"
                    );

                    card.style.animation =
                        "projectIn .5s ease";

                } else {

                    card.classList.add(
                        "hide"
                    );

                }

            });

        }
    );

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );

const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.id;

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute(
                                "href"
                            ) === `#${id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },
        {
            rootMargin:
                "-30% 0px -60% 0px"
        }
    );

sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.getElementById("backTop");

backTop.addEventListener("click", event => {

    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


/* =========================================
   PROJECT CARD MOUSE EFFECT
========================================= */

document.querySelectorAll(
    ".project-card"
).forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) /
                    centerY) * -2;

            const rotateY =
                ((x - centerX) /
                    centerX) * 2;

            card.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-5px)
                `;
        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================
   HERO PARALLAX
========================================= */

const hero =
    document.querySelector(".hero");

window.addEventListener("mousemove", event => {

    if (window.innerWidth < 850) {
        return;
    }

    const x =
        (event.clientX /
            window.innerWidth - .5) * 10;

    const y =
        (event.clientY /
            window.innerHeight - .5) * 10;

    const visual =
        document.querySelector(".hero-visual");

    if (visual) {

        visual.style.transform =
            `translate(${x}px, ${y}px)`;

    }

});


/* =========================================
   PROJECT ENTRY ANIMATION
========================================= */

const projectAnimationStyle =
document.createElement("style");

projectAnimationStyle.textContent = `
    @keyframes projectIn {

        from {
            opacity: 0;
            transform: translateY(20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }

    }
`;

document.head.appendChild(
    projectAnimationStyle
);
