import React, { useState, useEffect } from "react";

//components
import Header from "../components/header";
import InteractionBar from "../components/interactionBar";
import LowerDisplay from "../components/lowerDisplay";
import MainDisplay from "../components/mainDisplay";
import Loading from "../components/loading";
import Errors from "../components/error";

const Screen = (props: { APIKEY: string }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(false)

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("lisbon");
  const [units, setUnits] = useState(false);

  //handlers
  const reloadHandler = () => setReload(true);
  const cityHandler = (event: any) => setCity(event.target.id);
  const unitsHandler = (changedUnit: boolean) => setUnits(changedUnit);

  useEffect(() => {
    if(reload === true) setReload(false);
    setLoading(true);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?appid=" +
        props.APIKEY +
        "&q=" +
        city +
        "&units=" +
        (units ? "imperial" : "metric")
    )
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        if (data !== null || data !== "undefined") {
          setLoading(false);
          setError("");
          setWeatherData(data);
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [city, props.APIKEY, units, reload]);

  return (
    <div>
      <Header />
      {loading && <Loading />}
      {error !== "" && !loading &&(
        <Errors errorMessage={error} reloadHandler={reloadHandler} />
      )}
      {error === "" && !loading && weatherData && (
        <>
          <InteractionBar
            cityHandler={cityHandler}
            unitsHandler={unitsHandler}
            units={units}
          />
          <MainDisplay weatherData={weatherData} units={units} />
          <LowerDisplay weatherData={weatherData} />
        </>
      )}
    </div>
  );
};

export default Screen;
