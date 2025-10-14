import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7dff6de9b8f96f12153d47964c3fb7e1";

  let weatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let josnResponse = await response.json();
    console.log(josnResponse);
    let result = {
      temp: josnResponse.main.temp,
      tempMin: josnResponse.main.temp_min,
      tempMax: josnResponse.main.temp_max,
      humidity: josnResponse.main.humidity,
      feelsLike: josnResponse.main.feelsLike,
      weather: josnResponse.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    weatherInfo();
  };

  return (
    <div className="SearchBox">
      <h2>Search for the weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <Button onSubmit={handleSubmit} variant="contained" type="Submit">
          Search
        </Button>
      </form>
    </div>
  );
}
