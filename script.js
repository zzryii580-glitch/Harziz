// WhatsApp Function
function openWhatsApp() {
    const phone = "6283189483134";
    const message = "Halo C-TECH, saya ingin konsultasi desain.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar active state
window.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname;
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '.' + currentLocation || 
            (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .feature-item').forEach(el => {
    observer.observe(el);
});
