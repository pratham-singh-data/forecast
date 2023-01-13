import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "./App.css"
import { CenterredCircularProgress } from "./components/CenterredCircularProgress";
import { WeatherScroller } from "./components/WeatherScroller";
import { getDefaultLocation } from "./misc/getDefaultLocation";

function App() {
  // stores the location data
  const [location, setLocation] = useState(getDefaultLocation());
  // stores forecast data
  const [forecast, setForecast] = useState({});
  // toggles location editing
  const [edittingToggle, setEdittingToggle] = useState(false);
  // sets whether data is still loading
  const [isLoading, setIsLoading] = useState(true);

  // function to retreive weather data
  const getForecast = () => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=3&aqi=yes&alerts=no`).then(res => res.json()).then(res => {
      setForecast({forecast: res.forecast, location: res.location});

      // if forecast is not valid
      if(! res.forecast){
        setForecast({forecast: {forecastday: []}, location: {name: "Undefined", country: "undefined"}});
      }

      setIsLoading(false);
    })
  }
  console.log(forecast)

  // store in localstirage on change
  useEffect(() => {
    localStorage.setItem("forecaster-location", location);
  }, [location])

  // get forecast data on first load
  useEffect(() => {
    getForecast();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Box className="top-display">
        3 Day Forecast
      </Box>

      {isLoading &&
        <CenterredCircularProgress/>
      }

      {! isLoading &&
        <Box className="vertical-centerring">
          {edittingToggle &&
            <TextField variant="outlined" value={location} sx={{my: "10px"}} onChange={(ev) => {
              setLocation(ev.target.value)
            }} onKeyDown={(ev) => {
              if(ev.keyCode === 13){
                setIsLoading(true);
                getForecast();
                setEdittingToggle(false);
              }
            }} />
          }

          {!edittingToggle &&
            <Typography variant="p" sx={{cursor: "pointer"}} onClick={() => {
              setEdittingToggle(true);
            }}>
              {forecast.location.name}, {forecast.location.country}
            </Typography>
          }

          <WeatherScroller forecast={forecast.forecast.forecastday} />

        </Box>
      }
    </div>
  );
}

export default App;
