document.addEventListener('DOMContentLoaded', function() {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
                    bsCollapse.hide();
                }
            }
        });
    });

    // Add active class to nav items on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    function setActiveNavItem() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = '#' + section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavItem);
    setActiveNavItem(); // Call once on load

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .section-title, .profile-image-container, .job-description');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once on load

    // Form submission handling (for contact form if added later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted!');
        });
    }

    // Add animation delay to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add hover effect to project cards
    projectCards.forEach(card => {
        const projectImage = card.querySelector('.project-image');
        
        card.addEventListener('mouseenter', () => {
            if (projectImage) {
                projectImage.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (projectImage) {
                projectImage.style.transform = 'scale(1)';
            }
        });
    });

    // Add animation to skills list items
    const skillsListItems = document.querySelectorAll('.skills-list li');
    skillsListItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('animate__animated', 'animate__fadeInUp');
    });
});

// Add loading animation
window.addEventListener('load', function() {
    // Remove loading class from body
    document.body.classList.remove('loading');
    
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
});
