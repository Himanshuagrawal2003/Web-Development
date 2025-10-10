import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
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
