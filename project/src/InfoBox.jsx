import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox() {
  const IMG_URL =
    "https://tse1.mm.bing.net/th/id/OIP.rXsszHl2cy4fkGnXgNy4lwHaEK?pid=Api&P=0&h=180";

  let info = {
    city: "Indore",
    feelsLike: 24.4,
    humidity: 73,
    temp: 21.1,
    tempMax: 38.1,
    tempMin: 21.1,
    weather: "Haze",
  };

  return (
    <div className="InfoBox">
      <Card className="weather-card">
        <CardMedia component="img" image={IMG_URL} alt="Weather Image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" component={"span"}>
            <div>
              <p>🌡️ Temperature: {info.temp}&deg;C</p>
              <p>💧 Humidity: {info.humidity}%</p>
              <p>🌤️ Min Temperature: {info.tempMin}&deg;C</p>
              <p>🔥 Max Temperature: {info.tempMax}&deg;C</p>
              <p>
                🌈 Weather:{" "}
                <b>
                  <i>{info.weather}</i>
                </b>{" "}
                — feels like {info.feelsLike}&deg;C
              </p>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
