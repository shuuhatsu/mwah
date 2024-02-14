document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.star');
    const starCount = 50; // Number of stars to create

    for (let i = 0; i < starCount; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
        container.appendChild(star);
    }
});