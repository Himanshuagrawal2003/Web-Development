import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './SearchBox.css'

export default function WeatherApp(){
    return(
        <div>
            <h2>Search for the weather</h2>
            <SearchBox />
            <br></br>
            <InfoBox />
        </div>
    );

}