window.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const cityInput = document.getElementById("cityInput");
  const resultDiv = document.getElementById("weatherResult");

  resultDiv.classList.add("hidden");

  searchBtn.addEventListener("click", getWeather);
  cityInput.addEventListener("keypress", e => { if (e.key === "Enter") getWeather(); });

  async function getWeather() {
    const city = cityInput.value.trim();

    if (!city) {
      resultDiv.classList.remove("hidden");
      resultDiv.className = "mt-8 p-6 rounded-2xl bg-red-100 text-red-700 font-semibold transition-all duration-500 shadow-inner";
      resultDiv.innerHTML = " Please enter a city name!";
      return;
    }

    try {
      resultDiv.classList.remove("hidden");
      resultDiv.className = "mt-8 p-6 rounded-2xl bg-green-100 text-green-900 font-medium transition-all duration-500 shadow-inner";
      resultDiv.innerHTML = " Fetching weather data...";

      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await res.json();

      if (data.error) {
        resultDiv.className = "mt-8 p-6 rounded-2xl bg-red-100 text-red-700 font-semibold transition-all duration-500 shadow-inner";
        resultDiv.innerHTML = ` ${data.error}`;
        return;
      }

      // Dynamic background based on weather
      let bgColor = "bg-green-100 text-green-900"; // default
      switch(data.condition.toLowerCase()) {
        case "clear": bgColor = "bg-yellow-100 text-yellow-900"; break;
        case "clouds": bgColor = "bg-green-100 text-green-900"; break;
        case "rain":
        case "drizzle": bgColor = "bg-blue-100 text-blue-900"; break;
        case "thunderstorm": bgColor = "bg-purple-100 text-purple-900"; break;
        case "snow": bgColor = "bg-white text-blue-900"; break;
      }

      resultDiv.className = `mt-8 p-6 rounded-2xl ${bgColor} font-medium transition-all duration-500 shadow-inner`;

      resultDiv.innerHTML = `
        <h2 class="text-2xl font-bold mb-3">${data.city}</h2>
        <p class="mb-1"> Temperature: ${data.temp}°C</p>
        <p class="mb-1"> Condition: ${data.condition}</p>
        <p class="mb-1"> Humidity: ${data.humidity}%</p>
        <p class="mb-1"> Wind Speed: ${data.wind} m/s</p>
        <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png"
             alt="Weather Icon"
             class="mx-auto w-24 h-24 transition transform hover:scale-110" style="filter: drop-shadow(2px 4px 6px rgba(126, 245, 168, 0.76)) hue-rotate(100deg);">
      `;
    } catch(err) {
      resultDiv.className = "mt-8 p-6 rounded-2xl bg-red-100 text-red-700 font-semibold transition-all duration-500 shadow-inner";
      resultDiv.innerHTML = "⚠️ Failed to fetch weather data.";
      console.error(err);
    }
  }
});
