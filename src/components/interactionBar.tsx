import React, { useState } from "react";

//styles
import styles from "../styles/components/interactionBar.module.css";

const InteractionBar = (props: {
  cityHandler: any;
  unitsHandler: any;
  units: boolean;
}) => {
  const cities = [
    { name: "London", id: "london" },
    { name: "Lisbon", id: "lisbon" },
    { name: "New York", id: "new york" },
    { name: "Johannesburg", id: "johannesburg" },
  ];
  const cityListItems = cities.map((city, index) => (
    <li onClick={props.cityHandler} id={city.id} key={index}>
      {city.name}
    </li>
  ));

  const [dropState, setDropState] = useState(false);
  const dropStateHandler = () => setDropState(!dropState);

  return (
    <div className={styles.interactionBar}>
      <button
        className={styles.dropButton}
        onClick={dropStateHandler}
        style={{ backgroundColor: dropState ? "cadetblue" : "#245266" }}
      >
        Select city
      </button>

      <ul
        className={styles.dropDown}
        style={{ height: dropState ? "auto" : "0" }}
      >
        {cityListItems}
      </ul>

      <div className={styles.sliderContainer}>
        <span style={{ margin: "0 15px" }}>ºC</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            onChange={() => props.unitsHandler(!props.units)}
            checked={props.units}
          />
          <span className={styles.slider}></span>
        </label>
        <span style={{ margin: "0 15px" }}>ºF</span>
      </div>
    </div>
  );
};

export default InteractionBar;

/***************** OLD SOLUTION OF CREATING CITY LIST *****************

      <select className={styles.dropDown} onChange={props.cityHandler} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled hidden>
          Select City
        </option>
        <option value="london">London</option>
        <option value="new york">New York</option>
        <option value="lisbon">Lisbon</option>
      </select>

*/
