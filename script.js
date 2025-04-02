const floatingElements = document.getElementById('floating-elements');
const colors = ['#ff79c6', '#bd93f9', '#8be9fd', '#50fa7b'];

for (let i=0;i < 20;i++){
    const element = document.createElement('div');
    element.classList.add('floating-element');

    const size= Math.random() * 80 + 20;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];

    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${x}%`;
    element.style.top = `${y}%`;
    element.style.background = color;
    element.style.opacity = Math.random() * 0.5 + 0.1;

    floatingElements.appendChild(element);
}

anime({
    targets: '.floating-element',
    translateX: function(){
        return anime.random(-50, 50);
    },
    translateY: function(){
        return anime.random(-50, 50);
    },
    scale: function(){
        return anime.random(0.8, 1.2);
    },
    opacity: function(){
        return anime.random(0.1, 0.5);
    },
    duration: 5000,
    delay: anime.stagger(200),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'

});

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.addEventListener('click', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
    setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 300);
});

document.addEventListener('DOMContentLoaded', () =>{
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {threshold: 0.1});

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseenter', () =>{
        anime({
            targets:skill,
            scale:1.1,
            duration:300,
            easing: 'easeOutQuad'
        });
    });

    skill.addEventListener('mouseleave', () => {
        anime({
            targets: skill,
            scale:1,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});
anime({
    targets: '.profile-image',
    translateY: ['-20px', '0px'],
    direction: 'alternate',
    loop:true,
    duration: 3000,
    easing: 'easeInOutQuad'
});

document.addEventListener('DOMContentLoaded', function() {
    const floatingContainer = document.getElementById('floating-elements');
    const colors = ['#5fb77e', '#7e5fb7', '#b75f7e', '#5fb7a0', '#b7a05f', '#5f7eb7', '#b75fa0', '#7eb75f', '#ec77c1', '#77c1ec'];
    const numElements = 15; // Adjust number of circles as needed
    
    for (let i = 0; i < numElements; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Random size between 30px and 150px
        const size = Math.floor(Math.random() * 120) + 30;
        
        // Random position
        const left = Math.floor(Math.random() * 100);
        const top = Math.floor(Math.random() * 100);
        
        // Random color from our palette
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        // Apply styles
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.backgroundColor = color;
        element.style.left = `${left}%`;
        element.style.top = `${top}%`;
        element.style.animationDelay = `${delay}s`;
        element.style.opacity = '0.7';
        
        floatingContainer.appendChild(element);
    }
});