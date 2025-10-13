
const apiKey = 'YOUR_API_KEY'; 
const apiUrl = 'https:';

async function getWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
      return { error: "City not found" };
    }

    const data = await response.json();

    const weatherData = {
      city: data.name,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    };

    return weatherData;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { error: "Failed to fetch weather data" };
  }
}

async function getForecast(city) {
  const forecastApiUrl = `https:`
  try {
      const response = await fetch(forecastApiUrl);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const dailyForecast = {};
      data.list.forEach(forecast => {
          const date = forecast.dt_txt.split(' ')[0];
          if (!dailyForecast[date]) {
              dailyForecast[date] = {
                  date: date,
                  temps: [],
                  icons: [],
              };
          }
          dailyForecast[date].temps.push(forecast.main.temp);
          dailyForecast[date].icons.push(forecast.weather[0].icon);
      });

      const simplifiedForecast = Object.values(dailyForecast).map(day => {
          const sum = day.temps.reduce((a, b) => a + b, 0);
          const avgTemp = sum / day.temps.length;

          const iconCounts = {};
          day.icons.forEach(icon => {
              iconCounts[icon] = (iconCounts[icon] || 0) + 1;
          });

          let mostFrequentIcon = '';
          let maxCount = 0;
          for (const icon in iconCounts) {
              if (iconCounts[icon] > maxCount) {
                  mostFrequentIcon = icon;
                  maxCount = iconCounts[icon];
              }
          }

          return {
              date: day.date,
              avgTemp: Math.round(avgTemp),
              icon: mostFrequentIcon,
          };
      });

      return simplifiedForecast;

  } catch (error) {
      console.error("Error fetching forecast data:", error);
      return { error: "Failed to fetch forecast data" };
  }
}
