document.getElementById('footer-year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.getElementById('nav-close').addEventListener('click', () => {
    navLinks.classList.remove('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

const words = ['Web Developer', 'UI Designer', 'Freelancer'];
const el = document.getElementById('hero_typed');
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const word = words[wordIndex];
    el.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (!deleting) {
        deleting = true;
        setTimeout(type, 1800);
    } else if (charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
    }
}
type();

const skills = {
    frontend: ['html', 'css', 'js', 'typescript', 'react', 'tailwind', 'nextjs'],
    backend: ['python', 'node'],
    databases: ['mysql', 'mongodb', 'firebase', 'supabase', 'convex'],
    mobile: ['flutter', 'dart'],
    tools: ['git', 'github', 'vscode', 'linux'],
    UI: ['figma', 'canva', 'gimp', 'photopea']
};

const skillsGrid = document.getElementById('skills-grid');
const skillsBtns = document.querySelectorAll('.skills_btn');

function renderSkills(category) {
    const icons = skills[category] || [];
    skillsGrid.innerHTML = icons.map(icon => `
        <div class="skill_card">
            <img src="icons/${category}/${icon}.png" alt="${icon}">
        </div>
    `).join('');
}

skillsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        skillsBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderSkills(btn.dataset.category);
    });
});

renderSkills('frontend');

const nerdImg = document.querySelector('.skills_mobile_img');
const nerdSound = new Audio('sound/aah.mp3');

nerdImg.addEventListener('click', () => {
    nerdSound.currentTime = 0;
    nerdSound.play();
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();
    const mailto = `mailto:boucettamoez23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${name}\n${email}\n\n${message}`)}`;
    window.location.href = mailto;
});
