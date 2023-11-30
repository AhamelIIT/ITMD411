let latitude;
let longitude;

document.getElementById('use-my-location').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            fetchData();
        }, function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

document.getElementById('get-data').addEventListener('click', function() {
    const city = document.getElementById('locations').value.toLowerCase();

    //switched to a switch case for better way of sending lat and lng onlt to api, that way it handles the UTF offset
    switch(city) {
        case 'chicago':
            latitude = 41.881832;
            longitude = -87.623177;
            break;
        case 'nyc':
            latitude = 40.730610;
            longitude = -73.935242;
            break;
        case 'la':
            latitude = 34.052235;
            longitude = -118.243683;
            break;
        case 'houston':
            latitude = 29.749907;
            longitude = -95.358421;
            break;
        case 'hawaii':
            latitude = 19.741755;
            longitude = -155.844437;
            break;
        default:
            alert("Please select a valid location.");
            return;
    }

    fetchData();
});


function fetchData() {
    const apiUrlToday = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=today`;
    const apiUrlTomorrow = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=tomorrow`;

    
    fetch(apiUrlToday)
        .then(response => response.json())
        .then(data => {
            document.querySelector(`#today-sunrise`).innerHTML = data.results.sunrise;
            document.querySelector(`#today-sunset`).innerHTML = data.results.sunset;
            document.querySelector(`#today-dawn`).innerHTML = data.results.dawn;
            document.querySelector(`#today-dusk`).innerHTML = data.results.dusk;
            document.querySelector(`#today-day-length`).innerHTML = data.results.day_length;
            document.querySelector(`#today-solar-noon`).innerHTML = data.results.solar_noon;
            document.querySelector('#raw-data-today').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error fetching the API', error);
        });

    fetch(apiUrlTomorrow)
        .then(response => response.json())
        .then(data => {
            document.querySelector(`#tomorrow-sunrise`).innerHTML = data.results.sunrise;
            document.querySelector(`#tomorrow-sunset`).innerHTML = data.results.sunset;
            document.querySelector(`#tomorrow-dawn`).innerHTML = data.results.dawn;
            document.querySelector(`#tomorrow-dusk`).innerHTML = data.results.dusk;
            document.querySelector(`#tomorrow-day-length`).innerHTML = data.results.day_length;
            document.querySelector(`#tomorrow-solar-noon`).innerHTML = data.results.solar_noon;
            document.querySelector('#time-zone').innerHTML = data.results.timezone;
            document.querySelector('#raw-data-tomorrow').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error fetching the API', error);
        });
}

