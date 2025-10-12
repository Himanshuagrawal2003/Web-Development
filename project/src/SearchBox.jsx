import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  const API_URL = "http://api.weatherapi.com/v1/current.json";
  //const API_KEY="bed309670cab4f18b93122906251110";
  
  let weatherInfo = async () =>{
    let response =  await fetch(`${API_URL}?Key=${API_KEY}&q=${city}&aqi=no`);
    let josnResponse = await response.json();
    console.log(josnResponse);
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
