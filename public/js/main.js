<<<<<<< HEAD
// Enhanced UI interactions and animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for fade-in animations with stagger effect
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Stagger animation
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for navigation links with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Enhanced parallax effect for hero section
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    function handleScroll() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-visual');
        const heroContent = document.querySelector('.hero-content');
        const navbar = document.querySelector('.navbar');
        
        // Parallax background
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            
            // Fade out hero content as user scrolls
            const opacity = Math.max(0, 1 - scrolled / (window.innerHeight * 0.7));
            const scale = Math.max(0.9, 1 - scrolled / (window.innerHeight * 2));
            
            if (heroContent) {
                heroContent.style.opacity = opacity;
                heroContent.style.transform = `translateY(${scrolled * 0.2}px) scale(${scale})`;
            }
        }

        // Navbar scroll effect
        if (navbar) {
            if (scrolled > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // Add hover ripple effect to buttons
    document.querySelectorAll('.btn, .hero-cta').forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Enhanced treatment pills interactions
    document.querySelectorAll('.treatment-pill').forEach(pill => {
        pill.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });
    });

    // Doctor card tilt effect (subtle 3D effect)
    document.querySelectorAll('.doctor-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-16px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Counter animation for stats (if any)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Lazy load images with fade in
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease';
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Add loading animation to page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Scroll progress indicator (optional)
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #1a5f3a, #4caf50, #ffd700);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // Add custom cursor effect for interactive elements
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.cssText = `
        width: 40px;
        height: 40px;
        border: 2px solid #4caf50;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, opacity 0.2s ease;
        opacity: 0;
        display: none; /* Hidden by default, can be enabled */
    `;
    document.body.appendChild(cursor);

    // Animate on scroll counter for doctor cards (add data-count attribute to use)
    document.querySelectorAll('[data-count]').forEach(element => {
        observer.observe(element);
        element.addEventListener('animationstart', () => {
            const target = parseInt(element.dataset.count);
            animateCounter(element, target);
        });
    });

    // Add particle effect to hero (lightweight)
    function createParticle() {
        const hero = document.querySelector('.hero-visual');
        if (!hero) return;

        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float-up 10s linear;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '0';
        
        hero.appendChild(particle);
        
        setTimeout(() => particle.remove(), 10000);
    }

    // Create particles every 2 seconds (optional, can be disabled for performance)
    // setInterval(createParticle, 2000);

    // Add CSS for float-up animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
            animation: ripple-animation 0.6s;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        body.loaded {
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Console message for developers
    console.log('%c🌿 Welcome to Guru Parampara - Shree Vishwa Asha Ayurvedic Panchakarma Centre', 'color: #1a5f3a; font-size: 16px; font-weight: bold;');
    console.log('%cWebsite designed with modern UI/UX practices', 'color: #4caf50; font-size: 12px;');
});
=======
// Enhanced UI interactions and animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for fade-in animations with stagger effect
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Stagger animation
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for navigation links with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Enhanced parallax effect for hero section
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    function handleScroll() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-visual');
        const heroContent = document.querySelector('.hero-content');
        const navbar = document.querySelector('.navbar');
        
        // Parallax background
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            
            // Fade out hero content as user scrolls
            const opacity = Math.max(0, 1 - scrolled / (window.innerHeight * 0.7));
            const scale = Math.max(0.9, 1 - scrolled / (window.innerHeight * 2));
            
            if (heroContent) {
                heroContent.style.opacity = opacity;
                heroContent.style.transform = `translateY(${scrolled * 0.2}px) scale(${scale})`;
            }
        }

        // Navbar scroll effect
        if (navbar) {
            if (scrolled > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // Add hover ripple effect to buttons
    document.querySelectorAll('.btn, .hero-cta').forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Enhanced treatment pills interactions
    document.querySelectorAll('.treatment-pill').forEach(pill => {
        pill.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });
    });

    // Doctor card tilt effect (subtle 3D effect)
    document.querySelectorAll('.doctor-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-16px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Counter animation for stats (if any)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Lazy load images with fade in
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease';
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Add loading animation to page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Scroll progress indicator (optional)
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #1a5f3a, #4caf50, #ffd700);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // Add custom cursor effect for interactive elements
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.cssText = `
        width: 40px;
        height: 40px;
        border: 2px solid #4caf50;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, opacity 0.2s ease;
        opacity: 0;
        display: none; /* Hidden by default, can be enabled */
    `;
    document.body.appendChild(cursor);

    // Animate on scroll counter for doctor cards (add data-count attribute to use)
    document.querySelectorAll('[data-count]').forEach(element => {
        observer.observe(element);
        element.addEventListener('animationstart', () => {
            const target = parseInt(element.dataset.count);
            animateCounter(element, target);
        });
    });

    // Add particle effect to hero (lightweight)
    function createParticle() {
        const hero = document.querySelector('.hero-visual');
        if (!hero) return;

        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float-up 10s linear;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '0';
        
        hero.appendChild(particle);
        
        setTimeout(() => particle.remove(), 10000);
    }

    // Create particles every 2 seconds (optional, can be disabled for performance)
    // setInterval(createParticle, 2000);

    // Add CSS for float-up animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
            animation: ripple-animation 0.6s;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        body.loaded {
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Console message for developers
    console.log('%c🌿 Welcome to Guru Parampara - Shree Vishwa Asha Ayurvedic Panchakarma Centre', 'color: #1a5f3a; font-size: 16px; font-weight: bold;');
    console.log('%cWebsite designed with modern UI/UX practices', 'color: #4caf50; font-size: 12px;');
});
>>>>>>> 0a3a1db6e046d8b0e488c57522dd7cade99a3cb6
