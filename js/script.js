const toggles = document.querySelectorAll('.faq-list .toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const description = toggle.parentElement.querySelector('.description');
        const isActive = description.classList.contains('active');
        description.classList.toggle('active');
        toggle.textContent = isActive ? '+' : '−';
    });
});