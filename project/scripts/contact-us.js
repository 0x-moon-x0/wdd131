const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');
const productSelect = document.getElementById('productSelect');
const form = document.querySelector('form');
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

function populateProducts(products, selectElement) {
    products.forEach(product => {
        const option = document.createElement('option');

        option.textContent = product.productName;

        selectElement.appendChild(option);
    });
}

function updateCounter() {
    let messageCount = localStorage.getItem('messageCount') || 0;
    messageCount++
    localStorage.setItem('messageCount', messageCount);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        updateCounter();
        window.location.href = 'thanks.html';
    } else {
        console.log('Form is not valid');
    }
});

populateProducts(products, productSelect);

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;