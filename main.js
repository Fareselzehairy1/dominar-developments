document.addEventListener('DOMContentLoaded', () => {
    console.log('Dominar Developments website initialized.');
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Dashboard cards hover effect
    const cards = document.querySelectorAll('.dashboard-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
    
    // Smooth scroll for navigation links
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
    
    // Animate progress bars on scroll
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width || entry.target.style.width;
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.roi-progress, .compound-progress').forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
        
        setTimeout(() => {
            bar.style.width = bar.dataset.width || bar.style.width;
        }, 500);
    });
});
