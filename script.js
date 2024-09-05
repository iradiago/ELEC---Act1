document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    // Show dropdown menu on hover for desktop
    dropdown.addEventListener('mouseover', () => {
        if (window.innerWidth > 768) {
            dropdownMenu.style.display = 'block';
        }
    });

    dropdown.addEventListener('mouseout', () => {
        if (window.innerWidth > 768) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Toggle dropdown menu on click for mobile
    dropdown.addEventListener('click', (event) => {
        event.preventDefault();
        if (window.innerWidth <= 768) {
            const isVisible = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isVisible ? 'none' : 'block';
        }
    });

    // Hide dropdown menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && !menuToggle.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});
