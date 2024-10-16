const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');
const heading = document.getElementById('pg-heading');
const navLinks = document.querySelectorAll('.navbar a');
const templesGrid = document.getElementById('temples-grid');
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Calgary Alberta",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-736359-wallpaper.jpg"
    },
    {
        templeName: "Denver Colorado",
        location: "Denver, Colorado, United States",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-colorado-temple-lds-845690-wallpaper.jpg"
    },
  ];

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function updateHeading(menuSelection) {
    // update heading to match menu selection
    heading.textContent = menuSelection;

    // remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // find the selected link by matching its text with menuSelection and make it 'active'
    const clickedLink = Array.from(navLinks).find(link => link.textContent === menuSelection);
    if (clickedLink) {
        clickedLink.classList.add('active');
    }
}

function populateTempleCards(temples) {
    templesGrid.innerHTML = '';

    temples.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';

        card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><span class='label'>Location:</span> ${temple.location}</p>
        <p><span class='label'>Dedicated:</span> ${temple.dedicated}</p>
        <p><span class='label'>Area:</span> ${temple.area} square feet</p>
        <img src='${temple.imageUrl}' alt='${temple.templeName}' loading='lazy'>`;

        templesGrid.appendChild(card);
    })
}

// a filter function for all cases
function filterTemples(criteria) {
    switch (criteria) {
        case 'Old':
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        case 'New':
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        case 'Large':
            return temples.filter(temple => temple.area > 90000);
        case 'Small':
            return temples.filter(temple => temple.area < 10000);
        default:
            return temples;
    }
}

// attaching event listeners
['home', 'old', 'new', 'large', 'small'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
        const filterCriteria = id.charAt(0).toUpperCase() + id.slice(1);
        updateHeading(filterCriteria);
        populateTempleCards(filterTemples(filterCriteria));
    });
});

populateTempleCards(temples);