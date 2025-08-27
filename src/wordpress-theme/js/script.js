// DataRain Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
}
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = 80; // Adjust based on fixed header height
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navContainer.classList.add('scrolled');
            } else {
                navContainer.classList.remove('scrolled');
            }
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe cards for animation
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
    
    // Contact form handling (if needed)
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form submission logic here
            // This could integrate with WordPress AJAX or external APIs
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
            successMessage.style.cssText = `
                background: #10b981;
                color: white;
                padding: 1rem;
                border-radius: 0.5rem;
                margin-top: 1rem;
                text-align: center;
            `;
            
            form.appendChild(successMessage);
            
            // Reset form
            form.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                if (successMessage.parentNode) {
                    successMessage.parentNode.removeChild(successMessage);
                }
            }, 5000);
        });
    });
    
    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Add loading states to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.type === 'submit' || this.classList.contains('submit-btn')) {
                this.classList.add('loading');
                this.disabled = true;
                
                // Remove loading state after 3 seconds (adjust as needed)
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.disabled = false;
                }, 3000);
            }
        });
    });
});

// Add CSS for animations and loading states
const style = document.createElement('style');
style.textContent = `
    .section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .section.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s ease;
    }
    
    .card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-container {
        transition: all 0.3s ease;
    }
    
    .nav-container.scrolled .nav-glass {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
    }
    
    .nav-container.scrolled .nav-link {
        color: hsl(var(--primary));
    }
    
    .nav-container.scrolled .nav-link:hover {
        color: hsl(var(--primary));
    }
    
    .btn.loading {
        position: relative;
        color: transparent;
    }
    
    .btn.loading::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
    }
    
    @keyframes button-loading-spinner {
        from {
            transform: rotate(0turn);
        }
        to {
            transform: rotate(1turn);
        }
    }
    
    img.lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block !important;
        }
        .nav-links.open {
            display: flex !important;
            flex-direction: column;
            gap: 1rem;
        }
    }
`;

document.head.appendChild(style);