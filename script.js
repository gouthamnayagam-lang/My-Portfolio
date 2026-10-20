// Mobile Menu Toggle Functionality
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Zoom Parallax Animation Effect
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let heroContent = document.querySelector('.hero-content');
    
    // Scroll panrapo content slow-a fade aagi zoom aagum
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrollY / 500);
    }
});

// WhatsApp Direct Integration
function sendToWhatsApp() {
    let name = document.getElementById('wa-name').value;
    let email = document.getElementById('wa-email').value;
    let message = document.getElementById('wa-message').value;

    if (!name || !email || !message) {
        alert('Ella fields-ayum fill pannunga bro!');
        return;
    }

    // Ungaloda WhatsApp Number inga podunga (Country code-oda, e.g., 919876543210)
    let phoneNumber = "918778173705"; 

    let whatsappURL = `https://wa.me/${918778173705}?text=Hi,%20I%20am%20${encodeURIComponent(name)}.%20My%20Email:%20${encodeURIComponent(email)}.%20Message:%20${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}

// Scroll Reveal Animation (Sections fade-in on scroll)
window.addEventListener('scroll', revealSections);

function revealSections() {
    let reveals = document.querySelectorAll('.skills-section, .contact-section, .skill-card');
    
    reveals.forEach(sec => {
        let windowHeight = window.innerHeight;
        let elementTop = sec.getBoundingClientRect().top;
        let elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            sec.classList.add('active');
        }
    });
}

// Trigger once on load
revealSections();

// Scroll Parallax & Zoom Effect on Hero Section
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let hero = document.querySelector('.hero');
    let heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        // Scroll panrapo content slow-a mela poiyi fade aagum
        heroContent.style.transform = `translateY(${scrollY * 0.4}px) scale(${1 - scrollY / 1000})`;
        heroContent.style.opacity = 1 - (scrollY / 500);
        
        // Background image-um scroll panrapo subtle-a zoom aagum
        hero.style.backgroundSize = `${100 + scrollY * 0.05}%`;
    }
});

// Typing Text Effect Logic
const typingElement = document.getElementById('typing-text');
const words = ["Full-Stack Developer", "MERN Stack Builder", "UI/UX Enthusiast", "Web Innovator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Word complete aanathum oru 2 seconds pause aagum
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Run typing effect on load
if (typingElement) {
    setTimeout(typeEffect, 1000);
}

// Custom Neon Cursor Movement Logic
const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    
    if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    }
});

// 3D Card Tilt Effect Logic
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Card mela mouse X position
        const y = e.clientY - rect.top;  // Card mela mouse Y position

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Tilt angle calculate panrathu (Max 15 degrees)
        const rotateX = -((y - centerY) / centerY) * 15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    // Mouse veliya pona card normal positionku vanthidum
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;
    });
});

// Top Neon Scroll Progress Bar Logic
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    
    if (scrollProgress) {
        scrollProgress.style.width = `${scrollPercentage}%`;
    }
});

// Interactive Floating Particles (Tech Network)
(function() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const mouse = { x: null, y: null, radius: 130 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    class Particle {
        constructor(x, y, dx, dy, size) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
            if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 14000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = Math.random() * (innerWidth - size * 2) + size;
            let y = Math.random() * (innerHeight - size * 2) + size;
            let dx = (Math.random() - 0.5) * 1.2;
            let dy = (Math.random() - 0.5) * 1.2;
            particlesArray.push(new Particle(x, y, dx, dy, size));
        }
    }

    function connectParticles() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + 
                               ((particlesArray[a].y - particlesArray[b].y) ** 2);
                
                // Dots pakkathula vandha line connect aagum
                if (distance < (canvas.width / 8) * (canvas.height / 8)) {
                    let opacity = 1 - (distance / 15000);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.25})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }

            // Mouse pakkathula dots vandha bright line connect aagum
            if (mouse.x != null) {
                let mouseDistance = ((particlesArray[a].x - mouse.x) ** 2) + 
                                    ((particlesArray[a].y - mouse.y) ** 2);
                if (mouseDistance < mouse.radius * mouse.radius) {
                    ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connectParticles();
    }

    initParticles();
    animateParticles();
})();

// Back to Top Button Show/Hide & Smooth Scroll Logic
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Cool Preloader Fade-Out Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 1200); // 1.2 seconds la preloader mela poidum
    }
});