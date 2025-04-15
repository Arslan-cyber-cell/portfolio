// Animation au scroll (fade-in)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.section, .card').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
