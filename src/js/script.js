var app = document.getElementById('typing');
 
var typewriter = new Typewriter(app, {
    strings: ['Developer', 'Designer'],
    cursor: '',
    loop: true,
    delay: 100,
    autoStart: true
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.presentacion', {delay:300});
sr.reveal('.perfil', { delay: 300});

sr.reveal('.img-about', { delay: 300});
sr.reveal('.about-text', { delay: 300});

sr.reveal('.skills-subtitle', { delay: 300});
sr.reveal('.skills-img', { delay: 300});
sr.reveal('.span', { interval: 50});

// sr.reveal('.portfolio-image', { interval: 300});

sr.reveal('.contact-izquierda', { delay: 300});

// sr.reveal('.button', { delay: 400});