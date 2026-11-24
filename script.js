/* =========================================
   MOBILE NAVIGATION
========================================= */
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.innerHTML = isOpen
        ? '<i class="ph ph-x"></i>'
        : '<i class="ph ph-list"></i>';
});

mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '<i class="ph ph-list"></i>';
    });
});

/* =========================================
   VIEW MORE — MY JOURNEY
========================================= */
const journeyMoreButton = document.getElementById("journeyMoreButton");
const organizationExtra = document.getElementById("organizationExtra");
const projectsExtra = document.getElementById("projectsExtra");

journeyMoreButton.addEventListener("click", function () {
    const expanded = organizationExtra.classList.toggle("show");
    projectsExtra.classList.toggle("show", expanded);
    journeyMoreButton.setAttribute("aria-expanded", expanded);

    journeyMoreButton.querySelector("span").textContent =
        expanded ? "View Less" : "View More";

    journeyMoreButton.querySelector("i").className =
        expanded ? "ph ph-arrow-up" : "ph ph-arrow-down";
});

/* =========================================
   PROJECT FILTER
========================================= */
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    function filterProjects(category) {
        // Mengaktifkan tombol yang dipilih
        filterButtons.forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.filter === category
            );
        });
        // Menampilkan card sesuai kategori
        projectCards.forEach(card => {
            card.hidden = card.dataset.category !== category;
        });
    }
    // Event klik tombol filter
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterProjects(this.dataset.filter);
        });
    });
    // DEFAULT: DATA ANALYTICS
    filterProjects("data");

});

/* =========================================
   ZOOM GAMBAR
========================================= */
function openCertificate(imageSrc) {
    const lightbox = document.getElementById("certificateLightbox");
    const preview = document.getElementById("certificatePreview");

    preview.src = imageSrc;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCertificate() {
    const lightbox = document.getElementById("certificateLightbox");

    lightbox.classList.remove("show");
    document.body.style.overflow = "";
}

// Tutup dengan tombol Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeCertificate();
    }
});

/* =========================================
   SCROLL REVEAL
========================================= */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});


/* =========================================
   BACK TO TOP
========================================= */
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
    backTop.classList.toggle(
        'visible',
        window.scrollY > 400
    );
});


/* =========================================
   CONTACT FORM
========================================= */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    document.getElementById('contactForm')
    .addEventListener('submit', function(e) {
        e.preventDefault();
    
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `${message}`;
        const mailto =
            `mailto:salmaasuhaimahh@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailto;
    });
}


/* =========================================
   ACTIVE NAVIGATION
========================================= */
const sections = document.querySelectorAll(
    'header[id], section[id]'
);
const navLinks = document.querySelectorAll(
    '.nav-links a'
);

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
