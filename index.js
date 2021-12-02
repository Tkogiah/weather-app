function log(a) {
    console.log(a)
}

const city = document.getElementById('city')
const state = document.getElementById('state')
const cityDisplay = document.getElementById('city-display')
const time = document.getElementById('time')
const weekday = document.getElementById('weekday')
const temperature = document.getElementById('temperature')
const high = document.getElementById('high')
const low = document.getElementById('low')

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}", true);
xhttp.send();