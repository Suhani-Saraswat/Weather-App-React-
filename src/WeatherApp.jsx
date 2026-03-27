import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 27.28,
        humidity: 47,
        temp: 27.05,
        tempMax: 27.05,
        tempMin: 27.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="main_box">
           <h2>Weather App</h2>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/> 
        </div>
    );
}