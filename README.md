#  Weather App
A simple, responsive, and real-time web application to check weather information for any city worldwide.  
The app provides accurate weather details while keeping the API key secure on the backend.

---

##  Problem Statement
Users need an easy-to-use web app to check live weather data for any city.  
The application should:
- Be responsive and user-friendly.
- Provide real-time weather updates.
- Keep API keys safe (not exposed on the frontend).

---

##  Tech Stack

**Frontend**
- HTML → Structure of the UI  
- Tailwind CSS → Styling and responsiveness  
- Vanilla JavaScript → Handles user interactions, API requests, and DOM updates  

**Backend**
- Node.js + Express → Provides API endpoints, fetches data from OpenWeatherMap, and sends clean JSON response  

**External API**
- [OpenWeatherMap API](https://openweathermap.org/api) → Provides live weather data  

---

##  Project Flow

1. User opens the app and sees a search bar.  
2. User types a city name and clicks **Search**.  
3. Frontend JS sends a request to the backend API.  
4. Backend (Node.js) fetches data from OpenWeatherMap using the **hidden API key**.  
5. Backend extracts only the required weather fields and sends them back as JSON.  
6. Frontend receives JSON and updates the UI (or shows an error).  

---

##  App Architecture

```

Frontend (HTML + Tailwind + JS)
|
\| (Fetch request)
v
Backend (Node.js + Express)
|
\| (API call with hidden key)
v
External API (OpenWeatherMap)

````

---

##  Features

-  Search weather by city name  
-  Display:
  - Temperature  
  - Weather condition  
  - Humidity  
  - Wind speed  
  - Weather icon  

---

##  Future Enhancements

-  User Authentication  
-  Database Integration (save search history)  
-  5-day Forecast  
-  Geolocation-based weather  
-  Dark Mode  

---

##  Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
````

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Setup Environment Variables

Create a `.env` file inside `backend/` and add:

```
API_KEY=your_openweathermap_api_key
PORT=5000
```

### 4. Run the Backend Server

```bash
node server.js
```

Server will start at: [http://localhost:5000](http://localhost:5000)

### 5. Open Frontend

Open `public/index.html` in your browser.

---

##  Screenshots (Optional)

*(Add screenshots/gifs of your UI here)*

---

##  Author

**Tanisha Thakur**

---

Would you like me to also **add markdown badges (like for Node.js, Tailwind, OpenWeatherMap)** at the top of your README for a more professional look?
```
