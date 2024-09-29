const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');
const heading = document.getElementById('pg-heading');
const navLinks = document.querySelectorAll('.navbar a')

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

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;