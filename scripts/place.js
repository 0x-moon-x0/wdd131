// last modified
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// using the metric system
const temperature = 11;
const wind = 3;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

if (temperature <= 10 && wind > 4.8) {
    document.getElementById('windchill').innerText = `${calculateWindChill(temperature, wind)} °C`;
} else {
    document.getElementById('windchill').innerText = 'N/A';
}