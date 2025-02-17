// Responsive Navigation
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Fetch Menu Items from JSON
async function fetchMenu() {
  try {
    const response = await fetch('data/menu.json');
    const data = await response.json();
    displayMenu(data);
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
}

function displayMenu(menuItems) {
  const menuContainer = document.getElementById('menu-items');
  menuContainer.innerHTML = menuItems.map(item => `
    <div class="menu-item">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">$${item.price.toFixed(2)}</p>
    </div>
  `).join('');
}

// Fetch and display menu items when the page loads
fetchMenu();

// Background Image Rotation (for the home page)
const backgroundImages = [
  'url("images/hero1.jpg")',
  'url("images/hero2.jpg")',
  'url("images/hero3.jpg")',
  'url("images/hero4.jpg")',
];

let currentIndex = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
  if (hero) {
    hero.style.backgroundImage = backgroundImages[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundImages.length;
  }
}

if (hero) {
  setInterval(changeBackground, 5000);
  changeBackground();
}