// ── Dark Mode Toggle ──────────────────────────────────────────
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const mobileLabel = document.getElementById('mobileThemeLabel');

// Apply saved preference on every page load
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    sunIcon && sunIcon.classList.remove('hidden');
    moonIcon && moonIcon.classList.add('hidden');
    mobileLabel && (mobileLabel.textContent = 'Switch to Light Mode');
}

function toggleTheme() {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (sunIcon && moonIcon) {
        sunIcon.classList.toggle('hidden', !isDark);
        moonIcon.classList.toggle('hidden', isDark);
    }
    if (mobileLabel) {
        mobileLabel.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
}

themeToggle && themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile && themeToggleMobile.addEventListener('click', toggleTheme);