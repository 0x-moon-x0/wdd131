const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');
const productsGrid = document.getElementById('products-grid');
const sortDropdown = document.getElementById('sort-price');
const products = [
    {
        productName: 'Crochet Axolotls',
        description: 'Cute crochet axolotls made out of soft plush yarn.',
        author: 'Mariia',
        price: 12,
        image: 'images/crochet-axolotls.jpg'
    },
    {
        productName: 'Drop Earrings',
        description: 'Stylish drop earrings with bows.',
        author: 'Katherine',
        price: 8.50,
        image: 'images/earrings.jpg'
    },
    {
        productName: 'Crochet Hat',
        description: 'Crochet alternative fashion hat with cat ears.',
        author: 'Mariia',
        price: 20,
        image: 'images/crochet-hat.jpg'
    },
    {
        productName: 'Flower Hairpins',
        description: 'Delicate flower hairpins made out of EVA foam.',
        author: 'Liudmyla',
        price: 10.50,
        image: 'images/flower-hairpins.jpg'
    },
    {
        productName: 'Crochet Capybaras',
        description: 'Adorable crochet capybaras in different sizes.',
        author: 'Mariia',
        price: 7,
        image: 'images/crochet-capybaras.jpg'
    },
    {
        productName: 'Frog Keychain',
        description: 'Tiny frog keychain made out of seed beads.',
        author: 'Katherine',
        price: 15,
        image: 'images/seed-bead-frog.jpg'
    },
]

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

sortDropdown.addEventListener('change', (event) => {
    const sortOrder = event.target.value;
    sortProducts(sortOrder);
    populateProductCards(products);
});

function sortProducts(order) {
    products.sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
}

function populateProductCards(products) {
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
        <h2>${product.productName}</h2>
        <p><span class='label'>Description:</span> ${product.description}</p>
        <p><span class='label'>Author:</span> ${product.author}</p>
        <p><span class='label'>Price:</span> $${product.price.toFixed(2)}</p>
        <img src='${product.image}' alt='${product.productName}' loading='lazy'>`;

        productsGrid.appendChild(card);
    })
}

populateProductCards(products);

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;