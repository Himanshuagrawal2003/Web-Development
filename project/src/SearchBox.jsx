import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7dff6de9b8f96f12153d47964c3fb7e1";

  let weatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    if (error) setError(false);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(city);
      setCity("");
      setError(false);
      let newInfo = await weatherInfo();
      updateInfo(newInfo);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <Button variant="contained" type="Submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>❌ No Such Place Exists</p>}
      </form>
    </div>
  );
}
