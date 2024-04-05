function searchWeather() {
    const apiKey = '9a7e9c86a3cfa33f25977ebe941abad2'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const cityName = document.getElementById('searchInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon" class="weather-icon"></p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            `;
        })
        .catch(error => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `<p>${error.message}</p>`;
        });
}