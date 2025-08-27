// DataRain WordPress Theme JavaScript
(function() {
    'use strict';

    // DOM Ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                navLinks.classList.toggle('open');
                mobileMenuBtn.classList.toggle('active');
            });
        }

        // Smooth scroll for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;
                
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.main-nav')?.offsetHeight || 80;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navbar scroll effect
        const navbar = document.getElementById('main-nav');
        if (navbar) {
            let lastScrollY = window.scrollY;
            
            function updateNavbar() {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Hide navbar when scrolling down, show when scrolling up
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                
                lastScrollY = currentScrollY;
            }
            
            let ticking = false;
            function requestTick() {
                if (!ticking) {
                    requestAnimationFrame(updateNavbar);
                    ticking = true;
                    setTimeout(() => { ticking = false; }, 16);
                }
            }
            
            window.addEventListener('scroll', requestTick, { passive: true });
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.service-card, .case-card, .about-card, .certifications-content');
        animateElements.forEach(function(el) {
            observer.observe(el);
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks && navLinks.classList.contains('open')) {
                if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    navLinks.classList.remove('open');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });

        // Close mobile menu when window is resized to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    // Loading performance
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

})();