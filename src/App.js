import React, { useState } from "react";
import { styled } from "@mui/system";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 380,
  padding: "20px 10px",
  margin: "auto",
  borderRadius: 4,
  boxShadow: "0 3px 6px 0 #555",
  background: "white",
  fontFamily: "Montserrat",
});

const AppLabel = styled("span")({
  color: "black",
  margin: "20px auto",
  fontSize: 18,
  fontWeight: "bold",
});

// const CloseButton = styled("span")({
//   padding: "2px 3px",
//   backgroundColor: "black",
//   borderRadius: "50%",
//   color: "white",
//   position: "absolute",
// });

function App() {
  const [city, updateCity] = useState("");
  const [weather, updateWeather] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
