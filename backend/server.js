import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files (HTML, CSS, JS) from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Weather API route
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(404).json({ error: data.message });
    }

    res.json({
      city: data.name,
      temp: data.main.temp,
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: data.weather[0].icon,
    });
  } catch (err) {
    console.error("Error fetching weather:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
