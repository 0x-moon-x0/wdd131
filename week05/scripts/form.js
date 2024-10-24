const productSelect = document.getElementById('productSelect');
const form = document.querySelector('form');

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function populateProducts(products, selectElement) {
    products.forEach(product => {
        const option = document.createElement('option');

        option.value = product.id;
        option.textContent = product.name;

        selectElement.appendChild(option);
    });
}

function updateCounter() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++
    localStorage.setItem('reviewCount', reviewCount);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        updateCounter();
        window.location.href = 'review.html';
    } else {
        console.log('Form is not valid');
    }
});

populateProducts(products, productSelect);

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;