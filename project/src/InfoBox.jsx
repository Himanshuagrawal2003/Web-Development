import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const HOT_URL = "https://wallpaperaccess.com/full/1252278.jpg";
  const COLD_URL =
    "https://static.vecteezy.com/system/resources/thumbnails/036/600/350/small_2x/ai-generated-magic-winter-background-with-copy-space-free-photo.jpg";
  const RAIN_URL =
    "https://www.hdwallpapers.in/download/falling_rain_drops_on_white_umbrella_hd_rain-HD.jpg";

  return (
    <div className="InfoBox">
      <Card className="weather-card">
        <CardMedia
          component="img"
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
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
