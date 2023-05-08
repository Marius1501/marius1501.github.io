// dark mode
const toggle = document.getElementById('toggle-dark');
const body = document.body;

const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggle.classList.add('bi-sun');
}

function toggleDarkMode() {
    const theme = body.classList.contains('dark-mode');

    body.classList.toggle('dark-mode');
    toggle.classList.toggle('bi-sun');
    
    const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
}

toggle.addEventListener('click', toggleDarkMode);
