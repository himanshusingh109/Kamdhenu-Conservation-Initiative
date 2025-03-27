document.addEventListener('DOMContentLoaded', () => {
    // Loading Overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 1500);
    });

    // Particle Background
    function createParticleBackground() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-background';
        document.body.insertBefore(canvas, document.body.firstChild);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 150;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = `rgba(91, 33, 182, ${Math.random() * 0.3})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        init();
        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    createParticleBackground();

    // Floating Action Button
    function createFloatingButton() {
        const button = document.createElement('div');
        button.classList.add('floating-button');
        button.innerHTML = '↑';
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        document.body.appendChild(button);
    }
    createFloatingButton();

    // Form Validation and Feedback
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission success
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Reset the form fields
    });
    // [Previous code for smooth scrolling, breed list, charts, etc.]

    // Enhanced Scroll Reveal
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealElements);
    revealElements();

    // Interactive Cursor
    function createCursorEffect() {
        const cursor = document.createElement('div');
        cursor.style.position = 'fixed';
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.borderRadius = '50%';
        cursor.style.backgroundColor = 'rgba(91, 33, 182, 0.5)';
        cursor.style.pointerEvents = 'none';
        cursor.style.zIndex = '9999';
        cursor.style.transition = 'transform 0.1s ease';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }
    createCursorEffect();
});

// Add loading overlay to HTML
document.body.insertAdjacentHTML('afterbegin', `
    <div id="loading-overlay">
        <div class="loader"></div>
    </div>
`);
