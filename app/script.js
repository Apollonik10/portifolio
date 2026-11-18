// Efeito de neon piscante no título
// Respeita a preferência do usuário por movimentos reduzidos
const title = document.querySelector('h1');

if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  setInterval(() => {
    title.style.textShadow = `0 0 ${Math.random() * 20}px #00ffff`;
  }, 200);
}