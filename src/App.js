import React from "react";
import axios from "axios";


function App() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c5862a4448861da19156a4827672bea8`

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
    const response = await axios.get(url)
          setData(response.data)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            type="text"
            placeholder="Enter location"
          />
        </div>
        <div className="top">
          <div className="location">
            <p>{data?.name}</p>
          </div>
          <div className="temp">
            <h1>{data?.main?.temp?.toFixed()}°F</h1>
          </div>
          <div className="description">
            <p>{data?.weather?.[0].main}</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className="bold">{data?.main?.feels_like?.toFixed()}°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data?.main?.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{data?.wind?.speed?.toFixed()} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
