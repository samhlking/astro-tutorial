const menuButton = document.getElementById('menu-button');
const mainMenu = document.getElementById('main-menu');

menuButton?.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', `${!isExpanded}`);
  mainMenu?.classList.toggle('hidden');
});