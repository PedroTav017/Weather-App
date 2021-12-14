import React from "react";

//styles
import styles from "../styles/components/mainDisplay.module.css";

const MainDisplay = (props: { weatherData: any; units: boolean }) => {
  const imgSrc = () => {
    switch (props.weatherData.weather[0].description) {
      case "clear sky":
        return "01d";
      case "few clouds":
        return "02d";
      case "scattered clouds":
        return "03d";
      case "broken clouds":
        return "04d";
      case "overcast clouds":
        return "04d";
      case "shower rain":
        return "09d";
      case "rain":
        return "10d";
      case "thunderstorm":
        return "11d";
      case "snow":
        return "13d";
      case "mist":
        return "50d";
      default:
        return "50d";
    }
  };

  return (
    <div className={styles.mainDisplay}>
      <h3>{props.weatherData.name}</h3>
      <div>
        <span style={{ fontSize: "64px", fontWeight: "bold" }}>
          {Math.round(props.weatherData.main.temp)}
        </span>
        <span style={{ fontSize: "32px", marginLeft: "10px" }}>
          {props.units ? "ºF" : "ºC"}
        </span>
      </div>
      <p>{props.weatherData.weather[0].description}</p>
      <img
        src={"http://openweathermap.org/img/wn/" + imgSrc() + "@2x.png"}
        alt="weather condition"
      />
    </div>
  );
};

export default MainDisplay;
