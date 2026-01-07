// Efeito de neon piscante no título
const title = document.querySelector('h1');
setInterval(() => {
  title.style.textShadow = `0 0 ${Math.random() * 20}px #00ffff`;
}, 200);