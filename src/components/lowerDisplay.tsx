import React from "react";

//styles
import styles from "../styles/components/lowerDisplay.module.css";

const LowerDisplay = (props: { weatherData: any }) => {
  function timeConversion(time: number, offset: number) {
    let date = new Date((time + offset) * 1000);
    let hours = date.getHours();
    let finalHours = hours < 10 ? "0" + String(hours - 1) : String(hours - 1); // minus 1 hour due to GMT + 1
    let minutes = date.getMinutes();
    let finalMinutes = minutes < 10 ? "0" + String(minutes) : String(minutes);
    let newTime = finalHours + ":" + finalMinutes
    return newTime;
  }

  return (
    <div className={styles.lowerDisplay}>
      <p>
        Sunrise:{" "}
        <strong>
          {timeConversion(
            props.weatherData.sys.sunrise,
            props.weatherData.timezone
          )}
        </strong>
      </p>
      |
      <p>
        Sunset:{" "}
        <strong>
          {timeConversion(
            props.weatherData.sys.sunset,
            props.weatherData.timezone
          )}
        </strong>
      </p>
    </div>
  );
};

export default LowerDisplay;
