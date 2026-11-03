const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const launchBtn = document.getElementById('launchBtn');
const learnBtn = document.getElementById('learnBtn');
const ctaButton = document.getElementById('ctaButton');

function showMessage(message) {
  alert(message);
}

if (launchBtn) {
  launchBtn.addEventListener('click', () => showMessage('Launching your AWS-powered project is ready to go! 🚀'));
}

if (learnBtn) {
  learnBtn.addEventListener('click', () => showMessage('Learn more about scalable cloud infrastructure and secure deployment workflows.'));
}

if (ctaButton) {
  ctaButton.addEventListener('click', () => showMessage('Welcome! Your project is ready to scale.'));
}
