const card = document.getElementById('card');
const closeBtn = document.getElementById('closeBtn');
const heartsContainer = document.querySelector('.hearts');

function toggleCard() {
  card.classList.toggle('is-open');
}

card.addEventListener('click', (e) => {
  if (e.target === closeBtn) return;
  toggleCard();
});

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleCard();
});

function createHearts() {
  for (let i = 0; i < 16; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDuration = 6 + Math.random() * 6 + 's';
    h.style.animationDelay = Math.random() * 5 + 's';
    h.style.opacity = 0.4 + Math.random() * 0.5;
    heartsContainer.appendChild(h);
  }
}

createHearts();
