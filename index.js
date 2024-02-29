var inputValue = document.querySelector('#cityInput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityOutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temperature');
var wind = document.querySelector('#wind');
var apik = "bb29ecb62a5794878e18754a7646aef9"

let conversion =(val) =>{
    return (val - 273).toFixed(1);
}
let conversion2 =(val2) =>{
    return (val2 * 3.6).toFixed(1);
}

// btn.addEventListener('click', function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+apik)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }
//      return res.json();
//     })

//     .then(data =>
//         {
//             var nameval = data['name']
//             var skyDesc = data['weather']['0']['description']
//             var temperature = data['main']['temp']
//             var windspeed = data['wind']['speed']

//             city.innerHTML = `Weather of <span>${nameval}</span>`
//             temp.innerHTML = `Temperature: <span>${ conversion(temperature)} °C</span>`
//             description.innerHTML = `Sky conditions: <span>${skyDesc}</span>`
//             wind.innerHTML = `Wind Speed: <span>${conversion2(windspeed)} km/hr</span>`
//         })

//         .catch(err => alert('You have entered wrong city name'))

// })

function fetchWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+apik)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        var nameval = data['name'];
        var skyDesc = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${conversion(temperature)} °C</span>`; // Assuming conversion function is defined
        description.innerHTML = `Sky conditions: <span>${skyDesc}</span>`;
        wind.innerHTML = `Wind Speed: <span>${conversion2(windspeed)} km/hr</span>`; // Assuming conversion2 function is defined
    })
    .catch(err => alert('You have entered the wrong city name'));
}

// Event listener for the button click
btn.addEventListener('click', fetchWeatherData);

// Event listener for the keydown event on the input field
inputValue.addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Call the function to fetch weather data
        fetchWeatherData();
    }
});
