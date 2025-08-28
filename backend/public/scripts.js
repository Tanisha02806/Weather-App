// Attach event listener for button click
document.getElementById("searchBtn").addEventListener("click", getWeather);

// Allow pressing Enter in the input field
document.getElementById("cityInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = `<p style="color:red;">⚠️ Please enter a city name!</p>`;
    return;
  }

  try {
    // Show loading message
    resultDiv.innerHTML = `<p>⏳ Fetching weather data...</p>`;

    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await res.json();

    if (data.error) {
      resultDiv.innerHTML = `<p style="color:red;">❌ ${data.error}</p>`;
      return;
    }

    resultDiv.innerHTML = `
      <h2>${data.city}</h2>
      <p>🌡 Temperature: ${data.temp}°C</p>
      <p>☁ Condition: ${data.condition}</p>
      <p>💧 Humidity: ${data.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind} m/s</p>
      <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="Weather Icon">
    `;
  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">⚠️ Failed to fetch weather data.</p>`;
    console.error(err);
  }
}
