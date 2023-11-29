let latitude;
let longitude;

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
    const apiUrl = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunrise').innerHTML = data.results.sunrise;
            document.querySelector('#sunset').innerHTML = data.results.sunset;
            document.querySelector('#raw-data').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error fetching the API', error);
        });
}
