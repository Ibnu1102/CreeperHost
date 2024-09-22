// Handling slide menu
const slideMenu = document.getElementById('slide-menu');
const closeButton = document.querySelector('.close-button');
const slideMenuForm = document.getElementById('slide-menu-form');
const orderButtons = document.querySelectorAll('.order-button');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        slideMenu.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    slideMenu.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === slideMenu) {
        slideMenu.style.display = 'none';
    }
});

slideMenuForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const item = document.getElementById('slide-item').value;
    const theme = document.getElementById('slide-theme').value;

    const message = `Item atau produk: ${item}\nTema atau model: ${theme}`;
    const whatsappUrl = `https://wa.me/6283857194862?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
});
