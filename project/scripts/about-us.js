const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

function updateHeading(menuSelection) {
    document.getElementById('pg-heading').textContent = menuSelection;
}

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;