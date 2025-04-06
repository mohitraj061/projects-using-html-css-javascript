const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    });
};

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});