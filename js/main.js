document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Sticky Header on Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Project Data
    const projects = [
        {
            title: "Belum ada proyek",
            description: "Belum ada",
            // image: "images/projects/project1.jpg",
            tags: ["HTML", "CSS", "JavaScript"],
            liveLink: "#",
            codeLink: "#"
        },
        // Tambahkan proyek lainnya
        {
            title: "Belum ada proyek",
            description: "Belum ada",
            // image: "images/projects/project1.jpg",
            tags: ["HTML", "CSS", "JavaScript"],
            // liveLink: "#",
            // codeLink: "#"
        },
        {
            title: "Belum ada proyek",
            description: "Belum ada",
            // image: "images/projects/project1.jpg",
            tags: ["HTML", "CSS", "JavaScript"],
            // liveLink: "#",
            // codeLink: "#"
        },
    ];
    
    // Render Projects
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank">Live Demo</a>
                    <a href="${project.codeLink}" target="_blank">Source Code</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simpan form data atau kirim ke server
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Tampilkan pesan sukses
        alert('Pesan Anda telah terkirim! Saya akan segera menghubungi Anda.');
        contactForm.reset();
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.slide-in:not(.animated)');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Jalankan sekali saat pertama kali dimuat
});