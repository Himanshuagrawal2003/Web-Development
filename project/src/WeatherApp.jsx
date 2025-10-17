import {useState} from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './SearchBox.css'

export default function WeatherApp(){
    let[weatherInfo , setWeatherInfo] = useState({
    city: "Indore",
    feelsLike: 24.4,
    humidity: 73,
    temp: 21.1,
    tempMax: 38.1,
    tempMin: 21.1,
    weather: "Haze",
  });

  let updateInfo = (result) =>{
    setWeatherInfo (result);
  };

    return(
        <div>
            <h2>Search for the weather</h2>
            <SearchBox  updateInfo ={updateInfo}/>
            <br></br>
            <InfoBox  info={weatherInfo}/>
        </div>
    );

}