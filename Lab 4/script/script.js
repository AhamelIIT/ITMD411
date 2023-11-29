// Constants
const locationCoordinates = {
    chicago: { latitude: 41.881832, longitude: -87.623177 },
    nyc: { latitude: 40.730610, longitude: -73.935242 },
    la: { latitude: 34.052235, longitude: -118.243683 },
    houston: { latitude: 29.749907, longitude: -95.358421 },
    hawaii: { latitude: 19.741755, longitude: -155.844437 }
};

document.getElementById('get-data').addEventListener('click', function() {
    const city = document.getElementById('locations').value.toLowerCase();

    if (locationCoordinates[city]) {
        const { latitude, longitude } = locationCoordinates[city];
        fetchSunriseSunsetData(latitude, longitude);
    } else {
        alert("Please select a location.");
    }
});

function fetchSunriseSunsetData(latitude, longitude) {
    const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunrise').innerHTML = data.results.sunrise;
            document.querySelector('#sunset').innerHTML = data.results.sunset;
            document.querySelector('#data-dump').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error fetching the API', error);
        });
}
